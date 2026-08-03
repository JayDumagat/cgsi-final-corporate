FROM node:22-bookworm-slim AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npx vinext build
RUN npm run validate:artifact

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs --create-home web

COPY --from=builder --chown=web:nodejs /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=web:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=web:nodejs /app/dist ./dist
COPY --from=builder --chown=web:nodejs /app/public ./public
COPY --from=builder --chown=web:nodejs /app/next.config.ts /app/vite.config.ts ./
COPY --from=builder --chown=web:nodejs /app/.openai ./.openai

USER web
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=5s --start-period=20s --retries=5 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"

CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0", "--port", "3000"]
