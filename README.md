# Seed Frontend Engineering Take-Home

## 🎯 Approach: The Vertical Slice

Per the "Show, Don't Tell" philosophy discussed with Jon, I treated this assignment as a **Vertical Slice Prototype**.

Instead of delivering three low-fidelity scenes, I prioritized **Scene 1 (Intro)** with high-fidelity polish, a production-grade orchestration engine, and a scalable architectural foundation. This demonstrates the "Seed Quality" bar within a realistic timeframe.

## 🏗️ Architectural Decisions

### 1. Framework & Routing (App Router)

I migrated the structure to the Next.js **App Router** to leverage Server Components and the new Layout RFC. This positions the app for better performance (RSC) and modernized state management compared to the legacy Pages router.

### 2. Styling Strategy (Linaria)

I chose **Linaria** for Zero-runtime CSS. While this incurred a higher upfront configuration cost (~1.5 hours) compared to Tailwind or CSS Modules, it ensures:

- **Performance:** No JS bundle bloat for styles.
- **Composition:** A component-centric styling model that scales better for complex motion UIs.

### 3. Dynamic Content Engine

To demonstrate lifecycle thinking, I replaced the static "Intro" text with a time-aware content generator. The interface calculates the user's specific position in the journey relative to a `START_DATE`, serving personalized copy (e.g., "Day 1" vs "Week 4") without requiring design changes.

## ⏱️ Scoping & Calibration

To execute the full prompt with production-grade fidelity (including the complex "Train" interaction and auto-play orchestration), I estimate the total effort at **~15.5 engineering hours**.

Given the time constraints, I focused on the highest-risk technical challenges.

| Feature Area                 | Est. Hours | Justification                                                                             |
| :--------------------------- | :--------- | :---------------------------------------------------------------------------------------- |
| **1. Architecture & Config** | **1.5**    | Toolchain setup, TypeScript strictness, and Linaria integration.                          |
| **2. Scene Orchestration**   | **3.5**    | Building the central "Director" engine to handle auto-play timers and scroll-locking.     |
| **3. The "Train" Timeline**  | **4.5**    | Complex bidirectional state machine (Timeline controls Scene vs. Scene updates Timeline). |
| **4. Scene 1 (Intro)**       | **2.0**    | High-fidelity entrance choreography and brand-aligned easing tuning.                      |
| **5. Scenes 2 & 3**          | **2.0**    | Implementing sequential auto-play logic and video synchronization.                        |
| **6. A11y & Polish**         | **2.0**    | Semantic HTML, ARIA labels, and keyboard navigation.                                      |
| **TOTAL**                    | **~15.5**  | **~2 Days Work**                                                                          |

### Actual Time Spent: 6.5 Hours

- **Foundational (2.5h):** Setup, Architecture, Orchestration Engine.
- **Execution (4.0h):** High-fidelity implementation of Scene 1, Dynamic Text, and Documentation.

## 🚀 Roadmap (What I'd do differently)

Given more time, I would shift focus from "implementation" to "operationalization."

1.  **Scene Orchestration:** Complete the "Director" engine to handle the auto-play sequence for Scenes 2 & 3, ensuring video `onEnded` events trigger smooth page transitions.
2.  **Mobile Strategy:** Implement a responsive layout switch. On mobile (`<768px`), the horizontal scroll paradigm should revert to a vertical stack to respect native device behaviors.
3.  **Accessibility (A11y):** Implement a `usePrefersReducedMotion` hook. If detected, the system should disable the entrance staggers and auto-play transitions to ensure vestibular safety.
4.  **Observability:** Instrument Real User Monitoring (RUM) to correlate entrance animation timing with "Begin Journey" conversion rates.
