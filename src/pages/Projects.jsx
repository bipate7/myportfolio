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
  Zap,
  Layout,
  Star,
  Award,
  Briefcase,
  ArrowRight,
  ArrowUp,
  Download,
  Send,
  MapPin,
  Users,
  Rocket,
  Sparkles,
  Eye,
  Calendar,
  Filter,
  Search,
} from 'lucide-react';

function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      desc: "Full-featured online shopping platform with user authentication, payment processing, admin dashboard, and real-time inventory management.",
      gradient: "from-purple-900 to-indigo-900",
      live: "https://shop-karan-demo.netlify.app",
      code: "https://github.com/karanbipate/ecommerce-platform",
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "Real-time Cart"],
      image: "ecommerce",
      date: "March 2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management System",
      category: "Web Development",
      tech: ["React", "Firebase", "TypeScript", "Material-UI"],
      desc: "Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration, and advanced analytics.",
      gradient: "from-emerald-900 to-teal-900",
      live: "https://taskmanager-karan.netlify.app",
      code: "https://github.com/karanbipate/task-management",
      features: ["Real-time Sync", "Drag & Drop", "Team Chat", "Analytics Dashboard"],
      image: "taskmanager",
      date: "February 2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      category: "Web Development",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      desc: "Analytics dashboard for social media management with data visualization, scheduling, and multi-platform integration.",
      gradient: "from-orange-900 to-red-900",
      live: "https://social-dashboard-karan.netlify.app",
      code: "https://github.com/karanbipate/social-dashboard",
      features: ["Data Analytics", "Post Scheduling", "Multi-platform", "Real-time Updates"],
      image: "dashboard",
      date: "January 2024",
      status: "Completed"
    },
    {
      id: 4,
      title: "AI Chat Application",
      category: "Web Development",
      tech: ["React", "OpenAI API", "WebSocket", "Node.js"],
      desc: "Intelligent chat application with AI-powered responses, conversation history, file sharing, and multi-language support.",
      gradient: "from-blue-900 to-cyan-900",
      live: "https://aichat-karan.netlify.app",
      code: "https://github.com/karanbipate/ai-chat-app",
      features: ["AI Integration", "File Sharing", "Voice Messages", "Multi-language"],
      image: "aichat",
      date: "December 2023",
      status: "Completed"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      tech: ["React", "Framer Motion", "Tailwind", "Vite"],
      desc: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
      gradient: "from-pink-900 to-rose-900",
      live: "https://karanbipate.dev",
      code: "https://github.com/karanbipate/portfolio",
      features: ["Smooth Animations", "Dark Mode", "SEO Optimized", "Fast Loading"],
      image: "portfolio",
      date: "November 2023",
      status: "Completed"
    },
    {
      id: 6,
      title: "Weather App",
      category: "Mobile App",
      tech: ["React Native", "TypeScript", "Redux", "Weather API"],
      desc: "Cross-platform mobile weather application with real-time updates, location services, and beautiful UI.",
      gradient: "from-indigo-900 to-purple-900",
      live: "https://weather-karan.netlify.app",
      code: "https://github.com/karanbipate/weather-app",
      features: ["Real-time Weather", "Location Services", "Weather Maps", "Forecast Analytics"],
      image: "weather",
      date: "October 2023",
      status: "Completed"
    },
    {
      id: 7,
      title: "Blog Platform",
      category: "Web Development",
      tech: ["Next.js", "MDX", "Tailwind", "Vercel"],
      desc: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
      gradient: "from-green-900 to-emerald-900",
      live: "https://blog-karan.netlify.app",
      code: "https://github.com/karanbipate/blog-platform",
      features: ["Markdown Support", "SEO Optimized", "Content Management", "Fast Loading"],
      image: "blog",
      date: "September 2023",
      status: "Completed"
    },
    {
      id: 8,
      title: "Aura Health Intelligence",
      category: "AI & Machine Learning",
      tech: ["React 19", "TypeScript", "Google GenAI SDK", "Gemini 3 Pro", "Vite"],
      desc: "Privacy-first, local-first health dashboard using AI and biometric signals to generate predictive readiness scores with multimodal capabilities for food analysis.",
      gradient: "from-purple-900 to-pink-900",
      live: "https://aura-health-intelligence-pciarqiuc-bipate7s-projects.vercel.app/",
      code: "https://github.com/bipate7/aura-health-intelligence",
      features: ["AI-Powered Health Dashboard", "Biometric Signal Synthesis", "Neural Core Architecture", "Gemini Vision Integration", "Local-First Privacy", "Real-Time Food Analysis"],
      image: "/src/assets/aura-health-intelligence.png",
      date: "February 2026",
      status: "Completed"
    },
    {
      id: 9,
      title: "Real Estate Platform",
      category: "Web Development",
      tech: ["React", "Node.js", "PostgreSQL", "Mapbox"],
      desc: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      gradient: "from-yellow-900 to-orange-900",
      live: "https://realestate-karan.netlify.app",
      code: "https://github.com/karanbipate/real-estate",
      features: ["Advanced Search", "Virtual Tours", "Agent Dashboard", "Property Analytics"],
      image: "realestate",
      date: "August 2023",
      status: "Planning"
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "Design", "In Progress"];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * -0.05}px`,
            top: `${mousePosition.y * -0.05}px`,
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-500/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border-2 border-pink-500/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-40 h-40 border-2 border-cyan-500/20 rotate-12"
          animate={{
            rotate: [12, 372, 12],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Gradient waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/30 to-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-pink-900/20 to-transparent"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Sparkle effects */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Karan.dev
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="/"
              className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/projects"
              className="text-white font-medium text-sm tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="/photography"
              className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Photography
            </motion.a>
            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
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
              <motion.a
                href="/"
                className="text-neutral-300 hover:text-white py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Home
              </motion.a>
              <motion.a
                href="/projects"
                className="text-white py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="/photography"
                className="text-neutral-300 hover:text-white py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Photography
              </motion.a>
              <motion.a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-neutral-300 hover:text-white py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Contact
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            All Projects Showcase
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Project Gallery</span>
          </motion.h1>
          
          <motion.p 
            className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore my complete collection of web development projects, mobile applications, and design work. 
            Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-neutral-900 border border-neutral-700 text-neutral-300 hover:bg-neutral-800'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <motion.div 
            className="relative flex-1 max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>
        </motion.div>

        {/* Project Count */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-neutral-400">Showing </span>
          <span className="text-white font-bold">{filteredProjects.length}</span>
          <span className="text-neutral-400"> projects</span>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Project Header */}
              <div className={`h-48 relative overflow-hidden ${project.gradient}`}>
                <motion.div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code className="text-white/50" size={48} />
                </motion.div>
                
                {/* Status Badge */}
                <motion.div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500 text-black' 
                      : project.status === 'In Progress'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-blue-500 text-white'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {project.status}
                </motion.div>

                {/* Date Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Calendar className="w-3 h-3 inline mr-1" />
                  {project.date}
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIdx) => (
                    <motion.div
                      key={feature}
                      className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 + featureIdx * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 group"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={14} />
                    Live Demo
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-400 hover:text-neutral-300 flex items-center gap-1 group"
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
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/photography", label: "Photography" },
                { href: "/", label: "Contact" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
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
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg shadow-purple-500/50 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
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

export default ProjectsPage;
