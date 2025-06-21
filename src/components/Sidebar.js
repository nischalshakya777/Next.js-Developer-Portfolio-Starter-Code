import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Settings,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Briefcase, label: 'Projects', href: '/projects' },
    { icon: Mail, label: 'Contact', href: '/contact' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: isMobile ? -300 : -250 }
  };

  const itemVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: -20, opacity: 0 }
  };

  return (
    <>
      <motion.button
        className="fixed top-6 left-6 z-50 md:hidden bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-md shadow-2xl z-40"
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      >
        <div className="p-6">
          <motion.div className="mb-12 mt-4" variants={itemVariants}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-xl font-bold text-white">MyWebsite</h1>
            </div>
          </motion.div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = router.pathname === item.href;
                return (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link href={item.href}>
                      <motion.div
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg group ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight size={16} className={`ml-auto ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                      </motion.div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
