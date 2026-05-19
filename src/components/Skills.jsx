import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
    "Asset & Facility Management",
    "Vendor & Procurement Management",
    "Office Administration & Support",
    "HSE & K3 Implementation",
    "Financial Management",
    "General Taxation",
    "Accurate Professional (CAP)",
    "Analisis SWOT",
    "Kaizen (Continuous Development)",
    "Root Cause Analysis (RCA)",
    "PDCA Cycle",
    "5S / 5R Implementation",
    "Waste Identification (DOWNTIME)",
    "Operational Excellence",
    "Project Management",
    "Data Analysis",
    "Problem Solving",
    "Microsoft Office Specialist",
    "SOP Development"
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Competencies</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive set of skills developed through academic study and practical experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={item}
                            whileHover={{ scale: 1.03, borderColor: 'var(--color-accent)' }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent dark:text-sky-400 group-hover:scale-110 transition-transform" size={20} />
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
