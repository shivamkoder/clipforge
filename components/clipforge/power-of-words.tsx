import { Volume2, TrendingUp, Globe as Globe2, Repeat } from "lucide-react";

const pillars = [
  {
    icon: Volume2,
    title: "The Whisper",
    description:
      "It starts with a single conversation. We seed the right words in the right rooms so people begin to talk — naturally, organically.",
  },
  {
    icon: TrendingUp,
    title: "The Ripple",
    description:
      "One mention becomes ten. Ten become a hundred. Momentum compounds when each new voice amplifies the last.",
  },
  {
    icon: Globe2,
    title: "The Roar",
    description:
      "When enough people talk about you, the algorithm takes notice. Then the press. Then the world. That's how fame is forged.",
  },
  {
    icon: Repeat,
    title: "The Loop",
    description:
      "Fame feeds fame. The more people talk, the more people want to talk. Clipforge keeps the loop spinning in your favor.",
  },
];

export function PowerOfWords() {
  return (
    <section
      id="power"
      className="relative py-32 px-6 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-20">
          <span className="text-sm text-primary uppercase tracking-widest font-medium">
            The Power of Words
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight tracking-tight text-balance">
            When everyone talks about you, more people talk about you.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Fame isn&apos;t luck — it&apos;s a feedback loop. A single
            conversation sparks another, then another, until the noise becomes
            impossible to ignore. Clipforge engineers that loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative bg-card p-10 hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <pillar.icon
                    size={22}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-2xl font-serif mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee of "talk" words */}
        <div className="mt-20 relative overflow-hidden py-8 border-y border-border/40">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-12 items-center">
                {[
                  "Did you hear about",
                  "Everyone&apos;s talking about",
                  "Have you seen",
                  "You need to check out",
                  "People won&apos;t stop talking about",
                  "The internet is obsessed with",
                  "Nobody can stop watching",
                  "All anyone talks about is",
                ].map((phrase, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="text-2xl md:text-3xl font-serif text-muted-foreground/40"
                  >
                    &ldquo;{phrase}&rdquo;
                    <span className="text-primary/60 mx-4">&middot;</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
