import Header from "@/components/Header";
import SideActions from "@/components/SideActions";
import Hero from "@/components/Hero";
import Greeting from "@/components/Greeting";
import Concept from "@/components/Concept";
import Treatment from "@/components/Treatment";
import Counseling from "@/components/Counseling";
import Clinic from "@/components/Clinic";
import Interview from "@/components/Interview";
import FooterAccess from "@/components/FooterAccess";
import Sitemap from "@/components/Sitemap";
import Copyright from "@/components/Copyright";
import RevealObserver from "@/components/RevealObserver";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <RevealObserver />
      <Header />
      <SideActions />
      <main>
        <Hero />
        <Greeting />
        <Concept />
        <Treatment />
        <Counseling />
        <Clinic />
        <Interview />
      </main>
      <footer>
        <FooterAccess />
        <Sitemap />
        <Copyright />
      </footer>
    </>
  );
}
