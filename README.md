# UI Testing Playground

A Next.js 16 prototyping environment for building and testing modern UI components with TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Next.js 16.0.1** - React framework with App Router and Turbopack
- **React 19** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library (New York style)
- **Framer Motion** - Declarative animations library
- **Supabase** - Backend-as-a-Service for database and storage
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

## Supabase Configuration

This project integrates with Supabase for backend data and storage. The 3D Carousel component fetches recipe data from a live Supabase database.

### Setup

1. **Supabase Credentials** are configured in `src/lib/supabase.ts`:
   ```typescript
   const supabaseUrl = 'https://expztarfiutsexcdsout.supabase.co'
   const supabaseAnonKey = '[your-anon-key]'
   ```

2. **Database Tables:**
   - `saved_recipes` - Stores recipe data with images
   - Required columns: `id`, `user_id`, `recipe_data` (jsonb), `category`, `image_url`, `created_at`, `updated_at`

3. **Storage Buckets:**
   - `recipe-images` - Public bucket for recipe images
   - Images are accessed via `getPublicUrl(bucket, path)` helper

4. **Row Level Security (RLS):**
   - Enable public read access for demo: `CREATE POLICY "Allow public read" ON saved_recipes FOR SELECT USING (true);`
   - Or keep RLS enabled and require authentication

### Helper Functions

Available in `src/lib/supabase.ts`:
- `getRecipesWithImages(limit: number)` - Fetch recipes from database
- `getRecipeImageUrls()` - List all images from storage
- `getPublicUrl(bucket: string, path: string)` - Generate public URL
- `listFiles(bucket: string, path?: string)` - List bucket contents

### Type Definitions

Recipe types are defined in `src/types/recipe.ts`:
- `Recipe` - Full recipe interface with ingredients, instructions, nutrition
- `SavedRecipe` - Database row interface
- `ImageCategory` - Recipe image categorization

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

### 3. 3D Carousel with Supabase Integration (`/3d-carousel`)

A three-dimensional recipe carousel with live Supabase data integration:
- **3D transforms** - Cylindrical layout with depth and rotation perspective
- **Supabase Database** - Fetches recipes from `saved_recipes` table with images
- **Click-to-expand** - Full recipe cards with ingredients, instructions, and metadata
- **Image optimization** - Loads recipe images from Supabase Storage (`recipe-images` bucket)
- **Loading states** - Skeleton loaders and empty states
- **Drag interactions** - Physics-based spring animations for natural feel
- **Responsive design** - Adapts cylinder width and face count for mobile/desktop

**Components:**
- `src/components/ui/3d-carousel.tsx` - Main carousel component
- `src/lib/supabase.ts` - Supabase client and helper functions
- `src/types/recipe.ts` - TypeScript recipe type definitions

**Supabase Integration:**
```typescript
// Fetches recipes with images from database
const recipes = await getRecipesWithImages(15)

// Helper functions available:
- getRecipesWithImages(limit) - Fetch recipes from saved_recipes table
- getRecipeImageUrls() - List all images from recipe-images bucket
- getPublicUrl(bucket, path) - Generate public URL for storage file
- listFiles(bucket, path) - List files in storage bucket
```

**Database Schema:**
```sql
saved_recipes table:
- id (uuid)
- user_id (uuid)
- recipe_data (jsonb) - Full recipe JSON
- category (text)
- image_url (text) - Public URL from Supabase Storage
- created_at (timestamp)
- updated_at (timestamp)
```

**RLS Configuration:**
The carousel requires read access to `saved_recipes`. Options:
1. Public read policy: `CREATE POLICY "Allow public read" ON saved_recipes FOR SELECT USING (true);`
2. Authenticated users only: RLS policies allow users to read their own recipes
3. Testing: `ALTER TABLE saved_recipes DISABLE ROW LEVEL SECURITY;`

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

### 8. Glass Button with Variant-Specific Hover Animations (`/glass-button`)

Advanced button components featuring liquid glass effects and metallic transformations with Framer Motion:

#### LiquidButton
- **Liquid glass effect** - SVG filter-based distortion for realistic glass appearance
- **Multiple variants** - Primary (terracotta), default, secondary, destructive
- **Interactive states** - Hover and press animations with scale transforms
- **Radix UI integration** - Flexible rendering with asChild prop support

#### MetalButton with Color-Specific Hover States
- **Glass-to-metal transformation** - Smooth 600ms animation from transparent glass to metallic finish
- **Variant-specific colors** - Each button hovers to its designated color:
  - **Primary** → Terracotta (#8B7355 to #A68968)
  - **Bronze** → Bronze (#864813 to #E9B486)
  - **Gold** → Gold (#917100 to #EAD98F)
  - **Success** → Green (#005A43 to #7CCB9B)
  - **Error** → Red (#8B0000 to #FF7F7F)
  - **Default** → Gray (#000 to #A0A0A0)
- **Framer Motion powered** - Uses `whileHover`, `whileTap`, and `initial` props
- **Multi-layer animation** - Three animated layers (wrapper, inner, button) for depth
- **Dynamic color extraction** - Parses Tailwind gradient utilities via regex
- **Hardware accelerated** - GPU transforms with `transform-gpu` and `will-change`

**Component:** `src/components/ui/liquid-glass-button.tsx`

**Design System:**
The buttons use the Culinary Advisor color palette defined in `src/app/globals.css`:
- Primary: Terracotta #8B7355
- Background: Warm Cream #F8F7F5
- Secondary: Soft Gray #E8E6E3
- Supports both light and dark modes

**Technical Implementation:**
```typescript
// Gradient color extraction from Tailwind classes
const getGradientColors = (variant: ColorVariant) => {
  // Regex parsing: /from-\[([^\]]+)\].*to-\[([^\]]+)\]/
  // Extracts hex colors from Tailwind utilities like:
  // "bg-gradient-to-b from-[#8B7355] to-[#A68968]"

  return {
    outerStart, outerEnd,    // Wrapper gradient
    innerStart, innerMiddle, innerEnd,  // Inner layer gradient
    buttonStart, buttonEnd,  // Button surface gradient
    textColor                // Text color for hover state
  }
}

// Framer Motion animation
<motion.button
  initial={{
    background: "linear-gradient(...glass...)",
    color: "#2C2C2C"
  }}
  whileHover={{
    background: `linear-gradient(...${gradients.buttonStart}, ${gradients.buttonEnd})`,
    color: gradients.textColor
  }}
  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
/>
```

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
│   │   ├── 3d-carousel/                        # 3D carousel with Supabase
│   │   ├── project-gallery/                    # Project gallery prototype
│   │   ├── animated-chat-text/                 # Animated text prototype
│   │   ├── placeholders-and-vanish-input/      # Vanish input prototype
│   │   ├── flip-card/                          # 3D flip card prototype
│   │   ├── glass-button/                       # Glass button prototype
│   │   ├── 3d-book/                            # 3D book prototype
│   │   ├── layout.tsx                          # Root layout
│   │   ├── page.tsx                            # Home page
│   │   └── globals.css                         # Culinary Advisor design system
│   ├── components/
│   │   └── ui/                                 # shadcn/ui components
│   │       ├── timeline.tsx
│   │       ├── ai-input.tsx
│   │       ├── 3d-carousel.tsx                 # With Supabase integration
│   │       ├── gallery4.tsx
│   │       ├── animated-text.tsx
│   │       ├── placeholders-and-vanish-input.tsx
│   │       ├── flip-card.tsx
│   │       ├── liquid-glass-button.tsx         # With Framer Motion animations
│   │       ├── 3d-book-testimonial.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...                             # Other shadcn components
│   ├── lib/
│   │   ├── utils.ts                            # Utility functions (cn, etc.)
│   │   └── supabase.ts                         # Supabase client & helpers
│   └── types/
│       └── recipe.ts                           # Recipe & SavedRecipe interfaces
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

## Styling & Design System

This project uses a CSS variables-based theming system with Tailwind CSS:

### Culinary Advisor Design System
The color palette is defined in `src/app/globals.css`:
- **Primary:** Terracotta #8B7355 (HSL: 25 25% 44%) - Warm, sophisticated accent
- **Background:** Warm Cream #F8F7F5 (HSL: 40 25% 97%) - Elegant, soft base
- **Secondary:** Soft Gray #E8E6E3 (HSL: 30 12% 90%) - Subtle backgrounds
- **Foreground:** Deep Charcoal #2C2C2C (HSL: 0 0% 17%) - Rich text color

### Features
- **Dark mode support** - Automatic dark variants with adjusted terracotta (#8B7355 → #B0937A)
- **HSL color space** - Smooth gradients and color transitions
- **CSS custom properties** - Theme-aware component styling
- **Semantic tokens** - `primary`, `secondary`, `accent`, `muted`, `destructive`, etc.
- **Border radius:** 0.75rem (12px) for refined, modern corners

### Utilities
- Use `cn()` from `@/lib/utils` for className merging
- Tailwind arbitrary values: `bg-[#8B7355]`, `text-[#F8F7F5]`
- CSS variable access: `hsl(var(--primary))`

## Import Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/app` → `src/app`

## License

MIT
