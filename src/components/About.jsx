import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent dark:bg-sky-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Dedicated Continuous Improvement Professional
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I am a Management Graduate (S1) with a strong focus on Continuous Improvement and Operational Excellence.
                            My background equips me with the analytical skills necessary to identify process gaps,
                            implement Lean methodologies, and drive sustainable growth.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I pride myself on my ability to solve complex problems through data-driven approaches.
                            Whether it's streamlining workflows, reducing operational costs, or fostering a culture of 
                            Kaizen, I am committed to delivering measurable value to the organization.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 dark:bg-blue-500/10 rounded-lg flex items-center justify-center text-primary dark:text-blue-400 mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Process Optimization</h4>
                            <p className="text-gray-600 dark:text-gray-400">Applying Lean and Six Sigma principles to eliminate waste and maximize efficiency.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-accent/10 dark:bg-sky-500/10 rounded-lg flex items-center justify-center text-accent dark:text-sky-400 mb-4">
                                <Users size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kaizen Culture</h4>
                            <p className="text-gray-600 dark:text-gray-400">Inspiring teams to adopt a mindset of continuous development and collective growth.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
