import { motion } from 'motion/react';
import {
  ShieldCheck,
  Settings,
  Users,
  Truck,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Award,
  Globe,
  Database,
  Calculator,
  ChevronRight,
  Menu,
  X,
  History
} from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  {
    title: "ISO Standards",
    icon: ShieldCheck,
    description: "Expert guidance for ISO 9000 (Quality), 14000 (Env), 22000 (Food Safety), and 27000 (Info Security).",
    color: "blue"
  },
  {
    title: "Social Responsibility",
    icon: Users,
    description: "SA 8000, WRAP, BSCI, and GOTS certifications for ethical and sustainable operations.",
    color: "gold"
  },
  {
    title: "Supply Chain & Security",
    icon: Truck,
    description: "Specialized models including C-TPAT, BRC, and localized supply chain excellence frameworks.",
    color: "slate"
  },
  {
    title: "Product Certification",
    icon: Award,
    description: "CE-Marking, Eco-Labeling, and global compliance for product manufacturing and distribution.",
    color: "emerald"
  }
];

const SPECIALTIES = [
  "Quality Management Systems",
  "Environmental Management",
  "Health & Safety (OHSAS 18000)",
  "Food Safety (HACCP)",
  "Customer Relationship (CRM)",
  "Information Management",
  "QuickBooks Consulting",
  "Sage ACT! Implementation"
];

const TESTIMONIALS = [
  {
    quote: "ISO-Xpert's guidance was instrumental in our successful ISO 9001 certification. Their expertise is unmatched in the Karachi industrial landscape.",
    name: "Ahmed Raza",
    company: "Indus Textiles"
  },
  {
    quote: "The QuickBooks implementation by ISO-Xpert revolutionized our financial reporting. Their training sessions were practical and highly effective.",
    name: "Sara Khan",
    company: "Sindh Logistics"
  },
  {
    quote: "Their deep knowledge of SA 8000 helped us achieve compliance faster than expected. A truly professional consultancy firm.",
    name: "M. Usman",
    company: "Karachi Manufacturing"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center selection:bg-brand-blue selection:text-white">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-mesh opacity-40 pointer-events-none z-0" />

      <div className="w-full max-w-7xl bg-white shadow-[0_0_100px_-20px_rgba(0,0,0,0.1)] relative z-10 flex flex-col border-x border-slate-200">

        {/* Navigation */}
        <nav className="h-24 glass sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 border-b border-slate-200">
          <div className="flex items-center group cursor-pointer">
            <div className="w-12 h-12 bg-brand-navy rounded-xl text-white flex items-center justify-center font-black text-2xl mr-4 shadow-lg shadow-brand-navy/20 group-hover:scale-105 transition-transform duration-300">X</div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tight text-brand-navy leading-none">ISO-XPERT</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase mt-1">Management Consultants</span>
            </div>
          </div>

          <div className="hidden md:flex gap-10 text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
            {['Solutions', 'Registry', 'Systems', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-blue transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden lg:flex items-center gap-2 text-xs font-black text-brand-blue uppercase tracking-widest group">
              Get Quote
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="md:hidden text-brand-navy p-2 bg-slate-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-slate-200 p-8 flex flex-col gap-6 text-xs font-bold uppercase tracking-widest sticky top-24 z-40"
          >
            {['Solutions', 'Registry', 'Systems', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">{item}</a>
            ))}
          </motion.div>
        )}

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200">
          <section className="md:col-span-8 p-10 md:p-24 md:border-r border-slate-200 flex flex-col justify-center bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="stat-pill"
            >
              <History size={12} className="mr-2" />
              Established 1997 • Trusted globally
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-[7rem] font-black leading-[0.85] text-brand-navy mb-10 -tracking-[4px]"
            >
              Engineered <br />
              <span className="text-gradient">Integrity</span> <br />
              Systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed max-w-xl mb-12 font-medium"
            >
              ISO-Xpert is Pakistan's premier multi-disciplinary consultancy, bridging the gap between global standard compliance and strategic operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <button className="accent-btn shadow-2xl">Explore Services</button>
              <button className="secondary-btn">Our Portfolio</button>
            </motion.div>
          </section>

          <section className="md:col-span-4 bg-slate-50/50 p-12 flex flex-col justify-between border-t md:border-t-0 border-slate-200">
            <div className="space-y-4">
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <Globe size={14} /> Core Verticals
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-500 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <s.icon size={20} className="text-brand-navy group-hover:text-brand-blue transition-colors" />
                    </div>
                    <div className="font-extrabold text-sm text-brand-navy tracking-tight mb-2">{s.title}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{s.description.split(' ')[0]} Specialist</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Live in Karachi</span>
              </div>
              <div className="text-[11px] font-black text-brand-navy">PK REG: 75300</div>
            </div>
          </section>
        </main>

        {/* Trusted By Section */}
        <section className="py-12 border-b border-slate-200 bg-white overflow-hidden">
          <div className="container mx-auto px-12">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Strategic Partners & Clients</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {['Indus Textiles', 'Sindh Logistics', 'Karachi Mfg', 'Global Standards', 'Vanguard Tea'].map(c => (
                <span key={c} className="text-xl font-display font-black text-brand-navy tracking-tighter uppercase">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Registry & ISO Grid */}
        <section id="registry" className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-200">
          <div className="md:col-span-1 p-16 md:border-r border-slate-200 bg-slate-50 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-brand-navy leading-[0.9] -tracking-wider mb-8">COMPLIANCE <br />REGISTRY.</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-bold max-w-[200px]">We provide end-to-end certification support for global benchmarks.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "ISO 9001", desc: "Quality Management Systems", color: "blue" },
              { title: "ISO 14001", desc: "Environmental Excellence", color: "emerald" },
              { title: "ISO 27001", desc: "Information Security", color: "indigo" },
              { title: "ISO 22000", desc: "Food Safety Standards", color: "orange" },
              { title: "SA 8000", desc: "Social Accountability", color: "rose" },
              { title: "HACCP", desc: "Hazard Analysis Controls", color: "amber" }
            ].map((item, i) => (
              <div key={i} className="service-card-geo group">
                <div className="w-12 h-1 bg-slate-100 mb-8 group-hover:w-full group-hover:bg-brand-blue transition-all duration-700" />
                <div className="text-3xl font-black mb-2 text-brand-navy transition-transform duration-300 group-hover:-translate-y-1">{item.title}</div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400 group-hover:text-brand-blue mb-8">{item.desc}</div>
                <div className="mt-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-black text-brand-blue uppercase">Learn Protocol</span>
                  <ChevronRight size={12} className="text-brand-blue" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QuickBooks & Systems - Modern Dark Section */}
        <section id="systems" className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200">
          <div className="md:col-span-6 bg-brand-navy text-white p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-blue mb-10 border border-white/10">Authorized Integration Partner</div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] -tracking-[3px]">Systems <br />Digitization.</h2>
              <p className="text-xl text-slate-400 max-w-md mb-12 font-medium">Revolutionizing financial audits and inventory management with QuickBooks Enterprise and Sage ACT! deployments.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["Real-time Audits", "Supply Chain Control", "CRM Pipelines", "Executive Training"].map(f => (
                  <div key={f} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                    <div className="w-6 h-px bg-brand-blue" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-6 p-12 md:p-24 bg-slate-100/50 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/5">
              {[
                { icon: Database, name: "Storage", val: "Enterprise" },
                { icon: Calculator, name: "Ledger", val: "High-Perf" },
                { icon: ShieldCheck, name: "Secured", val: "Tier 1" },
                { icon: Users, name: "Users", val: "Unlimited" }
              ].map((box, i) => (
                <div key={i} className="bg-white p-10 flex flex-col items-center text-center hover:bg-slate-50 transition-colors">
                  <box.icon className="text-brand-blue mb-4" size={24} />
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{box.name}</div>
                  <div className="text-xs font-black text-brand-navy uppercase">{box.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white border-b border-slate-200 px-12 md:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy text-center mb-20 -tracking-[2px]">Trusted results for the <span className="text-brand-blue italic font-serif">Frontier Economy.</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex flex-col"
                >
                  <div className="text-brand-blue text-sm mb-6 flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <div className="text-xs font-black text-brand-navy uppercase tracking-widest mb-1">{t.name}</div>
                    <div className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">{t.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200">
          <div className="md:col-span-5 p-12 md:p-24 md:border-r border-slate-200 bg-slate-50/50">
            <h2 className="text-5xl md:text-6xl font-black text-brand-navy mb-12 -tracking-[2px] leading-[0.9]">PRECISION <br />INQUIRY.</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Karachi Headquarters</div>
                  <div className="font-extrabold text-brand-navy text-lg leading-tight uppercase">D-32, Block-7, Gulshan-e-Iqbal, Sindh</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Direct Intelligence Line</div>
                  <div className="font-extrabold text-brand-navy text-xl leading-none">+92-21-34973150</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 p-12 md:p-24 flex flex-col justify-center bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">Target Organization</label>
                  <input className="input-field" placeholder="COMPANY NAME..." />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">Service Scope</label>
                  <select className="input-field appearance-none cursor-pointer">
                    <option>ISO CERTIFICATION</option>
                    <option>QUICKBOOKS TRAINING</option>
                    <option>IT CONSULTANCY</option>
                    <option>SOCIAL AUDIT</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">Enterprise Email</label>
                <input className="input-field" placeholder="NAME@ORGANIZATION.PK" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">Situation Brief</label>
                <textarea className="input-field min-h-[100px] py-4" placeholder="HOW CAN WE ASSIST YOUR COMPLIANCE GOALS?"></textarea>
              </div>
              <button className="accent-btn w-full flex items-center justify-center gap-4 py-6 group">
                DISPATCH CONSULTANCY REQUEST
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-navy text-white">
          <div className="px-12 md:px-24 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-white text-brand-navy rounded-lg flex items-center justify-center font-black text-xl mr-4">X</div>
                <span className="font-black text-3xl tracking-tighter">ISO-XPERT</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-medium">
                Leader in multi-disciplinary management consulting since 1997. We empower Pakistan's industrial backbone with global compliance standards and robust IT solutions.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Navigation</h4>
              <div className="flex flex-col gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
                <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
                <a href="#registry" className="hover:text-white transition-colors">ISO Registry</a>
                <a href="#systems" className="hover:text-white transition-colors">Systems</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Contact</h4>
              <div className="flex flex-col gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
                <div className="flex items-center gap-3"><Mail size={14} className="text-brand-blue" /> info@iso-xpert.com</div>
                <div className="flex items-center gap-3"><Phone size={14} className="text-brand-blue" /> +92-21-34973150</div>
              </div>
            </div>
          </div>
          <div className="h-24 border-t border-white/5 px-12 md:px-24 flex items-center justify-between">
            <div className="text-[10px] uppercase font-bold tracking-[2px] opacity-40">
              © {new Date().getFullYear()} ISO-XPERT MANAGEMENT & IT CONSULTANTS
            </div>
            <div className="flex gap-8 text-[9px] uppercase font-black tracking-[2px] opacity-30">
              <span>DEVELOPED FOR EXCELLENCE</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
