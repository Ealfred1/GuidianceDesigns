import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="relative z-50">
      <header className="w-full h-[80px] flex items-center justify-center">
        {/* Inner Container: Updated padding to px-6 md:px-20 lg:px-24 */}
        <div className="w-full h-full max-w-[1440px] px-6 md:px-20 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-full">
            <a href="#home" className="text-xl font-medium tracking-tight text-[#9F99E5]">
              Omowumi Oladosu
            </a>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            {[
              { label: "Work", href: "#work" },
              { label: "Stack", href: "#stack" },
              { label: "Process", href: "#process" },
              { label: "Capabilities", href: "#capabilities" },
              { label: "About", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center h-full pt-1" 
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center h-full">
            <a
              href="mailto:oladosuomowumi4@gmail.com"
              className="group relative px-6 py-3 bg-button-gradient rounded-sm text-white font-medium text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(92,83,196,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(92,83,196,0.5)]"
            >
              <div className="absolute inset-0 border border-white/20 rounded-sm group-hover:border-white/40 transition-colors"></div>
              <span className="relative z-10">Start a Project</span>
              {/* Corner accents for the button style consistency */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/50 rounded-tl-sm opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/50 rounded-br-sm opacity-50"></div>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/50 rounded-tr-sm opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/50 rounded-bl-sm opacity-50"></div>
            </a>
          </div>
        </div>
      </header>
      {/* Custom Dashed Separator */}
      <div className="w-full max-w-[1440px] mx-auto border-dashed-custom-h opacity-100"></div>
    </div>
  );
};

export default Navbar;
