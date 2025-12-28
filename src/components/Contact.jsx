import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const whatsappMessage = `Halo, saya ${name} (${email}). ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/6287869208985?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400">Ready to contribute to your organization? Let's discuss how I can help.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-primary/5 dark:bg-blue-500/10 rounded-lg text-primary dark:text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                    <a href="mailto:dandijuana11@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-sky-400 transition-colors">dandijuana11@gmail.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-primary/5 dark:bg-blue-500/10 rounded-lg text-primary dark:text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                    <p className="text-gray-600 dark:text-gray-300">+6287869208985</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-primary/5 dark:bg-blue-500/10 rounded-lg text-primary dark:text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                    <p className="text-gray-600 dark:text-gray-300">Majalengka, Jawa Barat, Indonesia</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 focus:border-accent dark:focus:border-sky-500 focus:ring-2 focus:ring-accent/20 dark:focus:ring-sky-500/20 outline-none transition-all bg-gray-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400" 
                                    placeholder="Your Name" 
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 focus:border-accent dark:focus:border-sky-500 focus:ring-2 focus:ring-accent/20 dark:focus:ring-sky-500/20 outline-none transition-all bg-gray-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400" 
                                    placeholder="your@email.com" 
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea 
                                    rows={4} 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 focus:border-accent dark:focus:border-sky-500 focus:ring-2 focus:ring-accent/20 dark:focus:ring-sky-500/20 outline-none transition-all bg-gray-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-gray-900 dark:text-white resize-none placeholder-gray-400" 
                                    placeholder="Write your message..." 
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary dark:bg-blue-600 text-white font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 dark:shadow-blue-600/20">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
