import React from "react";
import { motion } from "framer-motion";

const MobileApp: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 lg:py-40 z-30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] bg-white/10 p-[1px] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]"
        >
          <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0E] border border-white/5">
            {/* Top Shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
              <div className="relative z-10 px-8 py-12 md:px-14 lg:px-16">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7c73ff] shadow-[0_0_10px_#7c73ff]"></span>
                    Design Philosophy
                  </motion.span>
                </div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-white leading-[1.05] tracking-tight max-w-lg"
                >
                  I research the needs, <br/>
                  then design <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#7c73ff] pb-2">
                    the soul.
                  </span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl font-light"
                >
                  I am <span className="text-white font-semibold">Omowumi Oladosu</span>, a product designer crafting meaningful digital experiences.
                  This portfolio captures the research, the iterations, and the user-centric systems that bring products to life.
                </motion.p>

                <div className="mt-10 grid gap-4 text-sm text-white/50">
                  {[
                    { color: "#7c73ff", text: "Case studies documenting research, wireframing, and final designs." },
                    { color: "#22c55e", text: "User-centered design approach with a focus on seamless usability." },
                    { color: "white", text: "Modular design systems that ensure scale and consistency." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 group"
                    >
                      <span 
                        className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150" 
                        style={{ backgroundColor: item.color, boxShadow: item.color === 'white' ? 'none' : `0 0 10px ${item.color}80` }}
                      ></span>
                      <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    href="https://www.behance.net/omowumioladosu"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#12121e] to-[#050508] border border-white/10 px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:border-[#7c73ff]/50 hover:shadow-[#7c73ff]/10"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/behance/white" 
                      alt="Behance" 
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span>Explore Behance</span>
                  </motion.a>
                  
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    href="https://www.linkedin.com/in/omowumioladosu/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-8 py-4 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/linkedin" 
                      alt="LinkedIn" 
                      style={{ filter: "brightness(0) invert(1)" }}
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span>Connect on LinkedIn</span>
                  </motion.a>
                </div>
              </div>

              {/* Design Log Illustration */}
              <div className="relative z-10 flex items-center justify-center px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 lg:pr-16">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5, duration: 1 }}
                   className="relative w-full max-w-[420px]"
                >

                  {/* Abstract Glass Card Decoration */}
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] aspect-[4/5] flex flex-col p-8 group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,115,255,0.15),transparent_70%)]"></div>
                    
                    {/* Abstract Grid Lines */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    {/* Header Area */}
                    <div className="flex justify-between items-center mb-12 relative z-10">
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                        </div>
                        <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                    </div>

                    {/* Progress Visual */}
                    <div className="space-y-8 mb-12 relative z-10">
                        <div className="space-y-3">
                            <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
                                <span>Project Velocity</span>
                                <span className="text-[#7c73ff] font-bold">OPTIMIZED</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "85%" }}
                                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                                  className="h-full bg-gradient-to-r from-[#7c73ff] to-[#5c53c4] rounded-full shadow-[0_0_15px_#7c73ff80]"
                                ></motion.div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
                                <span>UX Quality</span>
                                <span className="text-white/80">9.8/10</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "95%" }}
                                  transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
                                  className="h-full bg-white/20 rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Node Flow */}
                    <div className="flex-1 relative border border-white/10 bg-white/5 rounded-3xl p-6 flex flex-col justify-center overflow-hidden transition-all duration-700 group-hover:bg-white/[0.08]">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-[60px] font-serif italic text-white leading-none">01</span>
                        </div>
                        <div className="space-y-5 relative z-10">
                            {[1, 2, 3].map((i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.4 + i * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center text-[10px] sm:text-xs font-bold ${i === 1 ? 'border-[#7c73ff] bg-[#7c73ff]/20 text-[#7c73ff]' : 'border-white/10 bg-white/5 text-white/20'}`}>
                                        {i === 1 ? '✓' : '•'}
                                    </div>
                                    <div className={`h-2 rounded-full bg-white/10 ${i === 1 ? 'w-32' : i === 2 ? 'w-48' : 'w-24'}`}></div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="absolute bottom-6 right-6 flex gap-1.5">
                            {[...Array(4)].map((_, i) => (
                                <motion.div 
                                    key={i} 
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    className="w-1.5 h-1.5 rounded-full bg-[#7c73ff]" 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Status Bottom */}
                    <div className="mt-8 flex justify-between items-end">
                        <div className="grid grid-cols-2 gap-8 flex-1">
                            <div className="space-y-1">
                                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Agility</div>
                                <div className="text-2xl font-bold text-white tracking-tight">2.4x</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Accuracy</div>
                                <div className="text-2xl font-bold text-white tracking-tight">99%</div>
                            </div>
                        </div>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 rounded-2xl bg-[#7c73ff] flex items-center justify-center text-white shadow-[0_15px_30px_rgba(124,115,255,0.4)] cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileApp;
