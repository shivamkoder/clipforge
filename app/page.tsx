import { Navbar } from "@/components/clipforge/navbar";
import { Hero } from "@/components/clipforge/hero";
import { PowerOfWords } from "@/components/clipforge/power-of-words";
import { CelebrityTactics } from "@/components/clipforge/celebrity-tactics";
import { Footer } from "@/components/clipforge/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PowerOfWords />
      <CelebrityTactics />
      <Footer />
    </main>
  );
}
