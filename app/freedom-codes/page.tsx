import Footer from "../components/Footer";
import FreedomBanner from "../components/freedom-codes/Freedom-Banner";
import FreedomContent from "../components/freedom-codes/Freedom-Content";
import FreedomCodesHero from "../components/freedom-codes/Hero";
import MoreOfferings from "../components/freedom-codes/More-Offerings";
import PatriceCommunity from "../components/Patrice-Community";

export default function FreedomCodes() {
  return (
    <main>
        <FreedomCodesHero />
        <FreedomContent />
        <FreedomBanner/>
        <MoreOfferings/>
        <PatriceCommunity/>
        <Footer/>
    </main>
  );
}
