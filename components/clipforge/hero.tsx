import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow" />
      </div>
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-8">
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          A clipping agency for the algorithmic age
        </div>

        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
          Get talked
          <br />
          <span className="text-primary">about.</span>
        </h1>

        <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
          Clipforge is a companion agency that engineers fame. We turn whispers
          into roars — using the same word-of-mouth tactics the world&apos;s
          biggest names used to get famous on social media.
        </p>

        <div className="animate-fade-up flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.03] active:scale-95"
          >
            Begin the climb
          </Link>
          <Link
            href="#power"
            className="px-6 py-3 rounded-full border border-border text-foreground hover:bg-card transition-colors flex items-center gap-2"
          >
            See how it works
            <ArrowDown size={16} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
