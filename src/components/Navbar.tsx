import { useState, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Projects', href: '#work' },
    { label: 'About', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Console', href: '#sandbox' },
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <a 
            id="nav-logo"
            href="#hero" 
            onClick={(e) => handleScroll(e, '#hero')}
            className="flex items-center gap-1 group"
          >
            <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-white font-script text-3xl font-normal shadow-sm group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="font-script text-3xl text-black font-normal tracking-tight ml-1 -mb-1">
              asu vachhani
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  id={`desktop-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-slate-600 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Status Pill */}
            <div className="status-pill">
              <span className="dot" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="status-pill text-[10px] py-1 px-2.5">
              <span className="dot" />
              <span>Available</span>
            </div>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-black hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="w-full text-center block btn-pill btn-pill-primary py-2.5 text-xs"
            >
              Contact Vasu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
