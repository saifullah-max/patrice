import React from "react";
import { motion } from "framer-motion";

export default function SelfAwareSection() {
    // Animation variants for staggered fade-in
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8, // delay between each line
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="w-full flex justify-center py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl w-full flex flex-col py-8 px-6 md:px-12">
                <motion.div
                    className="text-left flex flex-col gap-5 md:gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Line 1 */}
                    <motion.div
                        className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                        variants={itemVariants}
                    >
                        You are self-aware.
                    </motion.div>

                    {/* Line 2 */}
                    <motion.div
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[#DA5B00]"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                        variants={itemVariants}
                    >
                        You have done the work.
                    </motion.div>

                    {/* Line 3 */}
                    <motion.div
                        className="text-2xl md:text-3xl lg:text-4xl font-serif text-black leading-relaxed pl-4 border-l-4 border-[#dfb964] ml-8"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                        variants={itemVariants}
                    >
                        Therapy. Coaching. Retreats. Books. Practices.
                    </motion.div>

                    {/* Line 4 */}
                    <motion.div
                        className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-3xl"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                        variants={itemVariants}
                    >
                        Yet something still feels stuck. Stress returns. Old reactions repeat.
                        A quiet sense of "there must be more" lingers.
                    </motion.div>

                    {/* Line 5 */}
                    <motion.div
                        className="text-lg md:text-xl lg:text-2xl text-black font-medium leading-relaxed pt-4"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                        variants={itemVariants}
                    >
                        If this feels familiar, nothing is wrong with you.
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}