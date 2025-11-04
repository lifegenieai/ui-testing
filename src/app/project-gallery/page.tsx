import { Gallery4, Gallery4Props } from "@/components/ui/gallery4"

const demoData: Gallery4Props = {
  title: "UI Prototypes",
  description:
    "Explore our collection of interactive UI components and design patterns built with Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Each prototype demonstrates modern web development techniques and beautiful animations.",
  items: [
    {
      id: "timeline",
      title: "Interactive Timeline",
      description:
        "A vertical timeline component with scroll-triggered animations, image galleries, and smooth transitions. Perfect for showcasing chronological content with visual impact.",
      href: "/timeline",
      image: "/timeline.jpg",
    },
    {
      id: "chat-input",
      title: "AI Chat Input",
      description:
        "Advanced chat input with auto-resizing textarea, animated placeholders, file uploads, and search toggle. Features smooth animations and modern AI-inspired design.",
      href: "/chat-input",
      image: "/chat-input.jpg",
    },
    {
      id: "3d-carousel",
      title: "3D Photo Carousel",
      description:
        "An interactive carousel with three-dimensional perspective effects and smooth transitions. Showcases images with depth and engaging spatial transforms.",
      href: "/3d-carousel",
      image: "/3d-carousel.jpg",
    },
    {
      id: "project-gallery",
      title: "Project Gallery",
      description:
        "Modern grid-based gallery with horizontal carousel navigation. Ideal for showcasing portfolios, case studies, and project highlights with responsive design.",
      href: "/project-gallery",
      image: "/project-gallery.jpg",
    },
    {
      id: "animated-chat-text",
      title: "Animated Chat Text",
      description:
        "Progressive text animation with multiple granularities: character-by-character, word-by-word, and chunk-by-chunk. Perfect for streaming chat interfaces and dynamic content.",
      href: "/animated-chat-text",
      image: "/animated-chat-text.jpg",
    },
  ],
};

export default function ProjectGalleryPage() {
  return <Gallery4 {...demoData} />;
}
