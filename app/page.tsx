import Hero from "@/blocks/hero";
import Blog from "@/blocks/blog";
import TeamSection from "@/blocks/our-team";
import Disclaimer from "@/components/disclaimer";
import Office from "@/blocks/our-office";
import PracticeAreaSection from "@/blocks/practice-areas";
import WhoWeAre from "@/blocks/who-we-are";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">

      <Disclaimer />
      <WhoWeAre />
      <Hero />
      <PracticeAreaSection />
      <TeamSection />
      <Office />
      <Blog />

    </main>
  )
}
