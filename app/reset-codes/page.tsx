import Footer from "../components/Footer";
import PatriceCommunity from "../components/Patrice-Community";
import ResetCodesHero from "../components/reset-codes/Hero";
import ResetMoreOfferings from "../components/reset-codes/More-Offerings";
import ResetBanner from "../components/reset-codes/Reset-Banner";
import ResetContent from "../components/reset-codes/Reset-Content";

export default function ResetCodes() {
    return (
        <main>
            <ResetCodesHero />
            <ResetContent/>
            <ResetBanner />
            <ResetMoreOfferings/>
            <PatriceCommunity />
            <Footer />
        </main>
    );
}
