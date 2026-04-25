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
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-0 md:py-12">
      <div className="w-full max-w-7xl bg-white shadow-2xl overflow-hidden flex flex-col border-x border-slate-200">
        
        {/* Navigation */}
        <nav className="h-20 border-b border-slate-200 flex items-center justify-between px-6 md:px-12 bg-white sticky top-0 z-50">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-brand-navy text-white flex items-center justify-center font-black text-xl mr-3">X</div>
            <div className="font-black text-2xl tracking-tighter text-brand-navy shrink-0">ISO-XPERT</div>
          </div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <a href="#about" className="hover:text-brand-blue transition-colors">Solutions</a>
            <a href="#services" className="hover:text-brand-blue transition-colors">ISO Registry</a>
            <a href="#quickbooks" className="hover:text-brand-blue transition-colors">IT & QuickBooks</a>
            <a href="#contact" className="hover:text-brand-blue transition-colors">Karachi Office</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:block text-xs font-black text-brand-blue uppercase tracking-widest border-b-2 border-brand-blue pb-1">Get Quote</a>
            <button className="md:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-b border-slate-200 bg-white p-6 flex flex-col gap-4 text-xs font-bold uppercase tracking-widest sticky top-20 z-40"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Certifications</a>
            <a href="#quickbooks" onClick={() => setIsMenuOpen(false)}>Training</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}

        {/* Hero Section - Split Grid */}
        <main className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200">
          <section className="md:col-span-7 p-8 md:p-16 md:border-r border-slate-200 flex flex-col justify-center bg-white min-h-[500px]">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="stat-pill"
             >
               Established 1997 • Karachi, Sindh
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
               className="text-5xl md:text-8xl font-black leading-[0.9] text-brand-navy mb-8 -tracking-[3px]"
             >
               Precision <br />
               <span className="text-brand-blue">Consulting</span> <br />
               Systems.
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
               className="text-xl text-slate-500 leading-relaxed max-w-lg mb-10"
             >
               ISO-Xpert is Pakistan's leader in multi-disciplinary consulting, specializing in global standard models and strategic IT implementations.
             </motion.p>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="flex flex-wrap gap-4"
             >
               <button className="accent-btn">Our Methodology</button>
               <button className="secondary-btn">Karachi HQ</button>
             </motion.div>
          </section>

          <section className="md:col-span-5 bg-slate-50 relative min-h-[400px] flex flex-col">
             <div className="flex-1 p-12 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                   {SERVICES.map((s, i) => (
                     <motion.div 
                        key={s.title} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                        className="bg-white p-6 h-32 flex flex-col justify-center hover:bg-slate-50 transition-colors group"
                     >
                        <s.icon size={16} className="text-brand-blue mb-2 group-hover:scale-110 transition-transform" />
                        <div className="font-black text-xs text-brand-navy tracking-tight">{s.title.toUpperCase()}</div>
                     </motion.div>
                   ))}
                </div>
             </div>
             <div className="h-20 border-t border-slate-200 bg-white flex items-center px-12 justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Verified Firm</span>
                </div>
                <div className="text-[10px] font-black uppercase text-brand-navy">PK-75300</div>
             </div>
          </section>
        </main>

        {/* Detailed Consultancy Grid */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-200">
           <div className="md:col-span-1 p-12 md:border-r border-slate-200 bg-slate-50">
              <h2 className="text-3xl font-black text-brand-navy leading-none -tracking-wider mb-6">ISO REGISTRY</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-bold">Standard certifications across all manufacturing and service sectors.</p>
           </div>
           <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "ISO 9000", desc: "Quality Management Sytems" },
                { title: "ISO 14000", desc: "Environmental Excellence" },
                { title: "ISO 27000", desc: "Information Security" },
                { title: "ISO 22000", desc: "Food Safety Standards" },
                { title: "SA 8000", desc: "Social Responsibility" },
                { title: "HACCP", desc: "Hazard Analysis Controls" }
              ].map((item, i) => (
                <div key={i} className="p-10 border-b border-r border-slate-200 last:border-r-0 hover:bg-brand-blue hover:text-white transition-all group">
                   <div className="text-2xl font-black mb-1 leading-none group-hover:translate-y-[-2px] transition-transform">{item.title}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-100">{item.desc}</div>
                </div>
              ))}
           </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-white">
           <div className="md:col-span-3 p-12 md:border-r border-slate-200">
              <h2 className="text-3xl font-black text-brand-navy leading-none -tracking-wider mb-6 uppercase">Client <br />Impact</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Success Stories across Pakistan's Industry</p>
           </div>
           <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 border-t md:border-t-0 border-slate-200">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-10 border-r border-slate-200 last:border-r-0 group hover:bg-slate-50 transition-colors">
                   <div className="text-brand-blue mb-6 text-sm">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span key={star}>★</span>
                      ))}
                   </div>
                   <p className="text-sm font-bold text-slate-600 leading-relaxed mb-8 italic">"{t.quote}"</p>
                   <div className="border-l-2 border-brand-navy pl-4">
                      <div className="text-xs font-black text-brand-navy uppercase tracking-widest">{t.name}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{t.company}</div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* IT & QuickBooks Section */}
        <section id="quickbooks" className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-200 bg-brand-navy text-white">
           <div className="p-16 md:border-r border-white/10 flex flex-col justify-center">
              <div className="stat-pill bg-white/10 text-white mb-8">Authorized implementation</div>
              <h2 className="text-5xl font-black mb-8 leading-none -tracking-wider">QuickBooks <br />Consulting</h2>
              <p className="text-lg text-slate-400 max-w-sm mb-12">Expert deployment and training for QuickBooks Enterprise and Sage ACT! CRM systems.</p>
              <div className="space-y-4">
                 {["Financial Audit Integration", "Inventory Management", "Custom CRM Pipelines", "Karachi Training Sessions"].map(f => (
                   <div key={f} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                      <div className="w-2 h-2 bg-brand-blue" />
                      {f}
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-white/5 p-16 flex items-center justify-center relative overflow-hidden">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                 <div className="bg-white/10 p-8 text-center border border-white/20">
                    <Database className="mx-auto mb-4 text-brand-blue" />
                    <div className="text-[10px] font-black uppercase tracking-widest">Database</div>
                 </div>
                 <div className="bg-white/10 p-8 text-center border border-white/20">
                    <Calculator className="mx-auto mb-4 text-brand-blue" />
                    <div className="text-[10px] font-black uppercase tracking-widest">Ledger</div>
                 </div>
                 <div className="bg-white/10 p-8 text-center border border-white/20">
                    <ShieldCheck className="mx-auto mb-4 text-brand-blue" />
                    <div className="text-[10px] font-black uppercase tracking-widest">Security</div>
                 </div>
                 <div className="bg-white/10 p-8 text-center border border-white/20">
                    <Settings className="mx-auto mb-4 text-brand-blue" />
                    <div className="text-[10px] font-black uppercase tracking-widest">Ops</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200">
           <div className="md:col-span-5 p-16 md:border-r border-slate-200 bg-slate-50">
              <h2 className="text-4xl font-black text-brand-navy mb-8 -tracking-wider leading-none">INITIATE <br />INQUIRY.</h2>
              <div className="space-y-12">
                 <div className="border-l-4 border-brand-blue pl-6">
                    <div className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Primary Service Office</div>
                    <div className="font-black text-brand-navy text-lg leading-tight uppercase tracking-tighter">D-32, Block-7, Gulshan-e-Iqbal, Karachi</div>
                 </div>
                 <div className="border-l-4 border-slate-200 pl-6">
                    <div className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Direct Communications</div>
                    <div className="font-black text-brand-navy text-xl leading-none">+92-21-34973150</div>
                 </div>
              </div>
           </div>
           
           <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white">
              <form className="space-y-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Organization Name</label>
                       <input className="w-full border-b-2 border-slate-200 focus:border-brand-blue outline-none py-3 text-sm font-bold placeholder:text-slate-300" placeholder="ENTER COMPANY..." />
                    </div>
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Service Required</label>
                       <input className="w-full border-b-2 border-slate-200 focus:border-brand-blue outline-none py-3 text-sm font-bold placeholder:text-slate-300" placeholder="ISO / QUICKBOOKS..." />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Business Email</label>
                    <input className="w-full border-b-2 border-slate-200 focus:border-brand-blue outline-none py-3 text-sm font-bold placeholder:text-slate-300" placeholder="NAME@ORGANIZATION.PK" />
                 </div>
                 <button className="accent-btn w-full flex items-center justify-center gap-4">
                    Send Inquiry Record <ChevronRight size={16} />
                 </button>
              </form>
           </div>
        </section>

        {/* Footer */}
        <footer className="h-16 bg-brand-navy text-white px-12 flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold tracking-[2px] opacity-70">
            ISO-Xpert Management & IT Consultants © {new Date().getFullYear()}
          </div>
          <div className="hidden md:flex gap-8 text-[9px] uppercase font-black tracking-[2px] opacity-50">
            <span>SINDH</span>
            <span>-</span>
            <span>PAKISTAN</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
