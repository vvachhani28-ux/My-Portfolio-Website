import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check, Sparkles, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioProjects } from '../data/projects';

export default function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('General Data Analytics Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setStatus('error');
      return;
    }

    // Prepare mailto link as direct fallback so the user's email client actually sends it
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formSubject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\nSubject: ${formSubject}\n\nMessage:\n${formMessage}`
    );
    
    // Store in local storage for session logging
    const saved = localStorage.getItem('vasu_portfolio_messages');
    const existing = saved ? JSON.parse(saved) : [];
    const newMsg = {
      id: `msg-${Date.now()}`,
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };
    localStorage.setItem('vasu_portfolio_messages', JSON.stringify([newMsg, ...existing]));

    setStatus('success');
    window.location.href = `mailto:vvachhani28@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setStatus('idle');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      <div className="contact-card-v2">
        {/* Header */}
        <div className="mb-8">
          <span className="label">Contact</span>
          <h2 className="title-serif large text-slate-900 mt-2">
            Every <span className="italic text-slate-500">Row of Data</span> Tells a{' '}
            <span className="italic text-slate-400">Strategic Story</span>.
          </h2>
          <p className="text-lg sm:text-xl text-slate-650 mt-6 max-w-2xl leading-relaxed">
            Ready to take the next step? Connect with me directly and let's transform complex data into actionable executive strategy.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          
          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-black shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Email Me
              </span>
              <a
                href="mailto:vvachhani28@gmail.com"
                className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-650 transition-colors"
              >
                vvachhani28@gmail.com
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-black shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Direct Inquiries
              </span>
              <a
                href="tel:9979577104"
                className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-650 transition-colors"
              >
                +91 99795 77104
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-black shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Location
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 block">
                Gujarat, India (Open to Remote / Relocation)
              </span>
            </div>
          </div>

        </div>

        {/* Contact Footer User Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-slate-200/80 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-script text-2xl font-normal shadow-xs">
              V
            </div>
            <div>
              <a
                href="mailto:vvachhani28@gmail.com"
                className="text-base font-bold text-slate-900 hover:underline block"
              >
                vvachhani28@gmail.com
              </a>
              <span className="text-xs text-slate-500">
                Replies within 24 business hours
              </span>
            </div>
          </div>

          <div className="status-pill bg-white">
            <span className="dot" />
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Toggle Form / Send Message Button */}
        <div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full btn-pill btn-pill-primary py-4 text-base flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="h-5 w-5" />
            <span>{showForm ? 'Hide Message Form' : 'Send Your Message'}</span>
            {showForm ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </button>
        </div>

        {/* Expandable Form Box */}
        {showForm && (
          <div className="mt-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="title-serif text-2xl mb-6">
              Compose Direct Message
            </h3>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you! Your email client has been opened with your inquiry. Vasu will reply shortly.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                Please fill in your name, email, and message before sending.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rachel Adams"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="rachel@company.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  Project of Interest / Topic
                </label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                >
                  <option value="General Data Analytics Opportunity">General Data Analytics Opportunity</option>
                  <option value="Associate / Intern Role Fall 2026">Associate / Intern Role Fall 2026</option>
                  {portfolioProjects.map((p) => (
                    <option key={p.id} value={`Inquiry on ${p.title}`}>
                      Case #{p.id}: {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Share details about the role, team, or project requirements..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="btn-pill btn-pill-primary py-3.5 px-8 flex items-center gap-2 text-sm"
                >
                  <span>Transmit Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
