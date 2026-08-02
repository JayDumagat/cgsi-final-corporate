# CGSI institutional website — design rationale

This document records the design-thinking and HCI decisions behind the Caballes-Go Securities,
Inc. website. It protects the reasoning behind the system so later updates do not reduce it to a
generic campaign template.

## 1. Empathize

### Audiences and jobs to be done

| Audience | Primary need | Main concern | Designed pathway |
| --- | --- | --- | --- |
| High-net-worth individuals | A discreet, accountable brokerage relationship | “Who owns my instruction and how is risk handled?” | Individuals & Families → Services → Governance |
| OFWs and seafarers | Continuity across distance and time zones | “Can I get clear support when I am away?” | OFWs & Seafarers → Account readiness → Contact |
| Couples and families | Decisions aligned around shared long-term needs | “How do we make choices together without chasing noise?” | Individuals & Families → Why Equities → Research |
| Institutions and corporations | Responsive local-market capability | “Can the firm support professional process and operations?” | Institutions → Services → Governance |
| Students and fresh graduates | Plain-language orientation | “Where do I start, and what could go wrong?” | New Investors → Insights → Why Equities |

Across audiences, the recurring questions are legitimacy, relevance, risk, operational ownership,
and the next practical action.

## 2. Define

### Core problem

Create an experience that feels mature, accountable, and institutional without inventing
longevity; contemporary without resembling a speculative fintech; and approachable without
flattening complex financial decisions into promotional claims.

### Experience principles

- **Calm before conversion:** substantial editorial space establishes purpose before asking for a
  commitment.
- **Proof in one place:** governance and oversight have a clear home instead of credibility claims
  being scattered through every section.
- **Depth through architecture:** overview pages orient; dedicated pages answer deeper questions.
- **Human accountability:** technology supports the relationship but does not replace ownership.
- **Progressive disclosure:** users see the minimum needed to choose a pathway, then can go deeper.
- **No implied certainty:** copy never promises returns or treats one product as universally best.

## 3. Benchmark and ideate

Current public structures from Fidelity, Principal, Ameriprise, T. Rowe Price, Prudential, UBS, and
Vanguard were reviewed as category references. The common institutional patterns were:

- a narrow utility bar for support, disclosures, and secure access;
- one concise primary-navigation row;
- mega menus for breadth rather than placing every destination in the header;
- large editorial photography used as content, not decoration;
- one primary idea per section;
- generous spacing with disciplined rules and aligned grids;
- audience, goal, and service pathways distributed across true pages;
- regulatory and security content grouped into coherent proof areas.

CGSI translates those patterns into its own identity:

- deep blue-green communicates stability;
- bright logo green is reserved for action and directional emphasis;
- precise rules and aligned geometry express accuracy and forward motion;
- Source Serif 4 adds editorial authority while Manrope keeps operational content legible;
- real photography grounds the firm in people, place, and process;
- square, restrained surfaces replace rounded “app card” styling;
- icons are limited to functional direction, disclosure, or interface state.

## 4. Information architecture

The site is a real multipage corporate system, not a long homepage split into routes.

| Layer | Purpose | Pages |
| --- | --- | --- |
| Institutional overview | Establish CGSI’s proposition and route visitors | Home |
| Client relationships | Explain relevance by circumstance | Clients overview + four client pages |
| Capabilities | Explain how the brokerage relationship works | Services overview + four service pages |
| Corporate assurance | Company, history, oversight, and controls | About, Governance, Risk Management |
| Investor education | Support informed comparison and judgment | Why Equities, Insights, article pages |
| Service tasks | Move from evaluation to action | Open Account, Contact, Login |
| Legal foundation | Make risk and data handling findable | Privacy, Disclosures |

The homepage follows a corporate decision sequence: proposition, quick actions, sourced market
snapshot, expertise, research, company profile, leadership, investor resources, newsroom,
pressroom, and one final next step. Detail belongs on deeper pages.

## 5. Copy strategy

The Problem–Agitation–Solution framework is used without sounding like direct-response advertising:

- **Problem:** information is abundant, but interpretation, execution, and continuity are
  fragmented.
- **Agitation:** fragmented ownership forces investors to repeat context and can amplify rushed
  decisions.
- **Solution:** CGSI brings research, human guidance, execution, and post-trade support into one
  accountable relationship.

The investment-product comparison page presents equities relative to deposits, bonds, funds, and
property by role, liquidity, variability, control, and risk. It does not declare a universal
winner.

## 6. HCI implementation

### Recognition over recall

The mega menu shows destination names and brief descriptions in context. Client and service
overview pages mirror that language, so users do not need to remember product terminology.

### Progressive disclosure

Overview pages provide enough information to choose. Dedicated pages hold process, advantages,
considerations, and next steps. Contact and account tasks disclose requirements before directing
visitors to a verified service channel.

### Visibility of system status

- active navigation routes are indicated;
- mega menus and mobile accordions communicate expanded state;
- insight filters expose active categories and result counts;
- account opening is presented as a clear four-stage process with approval caveats.

### User control and error prevention

- mobile menus and disclosure sections can be closed without losing page context;
- account and contact pages state which sensitive information must not be submitted by ordinary email;
- external links are identified;
- investment risk is visible before conversion;
- no critical task depends on hover or animation.

### Accessibility and inclusive use

- semantic landmarks and a logical heading hierarchy;
- skip link and visible keyboard focus;
- at least 44-pixel interactive targets;
- sufficient contrast and text reinforcement for color;
- responsive reading order and purposeful image crops;
- `prefers-reduced-motion` support;
- image alternatives describe relevant content rather than visual decoration.

### Information density

Institutional does not mean crowded. Each section has one job, body copy uses controlled line
lengths, and section changes are separated by scale, spacing, or rules. Regulatory proof is
centralized in Governance, Investor Relations, Disclosures, and the legal footer rather than
repeated as decorative credibility claims throughout the homepage.

## 7. Motion principles

Motion for React is used for orientation, hierarchy, and state:

- brief ordered hero entry;
- small-distance, once-only reveals reserved for major homepage sections;
- restrained mega-menu and mobile-navigation transitions;
- insight-filter state changes.

Motion is never required to read or operate the site. Reduced-motion preferences remove
nonessential transitions.

## 8. Content and imagery principles

- Photography must be real, editorial, and license-documented.
- Images represent clients, professionals, place, and operational context.
- No AI-generated people, floating dashboards, glowing coins, handshakes, or generic growth arrows.
- “Established” is communicated through hierarchy, restraint, consistency, and governance—not an
  unverified number of years.
- All regulatory, historical, contact, and account facts require final CGSI review.

## 9. Validation checklist

- Root lint, production build, and rendered-output test pass.
- Payload lint, type generation, and production build pass.
- Every primary route is present in the production build.
- Mega-menu keyboard, pointer, and route behavior is checked.
- Mobile navigation does not depend on desktop hover behavior.
- Generated imagery is absent; source documentation covers every included photograph.
- Legal and compliance stakeholders approve facts and public wording before launch.
