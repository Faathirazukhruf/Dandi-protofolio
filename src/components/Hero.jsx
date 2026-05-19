import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import profileImg from '../assets/Dandipoto.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative">

            {/* Background Decor - Animated Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-sky-400/20 dark:bg-sky-500/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-accent/10 dark:bg-sky-500/10 text-accent dark:text-sky-400 font-medium text-sm mb-6 border border-accent/20 dark:border-sky-500/20"
                        >
                            Specialist General Affair
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-600 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300">
                                Dandi Juana
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            Management Graduate specialized in General Affairs. 
                            Dedicated to managing facility operations, vendor relations, asset lifecycle, and office administration to ensure maximum workplace efficiency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary dark:bg-blue-600 rounded-full hover:bg-primary/90 dark:hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/20"
                            >
                                Contact Me
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#experience"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                            >
                                View Experience
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            <div className="absolute inset-0 bg-accent dark:bg-sky-500 rounded-full opacity-20 dark:opacity-30 blur-2xl animate-pulse group-hover:opacity-40 transition-opacity" />
                            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center z-10">
                                <img
                                    src={profileImg}
                                    alt="Dandi Juana"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Card 1 */}
                            {/* <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -left-4 top-1/4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20"
                            >
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Education</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">S1 Management</p>
                                </div>
                            </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
