import { motion } from 'framer-motion';
import { BarChart3, Percent, PiggyBank, Receipt } from 'lucide-react';

const services = [
    {
        title: "Financial Reporting",
        description: "Preparing financial reports, transaction documentation, journal support, reconciliations, and management reports for accurate business decision-making.",
        icon: BarChart3,
        color: "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border-blue-200 dark:border-blue-800/30"
    },
    {
        title: "Accounting & Tax",
        description: "Managing accounting administration, tax documentation, VAT (PPN), Income Tax (PPh), and supporting regulatory compliance in accordance with Indonesian taxation standards.",
        icon: Percent,
        color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30"
    },
    {
        title: "Budgeting & Cost Control",
        description: "Planning, monitoring, and analyzing operational budgets to improve financial efficiency and control company expenses.",
        icon: PiggyBank,
        color: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
    },
    {
        title: "Accounts Payable",
        description: "Processing invoices, verifying payment requests, vendor reconciliation, scheduling payments, and maintaining complete financial documentation.",
        icon: Receipt,
        color: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400 border-sky-200 dark:border-sky-800/30"
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

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Services</h2>
                    <div className="w-20 h-1 bg-accent dark:bg-sky-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Delivering tailored financial management, accounting, and compliance services to drive efficiency and accurate decision-making.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-accent/30 dark:hover:border-sky-500/30 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${service.color}`}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
