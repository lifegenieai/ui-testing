# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 UI prototyping environment configured for rapid component development and testing. Built with TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Development Commands

```bash
npm run dev     # Start dev server with Turbopack (http://localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture

### Stack
- **Next.js 16.0.1** with App Router and Turbopack
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS** with CSS variables for theming
- **shadcn/ui** (New York style, RSC-enabled)
- **Framer Motion** for animations

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   └── globals.css   # Tailwind + CSS variables for theming
├── components/
│   └── ui/           # shadcn/ui components (added via CLI)
└── lib/
    └── utils.ts      # cn() utility for className merging
```

### Import Aliases
Configured in `tsconfig.json`:
- `@/*` maps to `src/*`

Configured in `components.json` for shadcn:
- `@/components` → component files
- `@/components/ui` → shadcn UI components
- `@/lib` → utilities
- `@/hooks` → custom hooks

## Styling System

### Tailwind Theme
Uses HSL-based CSS variables defined in `src/app/globals.css` with full dark mode support:
- Semantic color tokens: `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`
- Each token has HSL values in `:root` (light) and `.dark` (dark mode)
- Dark mode toggled via class strategy: `darkMode: ["class"]`

### className Utility
Use `cn()` from `@/lib/utils` to merge Tailwind classes with proper precedence:
```tsx
import { cn } from "@/lib/utils"
className={cn("base-classes", conditional && "conditional-classes", className)}
```

## shadcn/ui Integration

### Adding Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Components are installed to `src/components/ui/` and can be modified directly.

### Configuration
- Style: `new-york`
- RSC: enabled
- CSS Variables: enabled
- Base color: `neutral`

## Framer Motion

Pre-installed at v11.15.0. Use for animations:
```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Next.js 16 Considerations

- Uses React 19 (automatic JSX runtime)
- Turbopack enabled by default for faster dev builds
- App Router with RSC (React Server Components) by default
- Client components need `"use client"` directive
