import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Inbox, Database, Calendar, Check, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactSection() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('DTC Retention Analysis');
  const [formMessage, setFormMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Prepopulate with a few realistic messages so the sandbox table looks filled with analytical entries
  useEffect(() => {
    const saved = localStorage.getItem('aarav_portfolio_messages');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      const defaultMsgs: ContactMessage[] = [
        {
          id: 'msg-1',
          name: 'Sarah Jenkins',
          email: 's.jenkins@acmeretail.com',
          subject: 'Lead Data Analyst Role - Acme Corp',
          message: 'Hi Aarav, saw your cohort churn analysis case study on your dashboard playground. We are looking for an associate with strong SQL windowing and retention analysis skills. Let\'s schedule a call next Tuesday!',
          timestamp: '2026-07-13 14:32'
        },
        {
          id: 'msg-2',
          name: 'Dr. Evelyn Carter',
          email: 'carter@techuniversity.edu',
          subject: 'Research Assistant Position',
          message: 'Excellent OLS model fit on the environmental GDP decoupling study. Your regression coefficient handling shows strong statistical maturity. Let\'s discuss a potential RA fellowship.',
          timestamp: '2026-07-14 09:15'
        }
      ];
      setMessages(defaultMsgs);
      localStorage.setItem('aarav_portfolio_messages', JSON.stringify(defaultMsgs));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setStatus('error');
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: formName,
      email: formEmail,
      subject: formSubject || 'General Inquiry',
      message: formMessage,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('aarav_portfolio_messages', JSON.stringify(updated));

    // Clear form inputs
    setFormName('');
    setFormEmail('');
    setFormSubject('DTC Retention Analysis');
    setFormMessage('');
    setStatus('success');

    // Reset status after a few seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleClearDatabase = () => {
    if (window.confirm('Reset local message log to initial state?')) {
      localStorage.removeItem('aarav_portfolio_messages');
      const defaultMsgs: ContactMessage[] = [
        {
          id: 'msg-1',
          name: 'Sarah Jenkins',
          email: 's.jenkins@acmeretail.com',
          subject: 'Lead Data Analyst Role - Acme Corp',
          message: 'Hi Aarav, saw your cohort churn analysis case study on your dashboard playground. We are looking for an associate with strong SQL windowing and retention analysis skills. Let\'s schedule a call next Tuesday!',
          timestamp: '2026-07-13 14:32'
        }
      ];
      setMessages(defaultMsgs);
      localStorage.setItem('aarav_portfolio_messages', JSON.stringify(defaultMsgs));
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Inbox className="h-3.5 w-3.5 text-indigo-600" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-slate-650 leading-relaxed font-sans">
            Have a dataset to optimize or looking for a competent junior analyst? Reach out below or audit my local portfolio logs database!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-none p-6 sm:p-8 space-y-6 shadow-none">
              <h3 className="text-base font-bold text-slate-900 font-sans uppercase tracking-wider border-b border-slate-200 pb-3">
                Contact Information
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Feel free to email me directly or leave a message through the dashboard console to the right. I usually respond within 1 business day.
              </p>

              {/* Direct links */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs text-slate-650">
                  <Mail className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5 font-sans uppercase tracking-wider text-[10px]">Primary Email:</span>
                    <a href="mailto:vvachhani28@gmail.com" className="text-indigo-650 hover:underline font-mono font-bold">vvachhani28@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-650">
                  <Phone className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5 font-sans uppercase tracking-wider text-[10px]">Phone Number:</span>
                    <span className="font-mono font-bold text-slate-800">(408) 555-0198</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-650">
                  <MapPin className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5 font-sans uppercase tracking-wider text-[10px]">Location Bounds:</span>
                    <span className="font-sans font-semibold text-slate-800">San Jose, California • Open to Relocation</span>
                  </div>
                </div>
              </div>

              {/* Credentials Table Mock */}
              <div className="pt-4 border-t border-slate-200 bg-slate-50/50 rounded-none p-4 text-[10px] text-slate-500 space-y-1.5 font-mono">
                <div className="text-slate-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Database className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Metadata schema:</span>
                </div>
                <div>Status: <span className="text-emerald-700 font-black">Active Recruiting Loop</span></div>
                <div>GitHub: <a href="https://github.com/vasuvachhani" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/vasuvachhani</a></div>
                <div>LinkedIn: <a href="https://linkedin.com/in/vasu-vachhani" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/vasu-vachhani</a></div>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-none p-6 sm:p-8 shadow-none">
            <h3 className="text-base font-bold text-slate-900 mb-6 font-sans uppercase tracking-wider border-b border-slate-200 pb-3">
              Launch Contact Pipeline
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="E.g., Sarah Jenkins"
                    className="w-full rounded-none border border-slate-350 px-3.5 py-2.5 text-xs text-slate-850 bg-white font-sans focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="E.g., s.jenkins@acme.com"
                    className="w-full rounded-none border border-slate-350 px-3.5 py-2.5 text-xs text-slate-850 bg-white font-mono focus:border-indigo-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Project Subject</label>
                <select
                  id="contact-subject"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full rounded-none border border-slate-355 px-3.5 py-2.5 text-xs text-slate-850 bg-white font-sans focus:border-indigo-600 focus:outline-none cursor-pointer"
                >
                  <option value="Lending Club Default Risk Assessment">Lending Club Default Risk Analysis (Case #1)</option>
                  <option value="Football Match Spatial & xG Analytics">Football Match & xG Analytics (Case #2)</option>
                  <option value="Telecom Customer Churn Modeling">Telecom Churn Diagnostic (Case #3)</option>
                  <option value="IMDb Ratings & Box Office EDA">IMDb Ratings & Box Office EDA (Case #4)</option>
                  <option value="YouTube Channels Global Performance EDA">YouTube Channels Performance EDA (Case #5)</option>
                  <option value="Ola Ride-Hailing SQL Analytics">Ola Ride-Hailing SQL Analytics (Case #6)</option>
                  <option value="Multi-Regional Sales KPI Dashboard">Sales KPI Excel Dashboard (Case #7)</option>
                  <option value="Nashville Housing Market SQL Cleaning">Nashville Housing SQL Cleaning (Case #8)</option>
                  <option value="Password Strength & Entropy Validator">Password Strength Regex Checker (Case #9)</option>
                  <option value="Diagnostic EDA Foundations Benchmark">Data Analysis Warm-Up EDA (Case #10)</option>
                  <option value="Zomato Customer RFM Segmentation">Zomato Customer RFM Analytics (Case #11)</option>
                  <option value="Full-Time Hiring Opportunity">Full-Time Hiring Opportunity</option>
                  <option value="Custom Data Consultation">Custom Data Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Message Details *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Type your message details here..."
                  className="w-full rounded-none border border-slate-355 px-3.5 py-2.5 text-xs text-slate-850 bg-white font-sans focus:border-indigo-600 focus:outline-none"
                />
              </div>

              {/* Action */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none bg-indigo-650 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-none cursor-pointer border border-indigo-750"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Post Message to Live DB</span>
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="rounded-none bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2 text-xs text-emerald-800 font-sans">
                  <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>Success! Your message was written into the local state table. Check the live database view below.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="rounded-none bg-rose-50 border border-rose-200 p-3 flex items-center gap-2 text-xs text-rose-800 font-sans">
                  <AlertCircle className="h-4 w-4 text-rose-600 flex-shrink-0" />
                  <span>Error! Please fill out all required fields marked with * before sending.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Dynamic Sandbox Database Logger Block */}
        <div className="mt-12 bg-white border border-slate-200 rounded-none p-6 sm:p-8 space-y-4 shadow-none">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-none bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Database className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
                  Simulated Visitor Messages Database
                </h4>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Connection: LOCAL_STORAGE_LOG_ENGINE • Status: ACTIVE (READ_WRITE)
                </p>
              </div>
            </div>

            <button
              id="clear-logs-btn"
              onClick={handleClearDatabase}
              className="self-start sm:self-center text-[10px] font-mono font-bold text-rose-600 hover:text-rose-800 hover:bg-rose-50 px-2.5 py-1.5 rounded-none border border-rose-200 transition-colors cursor-pointer uppercase tracking-wider"
            >
              Reset Messages DB
            </button>
          </div>

          {/* Database Grid Logs Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[650px] select-none p-0.5">
              <table className="w-full text-left font-mono text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 text-slate-400 pb-2 bg-slate-50 text-[10px] uppercase tracking-wider font-bold">
                    <th className="py-3 px-3 border border-slate-200">Timestamp</th>
                    <th className="py-3 px-3 border border-slate-200">Sender</th>
                    <th className="py-3 px-3 border border-slate-200">Subject Topic</th>
                    <th className="py-3 px-3 border border-slate-200">Inquiry Message String</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-650 bg-white">
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400 font-bold text-xs uppercase tracking-wider border border-slate-200">
                        No messages found in local database sandbox. Use the form to write the first record!
                      </td>
                    </tr>
                  ) : (
                    messages.map((msg) => (
                      <tr key={msg.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3 text-slate-400 border border-slate-200 flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span>{msg.timestamp}</span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-800 border border-slate-200">
                          <span className="font-bold">{msg.name}</span> <br/>
                          <span className="text-[10px] text-slate-400 font-normal">{msg.email}</span>
                        </td>
                        <td className="py-3 px-3 text-indigo-700 font-bold border border-slate-200">{msg.subject}</td>
                        <td className="py-3 px-3 max-w-[280px] truncate border border-slate-200 text-slate-700" title={msg.message}>
                          {msg.message}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
