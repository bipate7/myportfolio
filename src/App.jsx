import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
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
  Zap,
  Layout,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Rocket,
  Sparkles,
  ArrowRight,
  ArrowUp,
  Download,
  Send,
  MapPin,
  Phone,
  Camera,
  Eye,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const roles = ["Full Stack Developer", "UI/UX Designer", "Freelancer", "Photographer", "Tech Enthusiast"];

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'process', 'projects', 'photography', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Page navigation handler with loading
  const navigateToPage = (path) => {
    setIsNavigating(true);
    setIsMenuOpen(false);
    setTimeout(() => {
      window.location.href = path;
    }, 300); // Small delay to show loading
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "projects", label: "Projects" },
    { id: "photography", label: "Photography" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Loading Overlay */}
      {isNavigating && (
        <motion.div 
          className="fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <motion.div 
              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="mt-4 text-purple-400 font-medium">Loading...</p>
          </div>
        </motion.div>
      )}
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient orbs - Purple theme */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * -0.05}px`,
            top: `${mousePosition.y * -0.05}px`,
          }}
        ></div>
        
        {/* Subtle floating elements - Purple theme */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-500/10 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border-2 border-indigo-500/10"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating light rays - Purple theme */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-32 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent"
          animate={{
            rotate: [0, 45, 90, 135, 180],
            opacity: [0.03, 0.06, 0.03, 0.04, 0.03],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-2 bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent"
          animate={{
            rotate: [180, 225, 270, 315, 0],
            opacity: [0.03, 0.05, 0.03, 0.04, 0.03],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Subtle aperture effect - Purple theme */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-purple-400/5 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:from-purple-300 hover:to-indigo-500 transition-all duration-300"
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            Karan.dev
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.id === "projects") {
                return (
                  <motion.a
                    key={item.id}
                    href="/projects"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('/projects');
                    }}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 relative cursor-pointer ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-neutral-400 hover:text-purple-400'
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              }
              if (item.id === "photography") {
                return (
                  <motion.a
                    key={item.id}
                    href="/photography"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('/photography');
                    }}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 relative cursor-pointer ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-neutral-400 hover:text-purple-400'
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              }
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-neutral-400 hover:text-purple-400'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600"
                      layoutId="activeTab"
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 py-4 px-6 flex flex-col space-y-4 shadow-xl"
            >
              {navItems.map((item, index) => {
              if (item.id === "projects") {
                return (
                  <motion.a
                    key={item.id}
                    href="/projects"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('/projects');
                    }}
                    className="text-left text-neutral-300 hover:text-white py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                );
              }
              if (item.id === "photography") {
                return (
                  <motion.a
                    key={item.id}
                    href="/photography"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('/photography');
                    }}
                    className="text-left text-neutral-300 hover:text-white py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                );
              }
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-neutral-300 hover:text-white py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              );
            })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen z-10"
        style={{ cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'8\' fill=\'%23a855f7\' opacity=\'0.8\'/%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'3\' fill=\'%23ffffff\'/%3E%3C/svg%3E") 16 16, auto' }}
      >
        <motion.div 
          className="md:w-1/2 space-y-6 z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            Available for work
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            >
              Karan Bipate
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 font-semibold h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate developer crafting digital experiences with modern technologies. 
            Specializing in React, Node.js, and creating seamless user interfaces that 
            combine functionality with beautiful design.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              Contact Me
            </motion.button>
            <motion.a 
              href="/projects"
              className="px-8 py-3 border-2 border-purple-600 text-white font-semibold rounded-full hover:bg-purple-900/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(139, 92, 246, 0.8)", backgroundColor: "rgba(139, 92, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={18} />
              View All Projects
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { number: "1+", label: "Years Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Hero Image/Graphic */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Animated background circles */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            {/* Main card */}
            <motion.div 
              className="relative w-85 h-80 md:w-96 md:h-96"
  initial={{ opacity: 0, x: 150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl overflow-hidden shadow-2xl">
    <img 
      src="/src/assets/profile.jpg" 
      alt="Karan Bipate"
      className="w-full h-full object-cover"
    />
  </div>
              
              {/* Floating icons */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="text-white" size={32} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Layout className="text-white" size={32} />
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-8 bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-lg shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Rocket className="text-white" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
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
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative z-10 cursor-about">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="text-neutral-400 leading-relaxed">
              Hi! I'm Karan Bipate, a passionate Full Stack Developer based in Nagpur, Maharshtra, India. 
              I love building web applications that solve real-world problems and provide 
              exceptional user experiences.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              With over 1+ years of experience in web development, I've worked with various 
              technologies and frameworks. I enjoy tackling complex challenges and turning 
              ideas into scalable, maintainable solutions.
            </p>
            
            {/* Personal Info Cards */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "bipate.karan@gmail.com" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Nagpur, Maharashtra India" },
                { icon: <Briefcase className="w-5 h-5" />, label: "Experience", value: "1+ Years" },
                { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "B.E. Electrical" },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 hover:bg-neutral-900/70 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    {info.icon}
                    <span className="text-xs font-medium">{info.label}</span>
                  </div>
                  <div className="text-white text-sm font-medium">{info.value}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="text-purple-400 font-medium hover:text-purple-300 flex items-center gap-2 group"
              >
                See my work 
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              My Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React.js", level: 95 },
                { name: "Node.js", level: 90 },
                { name: "JavaScript", level: 92 },
                { name: "TypeScript", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "Express.js", level: 88 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Redux", level: 75 },
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <span
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 text-sm hover:border-purple-500/50 hover:text-white transition-all cursor-default block"
                  >
                    {tech.name}
                  </span>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.level}% Proficient
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Cards */}
            <motion.div 
              className="space-y-4 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Award className="text-yellow-400" size={20} />
                Achievements
              </h4>
              <div className="space-y-3">
                {[
                  " Full Stack Web Development Certified",
                  " 10+ Personal Projects Completed",
                  " Active Technical Blog Writer",
                  " 1000+ Hours of Coding Practice",
                  " Active Open Source Contributor"
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg px-4 py-3 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5, borderColor: "rgba(168, 85, 247, 0.5)" }}
                  >
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </motion.div>
          </div>
      </section>

          {/* Process Section */}
          <section id="process" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Approach</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-neutral-400 mt-4">How I bring your ideas to life.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              phase: "Phase 1",
              title: "Discovery & Planning",
              desc: "Understanding your requirements, analyzing competitors, and creating a strategic roadmap for your project success.",
              icon: <Globe className="text-cyan-400" size={32} />,
              features: ["Requirements Gathering", "Market Research", "Technical Planning", "Timeline Creation"]
            },
            {
              phase: "Phase 2",
              title: "Design & Development",
              desc: "Creating beautiful, functional interfaces with clean code architecture and following industry best practices.",
              icon: <Code className="text-purple-400" size={32} />,
              features: ["UI/UX Design", "Frontend Development", "Backend APIs", "Database Design"]
            },
            {
              phase: "Phase 3",
              title: "Testing & Deployment",
              desc: "Rigorous testing, optimization, and deployment to ensure your application runs smoothly in production.",
              icon: <Rocket className="text-pink-400" size={32} />,
              features: ["Quality Assurance", "Performance Testing", "CI/CD Pipeline", "Monitoring"]
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-6 p-4 bg-neutral-950 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 border border-neutral-800"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase block mb-2">
                  {item.phase}
                </span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2">
                  {item.features.map((feature, featureIdx) => (
                    <motion.li
                      key={featureIdx}
                      className="flex items-center gap-2 text-xs text-neutral-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + idx * 0.2 + featureIdx * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10 cursor-projects">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-neutral-400"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Real-world results and innovative solutions.
            </motion.p>
          </div>
          <motion.a 
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage('/projects');
            }}
            className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-orange-400 hover:border-orange-400 transition-colors mt-4 md:mt-0 group cursor-pointer"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View all projects 
            <ArrowRight 
              size={16} 
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Travel Tales - Indian Travel Website",
              tech: ["React", "Tailwind CSS", "GSAP", "Stripe", "AI"],
              desc: "Comprehensive travel booking platform with 25+ pages, AI-powered chatbot, VR/AR tours, and real-time analytics dashboard. Achieved 95+ performance scores.",
              gradient: "from-teal-900 to-emerald-900",
              live: "https://bipate7.github.io/TravelTales2025/",
              code: "https://github.com/bipate7/TravelTales2025",
              features: ["AI Chatbot", "VR/AR Tours", "Payment System", "Real-time Analytics", "25+ Pages", "95+ Performance Score"],
              image: "/src/assets/travel-tales-project.png"
            },
            {
              title: "Aura Health Intelligence",
              tech: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
              desc: "Advanced health monitoring platform with AI-powered diagnostics, real-time health analytics, and personalized wellness recommendations.",
              gradient: "from-purple-900 to-pink-900",
              live: "https://aura-health-demo.netlify.app",
              code: "https://github.com/bipate7/aura-health-intelligence",
              features: ["AI Diagnostics", "Real-time Monitoring", "Health Analytics", "Personalized Recommendations", "Wellness Tracking"],
              image: "/src/assets/aura-health-intelligence.png"
            },
            {
              title: "HealthyMeal Cloud Kitchen",
              tech: ["Next.js 16", "PostgreSQL", "TypeScript", "Tailwind CSS", "JWT"],
              desc: "Full-stack e-commerce platform for meal ordering and subscription management with comprehensive database design and secure authentication system.",
              gradient: "from-green-900 to-emerald-900",
              live: "https://healthy-meal-cloud-kitchen.vercel.app/",
              code: "https://github.com/bipate7/healthy-meal-cloud-kitchen",
              features: ["E-commerce Platform", "Subscription Management", "Admin Dashboard", "Secure Authentication", "Database Optimization", "Performance Caching"],
              image: "/src/assets/healthymeal-cloud-kitchen.png"
            },
            {
              title: "MediCare",
              tech: ["Node.js", "Express", "Next.js", "Tailwind CSS", "JWT"],
              desc: "Advanced healthcare management platform integrating Telemedicine, Patient Management, and Analytics with real-time clinical operations and secure role-based access control.",
              gradient: "from-blue-900 to-cyan-900",
              live: "https://medicare-project-coral.vercel.app/",
              code: "https://github.com/bipate7/medicare-project",
              features: ["Telemedicine Platform", "Patient Management", "Appointment Scheduling", "Digital Prescriptions", "Role-Based Access Control", "Analytics Dashboard"],
              image: "/src/assets/medicare-project.png"
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project image or gradient background */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </>
                ) : (
                  <>
                    <motion.div 
                      className="absolute inset-0 bg-black/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        animate={{
                          y: [0, -20, 0],
                          x: [0, 10, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    Featured
                  </motion.div>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.15 + featureIdx * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 group"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket size={14} />
                    Live Demo
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-400 hover:text-gray-300 flex items-center gap-1 group"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} />
                    Source Code
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage('/projects');
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} />
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Photography Section */}
      <section
        id="photography"
        className="py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Through My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Lens</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-neutral-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Capturing moments, emotions, and stories through photography. From landscapes to portraits, each frame tells a unique tale.
          </motion.p>
        </motion.div>

        {/* Photography Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {["All", "Landscapes", "Portraits", "Street", "Nature", "Architecture"].map((category, index) => (
            <motion.button
              key={category}
              className="px-6 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 hover:border-transparent hover:text-white transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Photography Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Mountain Landscapes",
              category: "Landscapes",
              description: "Capturing the majestic beauty of mountains during golden hour and dramatic weather conditions",
              featured: true
            },
            {
              title: "Street Stories",
              category: "Street",
              description: "Candid moments and urban life captured in the bustling streets of Indian cities"
            },
            {
              title: "Nature's Beauty",
              category: "Nature",
              description: "Exploring the intricate details of flora and fauna in their natural habitats"
            },
            {
              title: "Portrait Sessions",
              category: "Portraits",
              description: "Professional portraits capturing personality and emotions in natural light"
            },
            {
              title: "Heritage Architecture",
              category: "Architecture",
              description: "Documenting the rich architectural heritage and modern marvels across India"
            },
            {
              title: "Wildlife Encounters",
              category: "Nature",
              description: "Close encounters with wildlife in national parks and sanctuaries"
            }
          ].map((photo, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => {
                // Open photo in modal or lightbox
                alert(`Opening details for: ${photo.title}\n\nThis would open a beautiful modal with larger image and full details.`);
              }}
            >
              {/* Image with actual photo */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photo.image || `/src/assets/photos/${photo.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                
                {/* Fallback gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${
                    photo.featured 
                      ? 'from-yellow-600 to-orange-600' 
                      : index % 2 === 0 
                        ? 'from-purple-600 to-pink-600' 
                        : 'from-blue-600 to-cyan-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: 'none' }}
                ></motion.div>
                
                {/* Camera Icon Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Camera className="text-white" size={32} />
                  </motion.div>
                </motion.div>

                {/* Featured Badge */}
                {photo.featured && (
                  <motion.div
                    className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {photo.title}
                  </h3>
                  <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">
                    {photo.category}
                  </span>
                </div>
                
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {photo.description}
                </p>
                
                <motion.div 
                  className="flex items-center gap-2 text-yellow-400 text-sm font-medium cursor-pointer group"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Open photo in modal or lightbox
                    alert(`Opening details for: ${photo.title}\n\nThis would open a beautiful modal with larger image and full details.`);
                  }}
                >
                  <Eye size={16} />
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photography Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: "1000+", label: "Photos Captured", icon: <Camera className="w-5 h-5" /> },
            { number: "15+", label: "Locations", icon: <MapPin className="w-5 h-5" /> },
            { number: "5+", label: "Exhibitions", icon: <Award className="w-5 h-5" /> },
            { number: "200+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900/70 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-3 text-yellow-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to collaborate on a photoshoot?</h3>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Whether it's portraits, events, or commercial projects, I'd love to capture your story through my lens.
          </p>
          <motion.button
            onClick={() => navigateToPage('/photography-contact')}
            className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Camera size={18} />
            Book a Photoshoot
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Work Together</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm currently available for freelance work and full-time positions.{" "}
            <br />
            If you have a project that needs a creative touch, let's chat!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-left">Get in Touch</h3>
            {[
              {
                icon: <Mail className="w-6 h-6 text-green-400" />,
                label: "Email",
                value: "bipate.karan@gmail.com",
                href: "mailto:bipate.karan@gmail.com",
                color: "hover:bg-green-900/20 hover:border-green-500/50"
              },
              {
                icon: <Phone className="w-6 h-6 text-blue-400" />,
                label: "Phone",
                value: "+91 88303 68618",
                href: "tel:+918830368618",
                color: "hover:bg-blue-900/20 hover:border-blue-500/50"
              },
              {
                icon: <MapPin className="w-6 h-6 text-purple-400" />,
                label: "Location",
                value: "Nagpur, Maharashtra, India",
                href: "#",
                color: "hover:bg-purple-900/20 hover:border-purple-500/50"
              }
            ].map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className={`block bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 transition-all duration-300 ${info.color}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-800 rounded-lg">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-neutral-400 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 text-left space-y-6 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! I will get back to you soon.');
              e.target.reset();
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label className="text-sm font-medium text-neutral-400">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Karan Bipate"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
                />
              </motion.div>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <label className="text-sm font-medium text-neutral-400">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="karan@example.com"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
                />
              </motion.div>
            </div>
            
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <label className="text-sm font-medium text-neutral-400">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
              />
            </motion.div>
            
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <label className="text-sm font-medium text-neutral-400">
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project..."
                className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors resize-none"
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "GitHub",
                icon: <Github size={24} />,
                href: "https://github.com/bipate7",
                color: "hover:bg-gray-800 hover:text-white"
              },
              {
                name: "LinkedIn",
                icon: <Linkedin size={24} />,
                href: "http://linkedin.com/in/karanbipate/",
                color: "hover:bg-blue-900/20 hover:text-blue-400"
              },
              {
                name: "Twitter",
                icon: <Twitter size={24} />,
                href: "#",
                color: "hover:bg-sky-900/20 hover:text-sky-400"
              },
              {
                name: "Instagram",
                icon: <Instagram size={24} />,
                href: "http://instagram.com/every_.moment_.matters_",
                color: "hover:bg-pink-900/20 hover:text-pink-400"
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-neutral-900 rounded-full text-neutral-400 transition-all duration-300 ${social.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-12 border-t border-neutral-800 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm">
                © 2025 <span className="text-white font-medium">Karan Bipate</span>. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Built with <span className="text-red-500">❤️</span> using React & Framer Motion
              </p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#photography", label: "Photography" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.slice(1));
                  }}
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center text-xs text-neutral-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>🚀 Let's build something amazing together!</p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg shadow-purple-500/50 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: false }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <style>{`
      .marquee-content {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
