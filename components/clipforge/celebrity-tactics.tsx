import { Sparkles, Flame, Eye, Users } from "lucide-react";

const tactics = [
  {
    icon: Sparkles,
    name: "The Mystery Drop",
    figure: "The Weeknd",
    tactic: "Erase everything. Go silent. Then return with a single, cryptic post.",
    result:
      "By wiping his entire Instagram clean before a release, he turned absence into anticipation. The silence was louder than any ad campaign.",
    takeaway: "Say less. Let people fill the void with speculation.",
  },
  {
    icon: Flame,
    name: "The Feud Spark",
    figure: "50 Cent",
    tactic: "Pick a public rival. Make every interaction a story.",
    result:
      "The Kanye feud wasn't a distraction — it was the engine. Every jab, every meme, every clap-back was free press that kept both names in every feed.",
    takeaway: "Conflict creates conversation. Conversation creates reach.",
  },
  {
    icon: Eye,
    name: "The Unignorable Stunt",
    figure: "MrBeast",
    tactic: "Do something so absurd people have to talk about it.",
    result:
      "Giving away a private island, counting to 100,000 — the spectacle was the strategy. Each video was engineered to be the only thing worth discussing that day.",
    takeaway: "If it's not worth repeating, it won't be repeated.",
  },
  {
    icon: Users,
    name: "The Community Cult",
    figure: "Taylor Swift",
    tactic: "Turn fans into insiders. Make them feel chosen.",
    result:
      "Easter eggs, secret sessions, decoded messages — she turned listening into a participatory game. Fans didn't just consume; they evangelized.",
    takeaway: "When people feel like insiders, they become your loudest amplifiers.",
  },
];

export function CelebrityTactics() {
  return (
    <section
      id="tactics"
      className="relative py-32 px-6 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-20">
          <span className="text-sm text-primary uppercase tracking-widest font-medium">
            The Playbook
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight tracking-tight text-balance">
            The famous didn&apos;t get lucky. They got talked about — on
            purpose.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Every celebrity you know used the same underlying weapon: the power
            of words spreading from person to person. Here&apos;s the proof.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {tactics.map((t, i) => (
            <div
              key={t.name}
              className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-8 md:p-10 rounded-2xl border border-border/40 bg-card hover:border-primary/30 transition-all duration-500"
            >
              {/* Number + icon */}
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <t.icon
                    size={24}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-2xl font-serif">{t.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    — {t.figure}
                  </span>
                </div>

                <p className="text-lg text-foreground/90 leading-relaxed text-pretty">
                  {t.tactic}
                </p>

                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {t.result}
                </p>

                <div className="mt-2 pt-4 border-t border-border/40">
                  <span className="text-sm text-primary font-medium">
                    {t.takeaway}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
