"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  id?: string;
  animate?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
  animate = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -8, y: 0 }
      : direction === "right"
        ? { x: 8, y: 0 }
        : direction === "none"
          ? { x: 0, y: 0 }
          : { x: 0, y: 8 };

  if (!animate) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <m.div
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.32,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </m.div>
  );
}

export function HeroCopy({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.04 },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function HeroLine({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </m.div>
  );
}
