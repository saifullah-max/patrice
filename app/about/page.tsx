import AboutBanner from "../components/about/About-Banner";
import AboutContent from "../components/about/About-content";
import AboutHero from "../components/about/Hero";
import Footer from "../components/Footer";
import PatriceCommunity from "../components/Patrice-Community";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <AboutBanner />
      <PatriceCommunity/>
      <Footer />
    </main>
  );
}
