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
