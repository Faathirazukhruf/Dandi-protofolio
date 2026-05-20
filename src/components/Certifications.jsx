import { motion } from 'framer-motion';
import { Award, FileText, Cpu, CheckSquare, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "Certified General Affairs Management & Continuous Improvement",
        issuer: "Professional Certification Body",
        description: "Credentials demonstrating expertise in General Affairs operations, facility planning, asset management, and the integration of continuous improvement (Kaizen/Lean) methodologies in workplace administration.",
        icon: Award,
        color: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400 border-sky-200 dark:border-sky-800/30"
    },
    {
        title: "Sertifikasi Brevet Pajak A & B",
        issuer: "Taxation & Accounting Institute",
        description: "Official comprehensive tax training certificate covering Indonesian Personal Income Tax (PPh Pasal 21, 25, 29), Corporate Income Tax, Value Added Tax (PPN & PPnBM), and general tax procedures (KUP).",
        icon: FileText,
        color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/30",
        link: "https://drive.google.com/file/d/1Rx-nDdZZxDNVm3CRT4m_PAv5fz6lRTuA/view"
    },
    {
        title: "Certified Accurate Professional (CAP)",
        issuer: "PT. Ultima Tekno Solusindo",
        description: "Professional certification validating high-level proficiency in Accurate Accounting Software, financial statement preparation, data setup, and digital accounting operations.",
        icon: Cpu,
        color: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
        link: "https://bit.ly/SERTIFIKATACCURATEDANDI"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Licenses & Certifications</h2>
                    <div className="w-20 h-1 bg-accent dark:bg-sky-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Professional credentials and specialized certifications validating expertise in General Affairs, Taxation, and Accounting Software.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {certifications.map((cert, index) => {
                        const IconComponent = cert.icon;
                        const CardComponent = cert.link ? motion.a : motion.div;
                        const cardProps = cert.link ? {
                            href: cert.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};

                        return (
                            <CardComponent
                                key={index}
                                variants={item}
                                whileHover={{ y: -8 }}
                                {...cardProps}
                                className={`bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col justify-between ${cert.link ? 'cursor-pointer' : ''}`}
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${cert.color}`}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-accent dark:text-sky-400 mb-4">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/50 flex items-center justify-between text-xs font-semibold text-gray-400 dark:text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare size={14} className="text-green-500" />
                                        Verified Professional Credential
                                    </div>
                                    {cert.link && (
                                        <span className="text-accent dark:text-sky-400 hover:underline flex items-center gap-1 font-medium">
                                            View Certificate
                                            <ExternalLink size={12} />
                                        </span>
                                    )}
                                </div>
                            </CardComponent>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
