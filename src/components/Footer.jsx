const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 py-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Dandi Juana. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <a href="https://www.linkedin.com/in/dandijuana" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/dandijuann_?igsh=dDRqMTJwdDFlNTU5" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Instagram</a>
                    <a href="mailto:dandijuana11@gmail.com" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
