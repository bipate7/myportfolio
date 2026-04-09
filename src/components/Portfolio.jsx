import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Cpu,
  Globe,
  Layers,
  Zap,
  Layout,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Nav items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Portfolio.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-neutral-300 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen"
      >
        <div className="md:w-1/2 space-y-6 z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              FrontEnd Developer
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed">
            I craft seamless, responsive user interfaces that don't just look
            good, they feel intuitive and alive. Turning ideas into
            pixel-perfect reality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2"
            >
              Contact Me <Mail size={18} />
            </button>
            <button className="px-8 py-3 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition-colors flex items-center gap-2">
              My Resume <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Abstract Hero Image/Graphic */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Code size={120} className="text-neutral-700" />
              <div className="absolute -top-6 -right-6 bg-neutral-800 p-4 rounded-xl border border-neutral-700 shadow-lg animate-bounce delay-700">
                <Zap className="text-yellow-400" size={32} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-neutral-800 p-4 rounded-xl border border-neutral-700 shadow-lg animate-bounce">
                <Layout className="text-purple-400" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="w-full bg-purple-900/10 border-y border-purple-500/20 py-4 overflow-hidden mb-20">
        <div className="marquee-content flex gap-8 whitespace-nowrap text-purple-300 font-bold uppercase tracking-wider text-sm">
          {Array(20)
            .fill(
              "Performant • Accessible • Secure • Interactive • Scalable • Responsive • "
            )
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-neutral-400 leading-relaxed">
              I'm a passionate Frontend Developer who loves crafting seamless
              and responsive user experiences. I turn ideas into interactive and
              accessible interfaces.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I enjoy building clean, maintainable code and constantly exploring
              the latest in web technologies. Whether it's optimizing
              performance or designing pixel-perfect layouts, I'm all about
              delivering value through the web.
            </p>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-purple-400 font-medium hover:text-purple-300 flex items-center gap-2"
              >
                See my work <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">My Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Redux",
                "Node.js",
                "Framer Motion",
                "Git",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 text-sm hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
          <p className="text-neutral-400">How I bring your ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              phase: "Phase 1",
              title: "Planning & Strategy",
              desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
              icon: <Globe className="text-purple-400" size={32} />,
            },
            {
              phase: "Phase 2",
              title: "Development & Creation",
              desc: "Once we agree on the plan, I dive into coding. From initial sketches to polished code, I keep you updated every step of the way, ensuring the design matches your vision.",
              icon: <Code className="text-pink-400" size={32} />,
            },
            {
              phase: "Phase 3",
              title: "Testing & Launch",
              desc: "This is where the magic happens! I test the site for performance, accessibility, and responsiveness. Once approved, we launch your website to the world.",
              icon: <Cpu className="text-blue-400" size={32} />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-neutral-950 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 border border-neutral-800">
                {item.icon}
              </div>
              <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase block mb-2">
                {item.phase}
              </span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 max-w-7xl mx-auto bg-neutral-950"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Projects
            </h2>
            <p className="text-neutral-400">
              Real-world results and case studies.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors mt-4 md:mt-0">
            View all projects <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Phoenix - AI Chat App",
              tech: ["React", "Tailwind", "Appwrite", "AI"],
              desc: "Built a full-stack AI-powered chat app. Integrated chat history management and conversation actions. Smooth animations and modern UI.",
              gradient: "from-purple-900 to-indigo-900",
            },
            {
              title: "Travel Tales - Indian Travel Website",
              tech: ["React", "Tailwind CSS", "GSAP", "Stripe", "AI"],
              desc: "Comprehensive travel booking platform with 25+ pages, AI-powered chatbot, VR/AR tours, and real-time analytics. Achieved 95+ performance scores.",
              gradient: "from-teal-900 to-emerald-900",
            },
            {
              title: "Ochi Design Clone",
              tech: ["React", "Framer Motion", "GSAP"],
              desc: "Award-winning design clone focusing on visual engagement and interactivity. Seamless scroll experience and advanced animations.",
              gradient: "from-orange-900 to-red-900",
            },
            {
              title: "Docs Manager",
              tech: ["React", "Firebase", "Tailwind"],
              desc: "A minimal document management system. Add, edit, delete cards with drag-and-drop functionality.",
              gradient: "from-blue-900 to-cyan-900",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800"
            >
              {/* Thumbnail Placeholder */}
              <div
                className={`h-64 w-full bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500 relative flex items-center justify-center`}
              >
                <Layers
                  className="text-white/20 group-hover:scale-110 transition-transform duration-500"
                  size={64}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 bg-neutral-800 text-neutral-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-6 line-clamp-2">
                  {project.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-4 transition-all duration-300">
                  Visit Site <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's work together
        </h2>
        <p className="text-neutral-400 text-lg mb-12">
          I'm currently available for freelance work and full-time positions.{" "}
          <br />
          If you have a project that needs some creative touch, let's chat.
        </p>

        <form
          className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 text-left space-y-4 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
            ></textarea>
          </div>
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors">
            Send Message
          </button>
        </form>

        <div className="mt-16 flex justify-center space-x-8">
          <a
            href="#"
            className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:-translate-y-1"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:-translate-y-1"
          >
            <Instagram size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        <p>© 2025 Portfolio. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        .marquee-content {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default App;
