import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-border/40 px-6 py-24"
    >
      {/* CTA block */}
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8 mb-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <h2 className="relative text-4xl md:text-6xl font-serif leading-tight tracking-tight text-balance">
          Your name belongs
          <br />
          <span className="text-primary">in the conversation.</span>
        </h2>
        <p className="relative text-lg text-muted-foreground max-w-xl text-pretty">
          Let&apos;s engineer the moment people can&apos;t stop saying it.
          Clipforge is ready when you are.
        </p>
        <Link
          href="mailto:hello@clipforge.agency"
          className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.03] active:scale-95"
        >
          Start the conversation
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border/40">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl tracking-tight">Clipforge</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          Engineering fame through the power of words.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="#power" className="hover:text-foreground transition-colors">
            The Power
          </Link>
          <Link
            href="#tactics"
            className="hover:text-foreground transition-colors"
          >
            The Tactics
          </Link>
          <Link href="#about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
