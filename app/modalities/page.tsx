import Image from "next/image";
import modalities from '@/app/components/modality/content'
import PatriceCommunity from "../components/Patrice-Community";
import Footer from "../components/Footer";


export default function ModalitiesPage() {
    return (
        <>
            <section className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                <div className="text-center">
                    <h1 className="text-[#3E2925] text-5xl lg:text-6xl xl:text-7xl font-bold">Modalities</h1>
                    <p className="mt-2 text-black text-xl lg:text-2xl xl:text-3xl">
                        While every session is unique, these are the core modalities that inform the work.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {modalities.map((item, index) => (
                        <article
                            key={item.title}
                            className={`mx-auto w-full max-w-100 ${index === modalities.length - 1 ? "lg:col-start-2" : ""
                                }`}
                        >                        <div className="relative mx-auto h-112.5 w-62.5 overflow-hidden rounded-2xl border border-(--dark-gold) md:h-125 md:w-75 lg:h-137.5 lg:w-87.5 xl:h-140 xl:w-90">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>

                            <div className="mt-6 lg:mt-3 text-center lg:text-left">
                                <h2 className="text-[#3E2925] text-xl lg:text-2xl xl:text-[26px] leading-tight font-semibold font-spectral">
                                    {item.title}
                                </h2>
                                <p className="mt-1 text-(--dark-orange) text-base lg:text-lg xl:text-xl">{item.author}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <PatriceCommunity />
            <Footer />
        </>
    );
}
