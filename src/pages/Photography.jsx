import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import {
  Menu, X, Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, ArrowUp, Camera, Eye, MapPin, Award, Users, Heart, Download, Share2, Filter, Search, Grid, List, Calendar, Star, Zap
} from 'lucide-react';

function PhotographyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const allPhotos = [
    {
      id: 1,
      title: "Golden Hour Magic",
      category: "Landscapes",
      location: "Himalayan Foothills",
      date: "March 2024",
      description: "Captured the perfect golden hour lighting over the majestic Himalayan peaks",
      featured: true,
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8",
      settings: "f/8, 1/250s, ISO 100"
    },
    {
      id: 2,
      title: "Monsoon Dreams",
      category: "Landscapes",
      location: "Lonavala, Maharashtra",
      date: "July 2024",
      description: "Dramatic monsoon clouds creating an ethereal atmosphere",
      featured: false,
      camera: "Sony A7R IV",
      lens: "FE 24-70mm f/2.8",
      settings: "f/11, 1/125s, ISO 200"
    },
    {
      id: 3,
      title: "Urban Symphony",
      category: "Street",
      location: "Mumbai, Maharashtra",
      date: "February 2024",
      description: "The chaotic beauty of Mumbai streets during rush hour",
      featured: true,
      camera: "Fujifilm X-T4",
      lens: "XF 35mm f/1.4",
      settings: "f/1.4, 1/500s, ISO 800"
    },
    {
      id: 4,
      title: "Silent Stories",
      category: "Street",
      location: "Pune Old City",
      date: "January 2024",
      description: "Ancient architecture telling tales of bygone eras",
      featured: false,
      camera: "Canon EOS R5",
      lens: "RF 50mm f/1.2",
      settings: "f/2.8, 1/250s, ISO 400"
    },
    {
      id: 5,
      title: "Natural Canvas",
      category: "Nature",
      location: "Western Ghats",
      date: "April 2024",
      description: "Vibrant wildflowers painting the hills in colors",
      featured: true,
      camera: "Nikon Z9",
      lens: "Z 24-70mm f/2.8 S",
      settings: "f/5.6, 1/500s, ISO 100"
    },
    {
      id: 6,
      title: "Majestic Predator",
      category: "Nature",
      location: "Tadoba Andhari Tiger Reserve",
      date: "November 2023",
      description: "Royal Bengal tiger in its natural habitat",
      featured: false,
      camera: "Sony A7R IV",
      lens: "FE 200-600mm f/6.3 G OSS",
      settings: "f/6.3, 1/1000s, ISO 1600"
    },
    {
      id: 7,
      title: "Soulful Windows",
      category: "Architecture",
      location: "Jaipur, Rajasthan",
      date: "December 2023",
      description: "Intricate jharokha windows of Hawa Mahal",
      featured: true,
      camera: "Fujifilm X-T4",
      lens: "XF 16-55mm f/2.8 R LM WR",
      settings: "f/8, 1/250s, ISO 200"
    },
    {
      id: 8,
      title: "Modern Marvels",
      category: "Architecture",
      location: "Mumbai, Maharashtra",
      date: "October 2023",
      description: "Contemporary glass facades reflecting the sky",
      featured: false,
      camera: "Canon EOS R5",
      lens: "RF 16-35mm f/2.8L",
      settings: "f/11, 1/125s, ISO 100"
    },
    {
      id: 9,
      title: "Authentic Moments",
      category: "Portraits",
      location: "Pune, Maharashtra",
      date: "May 2024",
      description: "Candid portrait capturing genuine emotions",
      featured: true,
      camera: "Sony A7R IV",
      lens: "FE 85mm f/1.4 GM",
      settings: "f/1.4, 1/250s, ISO 200"
    },
    {
      id: 10,
      title: "Professional Excellence",
      category: "Portraits",
      location: "Mumbai, Maharashtra",
      date: "March 2024",
      description: "Corporate headshot with professional lighting",
      featured: false,
      camera: "Canon EOS R5",
      lens: "RF 70-200mm f/2.8L",
      settings: "f/4, 1/200s, ISO 100"
    },
    {
      id: 11,
      title: "Cultural Heritage",
      category: "Portraits",
      location: "Varanasi, Uttar Pradesh",
      date: "February 2024",
      description: "Traditional artist during Ganga Aarti ceremony",
      featured: true,
      camera: "Nikon Z9",
      lens: "Z 50mm f/1.2 S",
      settings: "f/2.8, 1/250s, ISO 400"
    },
    {
      id: 12,
      title: "Avian Beauty",
      category: "Nature",
      location: "Bharatpur, Rajasthan",
      date: "January 2024",
      description: "Colorful kingfisher displaying vibrant plumage",
      featured: false,
      camera: "Sony A7R IV",
      lens: "FE 200-600mm f/6.3 G OSS",
      settings: "f/6.3, 1/1000s, ISO 800"
    }
  ];

  const categories = ["All", "Landscapes", "Street", "Nature", "Architecture", "Portraits"];
  
  const filteredPhotos = allPhotos.filter(photo => {
    const matchesCategory = selectedCategory === "All" || photo.category === selectedCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ left: `${mousePosition.x * 0.05}px`, top: `${mousePosition.y * 0.05}px` }}></div>
        <div className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ left: `${mousePosition.x * -0.05}px`, top: `${mousePosition.y * -0.05}px` }}></div>
        
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
        
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-500/20 rotate-45"
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
          className="absolute top-40 right-32 w-24 h-24 border-2 border-orange-500/20"
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
          className="absolute bottom-32 left-40 w-40 h-40 border-2 border-red-500/20 rotate-12"
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
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-yellow-900/30 to-transparent"
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
          className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-orange-900/20 to-transparent"
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

      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Karan.dev
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a href="/" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Home</motion.a>
            <motion.a href="/projects" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Projects</motion.a>
            <motion.a href="/photography" className="text-white font-medium text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Photography</motion.a>
            <motion.a href="/" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact</motion.a>
          </div>

          <div className="md:hidden">
            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
              <motion.a href="/" className="text-neutral-300 hover:text-white py-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>Home</motion.a>
              <motion.a href="/projects" className="text-neutral-300 hover:text-white py-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Projects</motion.a>
              <motion.a href="/photography" className="text-white py-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Photography</motion.a>
              <motion.a href="/" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="text-neutral-300 hover:text-white py-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>Contact</motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center space-y-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Camera className="w-4 h-4" />
            Through My Lens - Professional Portfolio
          </motion.div>
          <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            Capturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Life's Moments</span>
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            Professional photography portfolio showcasing landscapes, street photography, architecture, portraits, and nature. Each image tells a unique story.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-500/50' : 'bg-neutral-900 border border-neutral-700 text-neutral-300 hover:bg-neutral-800'}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + index * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                {category}
              </motion.button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <motion.button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg ${viewMode === "grid" ? 'bg-yellow-600 text-white' : 'bg-neutral-900 text-neutral-400'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Grid size={20} />
            </motion.button>
            <motion.button onClick={() => setViewMode("list")} className={`p-2 rounded-lg ${viewMode === "list" ? 'bg-yellow-600 text-white' : 'bg-neutral-900 text-neutral-400'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <List size={20} />
            </motion.button>
          </div>
          <motion.div className="relative flex-1 max-w-md" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input type="text" placeholder="Search photos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 transition-colors" />
          </motion.div>
        </motion.div>
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <span className="text-neutral-400">Showing </span><span className="text-white font-bold">{filteredPhotos.length}</span><span className="text-neutral-400"> photographs</span>
        </motion.div>
      </section>

      <section className="pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-8"}>
          {filteredPhotos.map((photo, index) => (
            <motion.div key={photo.id} className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 transition-all duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.03, y: -5 }}>
              <div className="relative h-80 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.featured ? 'from-yellow-600 to-orange-600' : index % 2 === 0 ? 'from-purple-600 to-pink-600' : 'from-blue-600 to-cyan-600'}`}></div>
                <motion.div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{ opacity: 1 }}>
                  <motion.div className="bg-white/20 backdrop-blur-sm p-4 rounded-full" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Camera className="text-white" size={32} />
                  </motion.div>
                </motion.div>
                {photo.featured && <motion.div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + index * 0.1 }}>Featured</motion.div>}
                <motion.div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 + index * 0.1 }}>
                  <Calendar className="w-3 h-3 inline mr-1" />{photo.date}
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{photo.title}</h3>
                  <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">{photo.category}</span>
                </div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{photo.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"><MapPin className="w-3 h-3 inline mr-1" />{photo.location}</span>
                  <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700">{photo.camera}</span>
                  <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700">{photo.lens}</span>
                </div>
                <div className="flex space-x-3">
                  <motion.button className="text-sm font-medium text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group" whileHover={{ x: 2 }} whileTap={{ scale: 0.95 }}>
                    <Eye size={14} />View Details<ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 flex items-center gap-1 group" whileHover={{ x: 2 }} whileTap={{ scale: 0.95 }}>
                    <Heart size={14} />Favorite<Heart className="w-3 h-3 inline ml-1 text-red-500" />
                  </motion.button>
                  <motion.button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 flex items-center gap-1 group" whileHover={{ x: 2 }} whileTap={{ scale: 0.95 }}>
                    <Download size={14} />Download<ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.footer className="py-12 border-t border-neutral-800 text-center relative z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="flex flex-col md:flex-row justify-between items-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm">© 2025 <span className="text-white font-medium">Karan Bipate</span>. All rights reserved.</p>
              <p className="text-neutral-500 text-xs mt-1">Built with <span className="text-red-500">❤️</span> using React & Framer Motion</p>
            </div>
            <div className="flex space-x-6">
              {[
                { href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { href: "/photography", label: "Photography" }, { href: "/", label: "Contact" }
              ].map((link, index) => (
                <motion.a key={link.label} href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + index * 0.05 }} whileHover={{ y: -2 }}>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>

      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full shadow-lg shadow-yellow-500/50 z-50" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
        <ArrowUp size={20} />
      </motion.button>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default PhotographyPage;
