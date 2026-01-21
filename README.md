# Seed Frontend Engineering Take-Home

## Architectural Decisions

### 1. Framework Modernization (App Router)

I chose to migrate the project structure from the **Pages Router** to the **App Router** (`src/app`).

- **Layout Architecture:** Leverages the Layout RFC (`layout.tsx`) for a more efficient global shell to manage Design System tokens and fonts, replacing the legacy `_app.tsx` / `_document.tsx` pattern.
- **Server Components:** Establishes a foundation for performance-first architecture (RSC), reducing client-side bundle size by keeping non-interactive logic on the server.
- **Technical Debt:** As Next.js now defaults to App Router, adhering to the Pages Router in a greenfield implementation would introduce immediate legacy debt.

### 2. Dependency Upgrades & Security

I performed a comprehensive upgrade of `package.json` dependencies to their latest stable versions.

- **Vulnerability Mitigation:** This upgrade addresses recent security advisories associated with older Next.js versions (specifically regarding **Cache Poisoning** and **SSR Denial-of-Service** vectors).
- **Strictness:** Ensures full compatibility with the latest TypeScript strict mode and React ecosystem standards.

### 3. CSS

I chose a robust CSS-in-JS architecture (Linaria) to demonstrate scalable styling. This incurred an upfront configuration cost that ate into the implementation time, but it results in a more performant runtime (zero-runtime CSS) for the end user.

## ⏱️ Scoping & Estimation

To execute the full prompt with production-grade fidelity (including complex timeline interactions and proper accessibility), I estimate the total effort at **~18 engineering hours**.

Given the 3-hour constraint, I focused on the highest-risk technical challenges: the core physics engine and a high-fidelity execution of Scene 1. This factors in heavy assist from an agentic AI coding assistant.

| Feature Area                  | Time Estimate | Justification                                                                                                                            |
| :---------------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Architecture & Config**  | **0.5 Hour**  | Setup, Linting, Fonts, and Linaria (Zero-runtime CSS) configuration.                                                                     |
| **2. Physics Engine**         | **0.5 Hours** | Building a robust `useVirtualScroll` hook that handles touch, wheel, and keyboard events without scroll-jacking or jank.                 |
| **3. The "Train" Timeline**   | **3 Hours**   | Developing the complex state machine for the interactive timeline, including precise pixel-mapping, progress tracking, and hover states. |
| **4. Scene 1 (Intro)**        | **1.5 Hours** | High-fidelity layout and entrance choreography. Tuning stagger delays and easing curves to match the brand feel.                         |
| **5. Scenes 2 & 3**           | **1.5 Hours** | Adapting the layout engine for inverted split-screens and video integration.                                                             |
| **6. Accessibility & Polish** | **2 Hours**   | Semantic HTML, ARIA labels, and focus states for keyboard navigation.                                                                    |
| **TOTAL**                     | **~9 Hours**  | **~1.25 Days of Work**                                                                                                                   |
