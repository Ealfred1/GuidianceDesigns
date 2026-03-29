import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyData } from "../data/caseStudies";

// --- Premium Code-Based Mockup Components ---

const DesktopMockup: React.FC<{ type: string; color: string }> = ({ type, color }) => (
  <div className="w-full h-full bg-[#1A1B23] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col group/mockup">
    {/* Browser Bar */}
    <div className="h-6 bg-[#252631] flex items-center px-3 gap-1.5 border-b border-white/5">
      <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
      <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
    </div>
    {/* Content */}
    <div className="flex-1 p-4 flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:20px_20px]"></div>
      <div className="relative z-10 flex gap-4 h-full">
        {/* Sidebar */}
        <div className="w-12 h-full bg-white/5 rounded-lg flex flex-col gap-2 p-2">
           {[...Array(5)].map((_, i) => <div key={i} className="w-full aspect-square bg-white/5 rounded-md"></div>)}
        </div>
        {/* Main Area */}
        <div className="flex-1 flex flex-col gap-4">
           <div className="w-2/3 h-6 bg-white/10 rounded-md"></div>
           <div className="grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-video bg-white/5 rounded-lg border border-white/5 flex flex-col p-2 gap-2">
                   <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
                   <div className="flex-1 bg-white/5 rounded-md"></div>
                </div>
              ))}
           </div>
           <div className="flex-1 bg-white/[0.03] rounded-xl border border-white/5 p-4 flex flex-col gap-4">
              <div className="w-1/3 h-4 bg-white/10 rounded-full"></div>
              <div className="grid grid-cols-4 gap-2 h-20">
                 {[...Array(4)].map((_, i) => <div key={i} className="bg-white/5 rounded-md border border-white/5"></div>)}
              </div>
           </div>
        </div>
      </div>
      {/* Type Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50 opacity-0 group-hover/mockup:opacity-100 transition-opacity">
        {type}
      </div>
    </div>
  </div>
);

const MobileMockup: React.FC<{ type: string; color: string }> = ({ type, color }) => (
  <div className="w-full h-full bg-[#0A0A0E] border-[6px] border-[#1C1C1E] rounded-[40px] shadow-2xl overflow-hidden relative group/mobile">
    <div className="absolute top-0 inset-x-0 h-8 flex justify-center items-start pt-2 z-20">
       <div className="w-20 h-5 bg-[#1C1C1E] rounded-b-2xl"></div>
    </div>
    {/* Content */}
    <div className="h-full flex flex-col p-6 gap-6 relative">
       <div className="flex justify-between items-center mt-4">
          <div className="w-8 h-8 rounded-full bg-white/10"></div>
          <div className="w-24 h-4 bg-white/5 rounded-full"></div>
       </div>
       <div className="space-y-4">
          <div className="w-full h-32 bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
             <div className="w-1/2 h-4 bg-white/20 rounded-full mb-2"></div>
             <div className="w-1/3 h-2 bg-white/10 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="aspect-square bg-white/[0.03] rounded-2xl border border-white/5"></div>
             ))}
          </div>
       </div>
       <div className="mt-auto h-12 w-full bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
          <div className="w-1/3 h-1.5 bg-white/20 rounded-full"></div>
       </div>
       {/* Glow */}
       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#7c73ff]/10 to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const StackedMockup: React.FC<{ screens: any[]; accentColor: string; isMobile?: boolean }> = ({ screens, accentColor, isMobile }) => {
  return (
     <div className="w-full flex flex-row items-center justify-center gap-6 md:gap-16 py-16">
       {screens.map((screen, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ 
             opacity: 1, 
             y: 0,
             transition: { 
               delay: i * 0.1, 
               duration: 0.8,
               ease: [0.22, 1, 0.36, 1]
             }
           }}
           viewport={{ once: true }}
           className={`${isMobile ? 'w-64 h-[500px] md:w-72 md:h-[580px]' : 'w-[450px] h-[300px] md:w-[700px] md:h-[450px]'} relative group`}
         >
            {screen.image ? (
              <img src={screen.image} alt={screen.title} className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]" />
            ) : (
              isMobile ? <MobileMockup type={screen.imageType} color={accentColor} /> : <DesktopMockup type={screen.imageType} color={accentColor} />
            )}
         </motion.div>
       ))}
    </div>
  );
};

const BentoMobileGrid: React.FC<{ screens: any[] }> = ({ screens }) => {
  const mobileScreens = screens.filter(s => s.imageType !== 'Desktop Screen');
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 rounded-[40px] overflow-hidden bg-[#0A0A0B] w-full max-w-[1440px] mx-auto">
       {/* Block 1: Home & Onboarding (2 images) */}
       <div className="md:col-span-2 border-r border-b md:border-b-0 border-white/10 p-8 md:p-12 flex flex-col justify-between group overflow-hidden">
          <div className="mb-8">
             <h4 className="text-2xl font-bold text-white mb-2">Home & Onboarding</h4>
             <p className="text-sm text-white/40 max-w-sm leading-relaxed font-light">A seamless entry point designed for speed and clarity in emergency situations.</p>
          </div>
          <div className="flex gap-6 items-end flex-1 translate-y-4">
             <div className="flex-1 transform transition-all duration-700">
                <img src={mobileScreens[0].image} alt={mobileScreens[0].title} className="w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
             </div>
             <div className="flex-1 transform translate-y-16 transition-all duration-700 group-hover:translate-y-12">
                <img src={mobileScreens[1].image} alt={mobileScreens[1].title} className="w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
             </div>
          </div>
       </div>

       {/* Block 2: Service Selection */}
       <div className="p-8 md:p-12 border-r border-b md:border-b-0 border-white/10 flex flex-col justify-between">
          <div className="mb-6">
             <h4 className="text-xl font-bold text-white mb-2">Service Selection</h4>
             <p className="text-xs text-white/30 leading-relaxed font-light">{mobileScreens[2]?.description}</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
             <img src={mobileScreens[2]?.image} alt={mobileScreens[2]?.title} className="w-full max-h-[300px] object-contain drop-shadow-2xl" />
          </div>
       </div>

       {/* Block 3: Order Flow */}
       <div className="p-8 md:p-12 border-white/10 flex flex-col justify-between">
          <div className="mb-6">
             <h4 className="text-xl font-bold text-white mb-2">Order Tracking</h4>
             <p className="text-xs text-white/30 leading-relaxed font-light">{mobileScreens[3]?.description}</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
             <img src={mobileScreens[3]?.image} alt={mobileScreens[3]?.title} className="w-full max-h-[300px] object-contain drop-shadow-2xl" />
          </div>
       </div>
    </div>
  );
};

const DesktopBentoGrid: React.FC<{ screens: any[] }> = ({ screens }) => {
  return (
    <div className="space-y-12 md:space-y-24 w-full max-w-[1440px] mx-auto">
       {screens.map((screen, i) => (
         <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="relative w-full bg-[#0A0A0B] rounded-[40px] overflow-hidden border border-white/10 p-4 md:p-8 lg:p-12 shadow-2xl group"
         >
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
               <div>
                  <h4 className="text-3xl font-bold text-white mb-2 font-serif">{screen.title}</h4>
                  <p className="text-sm text-white/40 max-w-2xl font-light leading-relaxed">{screen.description}</p>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 whitespace-nowrap">Production Environment</span>
               </div>
            </div>
            <div className="relative rounded-[12px] md:rounded-[24px] overflow-hidden border border-white/5 bg-black/40">
               <img 
                  src={screen.image} 
                  alt={screen.title} 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.005]" 
               />
            </div>
         </motion.div>
       ))}
    </div>
  );
};

interface CaseStudyOverlayProps {
  project: CaseStudyData | null;
  isOpen: boolean;
  onClose: () => void;
  triggerPoint: { x: number; y: number } | null;
}

const CaseStudyOverlay: React.FC<CaseStudyOverlayProps> = ({ project, isOpen, onClose, triggerPoint }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.8 } }}
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          onScroll={(e) => e.stopPropagation()}
          className="fixed inset-0 z-[1000] bg-[#050507] selection:bg-white selection:text-black overflow-hidden"
        >
          {/* Circular Expansion Backdrop */}
          <motion.div
            initial={{ 
              scale: 0, 
              x: triggerPoint?.x || 0, 
              y: triggerPoint?.y || 0,
              translateX: "-50%",
              translateY: "-50%"
            }}
            animate={{ 
              scale: 25, 
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
            }}
            exit={{ 
              scale: 0,
              transition: { duration: 1, ease: [0.64, 0, 0.78, 0] }
            }}
            className="fixed w-[200px] h-[200px] rounded-full pointer-events-none z-0 border-[1px] border-white/20"
            style={{ 
              backgroundColor: "#050507", 
              boxShadow: '0 0 100px rgba(255,255,255,0.05)' 
            }}
          />

          <div 
            ref={scrollerRef}
            id="case-study-scroller"
            className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden pt-20 overscroll-contain scroll-smooth"
          >
             <div className="w-full min-h-full pb-40 font-sans">
                {/* Hero / Header Section */}
                <div className="relative w-full py-20 lg:py-32 px-6 md:px-20 lg:px-24">
                   <div className="max-w-[1440px] mx-auto">
                      <motion.button
                        onClick={onClose}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors mb-20"
                      >
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Back to Work</span>
                      </motion.button>

                      <div className="grid lg:grid-cols-[1.6fr_0.4fr] gap-20 items-end">
                         <div>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="flex items-center gap-3 mb-8"
                            >
                               <span className="w-8 h-px bg-primary"></span>
                               <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{project.tag}</span>
                            </motion.div>
                            <motion.h1 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="text-7xl md:text-9xl lg:text-[11rem] font-serif font-bold text-white mb-12 tracking-tighter leading-[0.85]"
                            >
                              {project.title}
                            </motion.h1>
                            <motion.p 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl font-light"
                            >
                              {project.description}
                            </motion.p>
                         </div>

                         <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.7 }}
                           className="flex flex-col gap-12 border-l border-white/5 pl-12 pb-10"
                         >
                            {[
                              { label: "Role", value: project.role },
                              { label: "Timeline", value: project.timeline },
                              { label: "Scope", value: project.scope }
                            ].map((item, i) => (
                              <div key={item.label}>
                                 <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold mb-3">{item.label}</div>
                                 <div className="text-white/70 font-medium text-sm">{item.value}</div>
                              </div>
                            ))}
                         </motion.div>
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20"
                      >
                         <a
                           href={project.ctaLink || "#"}
                           className="group relative inline-flex px-12 py-6 bg-button-gradient rounded-sm text-white font-semibold text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(92,83,196,0.3)] overflow-hidden transition-all duration-300 hover:scale-105"
                         >
                            <span className="relative z-10">{project.ctaText}</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </a>
                      </motion.div>
                   </div>
                </div>

                {/* Problem & Approach Section */}
                <div className="w-full py-24 lg:py-48 bg-[#0D0D10] border-y border-white/5 px-6 md:px-20 lg:px-24">
                   <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 lg:gap-40">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                      >
                         <div className="flex items-center gap-4">
                            <span className="h-px w-10 bg-primary"></span>
                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Problem</span>
                         </div>
                         <p className="text-2xl md:text-4xl font-light text-white leading-tight font-serif italic">
                           {project.problem}
                         </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                      >
                         <div className="flex items-center gap-4">
                            <span className="h-px w-10 bg-green-500"></span>
                            <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Approach</span>
                         </div>
                         <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                           {project.approach}
                         </p>
                      </motion.div>
                   </div>
                </div>

                {/* Key Screens / Visuals Section */}
                <div className="w-full py-24 lg:py-48 px-6 md:px-20 lg:px-24">
                   <div className="max-w-[1440px] mx-auto">
                      <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-8">
                         <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter">Key Product States</h2>
                            <p className="text-white/30 max-w-xl text-lg font-light">Documenting the interface architecture and high-fidelity interaction points.</p>
                         </div>
                         <div className="text-white/10 font-mono text-[10rem] leading-none hidden lg:block select-none">01</div>
                      </div>

                      {project.isMobile ? (
                        <div className="space-y-40">
                           {/* Main Visual Stack (Mobile Hero) */}
                           <div className="relative">
                              <StackedMockup 
                                screens={project.keyScreens.slice(0, 3)} 
                                accentColor={project.accentColor} 
                                isMobile={true}
                              />
                           </div>

                           {/* Detailed Bento Grid for Mobile Ecosystem */}
                           <div className="w-full">
                              <BentoMobileGrid screens={project.keyScreens} />
                           </div>

                           {/* Dedicated Fleet Section for ResQ-X (The Desktop Component of Mobile Ecosystem) */}
                           {project.id === 'resq-x-ecosystem' && (
                              <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full space-y-12"
                              >
                                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-l-2 border-primary pl-8">
                                    <div>
                                       <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Fleet Management</h3>
                                       <p className="text-lg text-white/40 max-w-2xl font-light leading-relaxed">A robust B2B dashboard designed for enterprise operators to monitor, manage, and optimize their entire logistics network in real-time.</p>
                                    </div>
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-primary/20 rounded-full bg-primary/5">Enterprise Solution</span>
                                 </div>
                                 <div className="relative w-full bg-[#0A0A0B] rounded-[40px] overflow-hidden border border-white/10 p-4 md:p-8 lg:p-12 shadow-2xl group/fleet">
                                    <img 
                                      src={project.keyScreens.find(s => s.imageType === 'Desktop Screen')?.image} 
                                      alt="Fleet Management Dashboard" 
                                      className="w-full h-auto rounded-[12px] md:rounded-[24px] transition-transform duration-1000 group-hover/fleet:scale-[1.002]"
                                    />
                                 </div>
                              </motion.div>
                           )}
                        </div>
                      ) : (
                        <div className="space-y-40">
                           {/* Desktop Grid for Projects with Desktop Screens (Gaderly) */}
                           {project.keyScreens.some(s => s.imageType === 'Desktop Screen') ? (
                              <DesktopBentoGrid screens={project.keyScreens.filter(s => s.imageType === 'Desktop Screen')} />
                           ) : (
                              /* Horizontal Stack for Multi-Mobile Projects (Social123) */
                              <div className="relative">
                                 <StackedMockup 
                                   screens={project.keyScreens} 
                                   accentColor={project.accentColor} 
                                   isMobile={false} 
                                 />
                              </div>
                           )}
                        </div>
                      )}
                   </div>
                </div>

                 {/* Design System Section */}
                 <div className="w-full py-24 lg:py-48 bg-[#050507] text-white px-6 md:px-20 lg:px-24 border-y border-white/5">
                    <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
                       <div className="space-y-16">
                          <div className="space-y-6">
                             <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/20">Infrastructure</span>
                             <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.85] text-white">Design System</h2>
                             <p className="text-xl text-white/40 font-light max-w-md">A scalable foundation built for consistency and efficient product expansion across the {project.title} ecosystem.</p>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-12">
                             {[
                               { label: "Typography", value: project.designSystem.typography },
                               { label: "Color", value: project.designSystem.color },
                               { label: "Components", value: project.designSystem.components },
                               { label: "Spacing", value: project.designSystem.spacing }
                             ].map((item) => (
                               <div key={item.label} className="space-y-3">
                                  <div className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-500" style={{ color: project.accentColor }}>{item.label}</div>
                                  <p className="text-sm leading-relaxed text-white/60 font-light">{item.value}</p>
                               </div>
                             ))}
                          </div>
                       </div>

                       <div className="relative aspect-square bg-[#0A0A0B] rounded-[60px] border border-white/5 flex items-center justify-center p-16 overflow-hidden shadow-3xl">
                          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
                          <div className="relative z-10 w-full grid grid-cols-2 gap-6">
                             <div className="aspect-square bg-white/[0.03] border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col justify-between group transition-colors" style={{ '--hover-color': project.accentColor } as any}>
                                <div className="text-[10px] font-bold text-white/10 tracking-widest uppercase">Typography</div>
                                <div className="text-6xl font-serif font-bold italic text-white/90">Aa</div>
                             </div>
                             <div className="aspect-square bg-black shadow-2xl border border-white/5 rounded-3xl p-8 flex flex-col justify-between group transition-colors">
                                <div className="text-[10px] font-bold text-white/10 tracking-widest uppercase">Color</div>
                                <div className="flex gap-2">
                                   <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.accentColor }}></div>
                                   <div className="w-4 h-4 rounded-full bg-white/20"></div>
                                </div>
                             </div>
                             <div className="aspect-square bg-white/[0.03] border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
                                <div className="text-[10px] font-bold text-white/20 tracking-widest uppercase">Accent</div>
                                <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                                   <div className="w-6 h-6 rounded-full" style={{ backgroundColor: project.accentColor }}></div>
                                </div>
                             </div>
                             <div className="aspect-square bg-white/[0.03] border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
                                <div className="text-[10px] font-bold text-white/10 tracking-widest uppercase">Grid</div>
                                <div className="grid grid-cols-4 gap-1.5 h-16">
                                   {[...Array(16)].map((_, i) => <div key={i} className="bg-white/5 rounded-[2px] transition-colors group-hover:bg-white/10"></div>)}
                                </div>
                             </div>
                          </div>
                          {/* Secondary Accent Glow */}
                          <div className="absolute -bottom-1/4 -right-1/4 w-full h-full rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: project.accentColor }}></div>
                          <div className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full opacity-5 blur-[120px] bg-white"></div>
                       </div>
                    </div>
                 </div>

                {/* Outcome Section */}
                <div className="w-full py-40 lg:py-72 px-6 md:px-20 lg:px-24 text-center bg-[#050507]">
                   <div className="max-w-[900px] mx-auto space-y-16">
                      <div className="inline-flex items-center gap-6">
                         <span className="h-px w-16 bg-white/10"></span>
                         <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">The Outcome</span>
                         <span className="h-px w-16 bg-white/10"></span>
                      </div>
                      <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
                         Architecting for Impact.
                      </h2>
                      <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light">
                         {project.outcome}
                      </p>
                      
                      <div className="pt-20">
                         <button 
                           onClick={onClose}
                           className="group flex flex-col items-center gap-8 mx-auto cursor-pointer"
                         >
                            <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:border-white shadow-2xl relative">
                               <div className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-20"></div>
                               <svg className="w-8 h-8 text-white group-hover:text-black transition-colors relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 group-hover:text-white group-hover:tracking-[0.6em] transition-all duration-700">Explore Portfolio</span>
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyOverlay;
