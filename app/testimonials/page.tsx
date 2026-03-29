import Footer from "../components/Footer";
import PatriceCommunity from "../components/Patrice-Community";
import ClientTestimonials from "../components/testimonials/Client-testimonials";
import TestimonialCTA from "../components/testimonials/CTA";
import TestimonialsHero from "../components/testimonials/Hero";
import TestimonialBanner from "../components/testimonials/Testimonial-Banner";

export default function ResetCodes() {
    return (
        <main>
            <TestimonialsHero />
            <ClientTestimonials />
            <TestimonialCTA />
            <TestimonialBanner />
            <PatriceCommunity />
            <Footer />
        </main>
    );
}
