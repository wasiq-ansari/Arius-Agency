import Image from "next/image";
import Hero from "@/components/hero/page";
import Process from "@/components/sections/process/page";
import ProcessScroll from "@/components/sections/process-scroll/page";
// import PainPoints from "@/components/sections/pain-points/page";
import TechStack from "@/components/sections/tech-stack/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import HeroMask from "@/components/herotwo/page";
import HeroSplit from "@/components/heroOne/page";
import Marquee from "@/components/marquee/page";
import CTA from "@/components/cta/page";
import Team from "@/components/team/page";
import Projects from "@/components/projects/page";
import TripleMarquee from "@/components/tripleMarquee/page";
import Hero4 from "@/components/hero4/page";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <Navbar/>
      {/* <HeroMask /> */}
      <Hero />
      <Marquee />
      <Projects/>
      {/* <Hero4/> */}
      {/* <TripleMarquee/> */}
      <Process />
      {/* <ProcessScroll /> */}
      {/* <PainPoints /> */}
      <Team/>
      {/* <HeroSplit/> */}
      <TechStack />
      <CTA/>
      <Footer />
    </main>
  );
}
