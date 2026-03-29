import Footer from "../components/Footer";
import HeartBanner from "../components/heart-codes/Heart-Banner";
import HeartContent from "../components/heart-codes/Heart-Content";
import HeartCodesHero from "../components/heart-codes/Hero";
import MoreOfferings from "../components/heart-codes/More-Offerings";
import PatriceCommunity from "../components/Patrice-Community";

export default function HeartCodes() {
    return (
        <main>
            <HeartCodesHero />
            <HeartContent />
            <HeartBanner />
            <MoreOfferings />
            <PatriceCommunity />
            <Footer />
        </main>
    );
}
