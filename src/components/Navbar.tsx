import { useState, MouseEvent } from 'react';
import { Menu, X, BarChart2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Interactive Console', href: '#sandbox' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <a 
            id="nav-logo"
            href="#overview" 
            onClick={(e) => handleScroll(e, '#overview')}
            className="flex items-center gap-2 group"
          >
            <div className="h-9 w-9 rounded-none bg-indigo-600 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-slate-900">
              <BarChart2 className="h-5 w-5" />
            </div>
            <div>
              <span className="font-sans font-bold text-slate-900 tracking-tight text-sm block">VASU VACHHANI</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-650 block -mt-1 font-semibold">Data Analyst Portfolio</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                id={`desktop-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-indigo-600 transition-all font-sans"
              >
                {item.label}
              </a>
            ))}
            <a
              id="desktop-download-resume-btn"
              href="#resume"
              onClick={(e) => handleScroll(e, '#resume')}
              className="ml-4 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-none bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-slate-200">
                <a
                  id="mobile-download-resume-btn"
                  href="#resume"
                  onClick={(e) => handleScroll(e, '#resume')}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-none bg-slate-900 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume Viewer & Downloads</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
