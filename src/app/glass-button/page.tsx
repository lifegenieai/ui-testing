import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

export default function DemoOne() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Glass Button Components
        </h1>
        <p className="text-muted-foreground">
          Showcasing Culinary Advisor color palette - Terracotta & Cream
        </p>
      </div>

      {/* Liquid Glass Buttons */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center text-foreground">
          Liquid Glass Buttons
        </h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <LiquidButton variant="primary">
            Primary Terracotta
          </LiquidButton>
          <LiquidButton variant="default">
            Default
          </LiquidButton>
          <LiquidButton variant="secondary">
            Secondary
          </LiquidButton>
          <LiquidButton variant="destructive">
            Destructive
          </LiquidButton>
        </div>
      </div>

      {/* Metal Buttons */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center text-foreground">
          Metal Buttons
        </h2>
        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          Hover over any button to see the glass-to-gold transformation animation
        </p>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <MetalButton variant="primary">
            Primary Terracotta
          </MetalButton>
          <MetalButton variant="bronze">
            Bronze
          </MetalButton>
          <MetalButton variant="gold">
            Gold
          </MetalButton>
          <MetalButton variant="success">
            Success
          </MetalButton>
          <MetalButton variant="error">
            Error
          </MetalButton>
          <MetalButton variant="default">
            Default
          </MetalButton>
        </div>
      </div>

      {/* Color Reference */}
      <div className="space-y-4 text-center max-w-2xl">
        <h3 className="text-xl font-semibold text-foreground">Color Reference</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            <div className="font-semibold">Primary</div>
            <div className="text-xs opacity-80">Terracotta #8B7355</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
            <div className="font-semibold">Secondary</div>
            <div className="text-xs opacity-80">Soft Gray #E8E6E3</div>
          </div>
          <div className="p-4 rounded-lg bg-background text-foreground border border-border">
            <div className="font-semibold">Background</div>
            <div className="text-xs opacity-80">Warm Cream #F8F7F5</div>
          </div>
          <div className="p-4 rounded-lg bg-destructive text-destructive-foreground">
            <div className="font-semibold">Destructive</div>
            <div className="text-xs opacity-80">Red</div>
          </div>
        </div>
      </div>
    </div>
  )
}
