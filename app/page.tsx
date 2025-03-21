import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Veille from "@/components/veille";
import Intro from "@/components/intro";
import Projets from "@/components/projets";
import SectionDivider from "@/components/section-divider";
import Competences from "@/components/competences";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Projets />
        <Competences />
        <Experience />
        <Veille />
        <Contact />
      </div>
    </main>
  );
}
