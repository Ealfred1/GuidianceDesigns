import React from "react";
import { motion } from "framer-motion";

const COINS = [
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Adobe Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator/ffffff" },
  { name: "Miro", icon: "https://cdn.simpleicons.org/miro/ffffff" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/ffffff" },
  { name: "Linear", icon: "https://cdn.simpleicons.org/linear/ffffff" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/ffffff" },
  { name: "FigJam", icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff" },
];

const ToolCard = ({ name, icon }: { name: string, icon: string }) => (
  <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 mx-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <img src={icon} alt={name} className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-100 group-hover:scale-110 transition-transform duration-500 relative z-10" />
    <span className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest relative z-10 group-hover:text-white transition-colors duration-500">{name}</span>
  </div>
);

const TokenRing = () => {
  // Duplicate icons for seamless loop
  const duplicatedCoins = [...COINS, ...COINS, ...COINS];

  return (
    <section id="stack" className="relative py-32 bg-[#0e0e11] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center md:text-left">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            Core Capabilities
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
            The Modern <br /> <span className="text-primary italic">Design Stack</span>
          </h2>
          <p className="text-xl text-text-muted leading-relaxed max-w-lg mx-auto md:mx-0">
            Crafting premium digital experiences requires the right balance of research, 
            interaction design, and systematic thinking.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex relative items-center">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
            className="flex"
          >
            {duplicatedCoins.map((coin, i) => (
              <ToolCard key={`row1-${i}`} {...coin} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex relative items-center">
          <motion.div 
            animate={{ x: [-2000, 0] }}
            transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
            className="flex"
          >
            {duplicatedCoins.map((coin, i) => (
              <ToolCard key={`row2-${i}`} {...coin} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-4">
               <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                     <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l1.5 1.5M7 7l1 1" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Visual & Interaction</h4>
                  <ul className="text-text-muted space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Figma & Advanced Auto Layout</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> High-fidelity Prototyping</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Design System Architecture</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Motion Design & Micro-interactions</li>
                  </ul>
               </div>
               <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                     <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Process & Strategy</h4>
                  <ul className="text-text-muted space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> User Research & Synthesis</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Information Architecture</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Usability Testing & Analysis</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Product Strategy & Roadmapping</li>
                  </ul>
               </div>
            </div>
      </div>
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
    </section>
  );
};

export default TokenRing;
