# UI Testing Playground

A Next.js 16 prototyping environment for building and testing modern UI components with TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Next.js 16.0.1** - React framework with App Router and Turbopack
- **React 19** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library (New York style)
- **Framer Motion** - Declarative animations library
- **Embla Carousel** - Lightweight carousel library
- **React PageFlip** - 3D page flipping library for interactive books
- **Radix UI** - Unstyled, accessible UI components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## UI Prototypes

### 1. Timeline (`/timeline`)

An interactive vertical timeline component with scroll-triggered animations. Features:
- Chronological content display with year markers
- Image galleries for each timeline entry
- Smooth scroll animations as items come into view
- Responsive grid layouts
- Hover effects with scale and brightness transitions

**Component:** `src/components/ui/timeline.tsx`

### 2. Chat Input (`/chat-input`)

An AI-powered chat input component with advanced features:
- **Auto-resizing textarea** - Dynamically expands as you type (min: 48px, max: 164px)
- **Animated placeholder** - Alternates between "Ask Skiper Ai..." and "Search the web..."
- **File upload** - Paperclip icon for attaching images
- **Search toggle** - Globe icon to toggle between chat and search modes
- **Smart submit** - Press Enter or click send button
- Gradient styling with modern UI design

**Component:** `src/components/ui/ai-input.tsx`

### 3. 3D Carousel (`/3d-carousel`)

A three-dimensional photo carousel with perspective effects:
- 3D transforms for depth and rotation
- Smooth transitions between slides
- Interactive navigation
- Embla Carousel integration
- Responsive design

**Component:** `src/components/ui/3d-carousel.tsx`

### 4. Project Gallery (`/project-gallery`)

A modern project showcase gallery featuring:
- Grid-based layout with responsive design
- High-quality project cards with images
- Title, description, and link for each project
- Hover effects and interactions
- External link integration
- Optimized for showcasing portfolios or case studies

**Component:** `src/components/ui/gallery4.tsx`

### 5. Animated Chat Text (`/animated-chat-text`)

Text animation demonstrations using Framer Motion with multiple granularities:
- **Chunk to Character Demo** - Left side animates by paragraphs, right side by individual characters
- **Chunk to Word Demo** - Left side animates by paragraphs, right side by words
- **Custom Hook Architecture** - `useAnimatedText` hook for flexible text animations
- **Smart Timing** - Optimized durations: 8s for characters, 4s for words, 2s for chunks
- **State Preservation** - Intelligently handles text changes (perfect for streaming chat)
- Side-by-side comparison view with restart controls

**Component:** `src/components/ui/animated-text.tsx`

### 6. Placeholders and Vanish Input (`/placeholders-and-vanish-input`)

An innovative search input with rotating placeholders and particle-based vanish animation:
- **Rotating placeholders** - Cycles through placeholder text every 3 seconds
- **Canvas-based animation** - Text transforms into dispersing pixels on submit
- **Particle effects** - Characters break apart and scatter with physics-based motion
- **Smooth transitions** - Framer Motion for placeholder changes
- **Visibility API integration** - Pauses animations when tab is hidden
- **Responsive design** - Adapts to mobile and desktop screens

**Component:** `src/components/ui/placeholders-and-vanish-input.tsx`

### 7. Flip Card (`/flip-card`)

A 3D flip card component with animated features and dual-sided content:
- **3D flip animation** - Smooth 180° rotation on hover with perspective
- **Animated code blocks** - Sliding code bars on the front with staggered delays
- **Feature showcase** - Back side reveals detailed feature list with icons
- **Customizable theming** - Dynamic color scheme via CSS custom properties
- **Staggered reveals** - Features slide in sequentially for visual impact
- **Interactive elements** - Hover states and call-to-action button

**Component:** `src/components/ui/flip-card.tsx`

### 8. Glass Button (`/glass-button`)

A liquid glass effect button with advanced visual styling:
- **Liquid glass effect** - SVG filter-based distortion for realistic glass appearance
- **Multiple variants** - Includes LiquidButton, MetalButton, and standard Button styles
- **Interactive states** - Hover and press animations with scale transforms
- **Hardware acceleration** - Uses transform-gpu and will-change for smooth 60fps animations
- **Touch detection** - Adapts behavior for touch vs mouse devices
- **Radix UI integration** - Flexible rendering with asChild prop support

**Component:** `src/components/ui/liquid-glass-button.tsx`

### 9. 3D Book (`/3d-book`)

An interactive 3D flip book testimonial showcase:
- **Realistic page flipping** - Physics-based page turning with react-pageflip
- **Interactive navigation** - Click and drag to flip pages or jump via index
- **Cover and content pages** - Branded cover, clickable index, testimonial pages, and thank you page
- **Rating display** - Star ratings with filled/unfilled states
- **Responsive design** - Switches between portrait and landscape modes based on screen size
- **Image integration** - Profile photos and testimonial content with Next.js Image optimization

**Component:** `src/components/ui/3d-book-testimonial.tsx`

## Project Structure

```
ui-testing/
├── src/
│   ├── app/                                    # Next.js App Router pages
│   │   ├── timeline/                           # Timeline prototype
│   │   ├── chat-input/                         # Chat input prototype
│   │   ├── 3d-carousel/                        # 3D carousel prototype
│   │   ├── project-gallery/                    # Project gallery prototype
│   │   ├── animated-chat-text/                 # Animated text prototype
│   │   ├── placeholders-and-vanish-input/      # Vanish input prototype
│   │   ├── flip-card/                          # 3D flip card prototype
│   │   ├── glass-button/                       # Glass button prototype
│   │   ├── 3d-book/                            # 3D book prototype
│   │   ├── layout.tsx                          # Root layout
│   │   ├── page.tsx                            # Home page
│   │   └── globals.css                         # Global styles + Tailwind
│   ├── components/
│   │   └── ui/                                 # shadcn/ui components
│   │       ├── timeline.tsx
│   │       ├── ai-input.tsx
│   │       ├── 3d-carousel.tsx
│   │       ├── gallery4.tsx
│   │       ├── animated-text.tsx
│   │       ├── placeholders-and-vanish-input.tsx
│   │       ├── flip-card.tsx
│   │       ├── liquid-glass-button.tsx
│   │       ├── 3d-book-testimonial.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...                             # Other shadcn components
│   └── lib/
│       └── utils.ts                            # Utility functions (cn, etc.)
├── prototypes/                                 # Prototype specifications
├── CLAUDE.md                                   # Project guidelines for Claude Code
├── components.json                             # shadcn/ui configuration
├── tailwind.config.ts                          # Tailwind configuration
├── tsconfig.json                               # TypeScript configuration
└── package.json
```

## Adding New Prototypes

1. Create a new route: `src/app/[prototype-name]/page.tsx`
2. Build your component in `src/components/ui/[component-name].tsx`
3. Use shadcn/ui components as building blocks
4. Leverage Framer Motion for animations
5. Follow the existing patterns for consistency

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components are installed to `src/components/ui/` and can be customized directly.

## Styling

This project uses a CSS variables-based theming system with Tailwind CSS:
- Theme colors defined in `src/app/globals.css`
- Dark mode support via class strategy
- HSL color space for smooth gradients
- Use the `cn()` utility from `@/lib/utils` for className merging

## Import Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/app` → `src/app`

## License

MIT
