import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Layout, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-indigo-600">Your Name</span>
              <br />
              <span className="text-2xl md:text-3xl text-indigo-500">
                Frontend Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              I craft seamless, responsive user interfaces that don't just look good, they feel intuitive and alive. 
              Turning ideas into pixel-perfect reality.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Contact Me <Mail size={18} />
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
              >
                View Resume <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 md:mt-0 md:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-2xl border border-gray-200 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <Code size={120} className="text-indigo-100" />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl border border-gray-200 shadow-lg animate-bounce">
                  <Zap className="text-yellow-400" size={32} />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-gray-200 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Layout className="text-indigo-400" size={32} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-24 overflow-hidden">
          <div className="relative
            before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-indigo-50 before:to-transparent before:z-10
            after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-blue-50 after:to-transparent after:z-10
          ">
            <div className="flex items-center space-x-12 py-4 animate-marquee whitespace-nowrap">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'GraphQL', 'Redux', 'Framer Motion', 'MongoDB', 'Express'].map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
