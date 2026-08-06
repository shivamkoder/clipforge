import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Clipforge
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link
            href="#power"
            className="hover:text-foreground transition-colors"
          >
            The Power
          </Link>
          <Link
            href="#tactics"
            className="hover:text-foreground transition-colors"
          >
            The Tactics
          </Link>
          <Link
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
