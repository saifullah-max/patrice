import AboutTherapist from "./components/home/AboutTherapist";
import Awareness from "./components/home/Awareness";
import Hero from "./components/home/Hero";
import NextStep from "./components/home/NextSteps";
import SelfAware from "./components/home/Self-aware";
import Services from "./components/home/Services";
import Testimonials from "./components/TestimonialsNoSSR";
import WhoIServe from "./components/home/WhoIServe";
import WhyThisWork from "./components/home/WhyThisWork";
import NewsLetter from "./components/NewsLetter";
import PatriceCommunity from "./components/Patrice-Community";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelfAware />
      <Awareness />
      <WhyThisWork />
      <Services />
      <WhoIServe />
      <AboutTherapist/>
      <NextStep />
      <Testimonials />
      <Banner />
      {/* <NewsLetter /> */}
      <PatriceCommunity />
      <Footer />
    </main>
  );
}
