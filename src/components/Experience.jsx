import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        title: "Staff Continuous Improvement",
        company: "Dipa Pharmalab Intersains-Manufacturing grup",
        period: "2024 - Present",
        description: "Leading process optimization initiatives using Lean and Six Sigma methodologies. Responsible for identifying waste, conducting root cause analysis, and implementing sustainable improvements to increase production efficiency."
    },
    {
        title: "Bachelor of Management",
        company: "University Swadaya Gunung Jati",
        period: "2020 - 2024",
        description: "Specialized in Operational Management with a focus on supply chain efficiency and organizational behavior. Actively applied analytical frameworks to real-world business cases."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-accent dark:bg-sky-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l-2 border-gray-200 dark:border-slate-800 ml-4 md:ml-0 md:max-w-3xl md:mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-accent dark:border-sky-500 group-hover:scale-125 transition-transform" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                <div className="flex items-center text-accent dark:text-sky-400 text-sm font-medium mt-1 sm:mt-0">
                                    <Calendar size={14} className="mr-1" />
                                    {exp.period}
                                </div>
                            </div>

                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                                <Briefcase size={16} className="mr-2" />
                                {exp.company}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
