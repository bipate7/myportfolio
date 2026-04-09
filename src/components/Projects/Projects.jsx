import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code as CodeIcon, ArrowRight } from 'lucide-react';
import travelTalesImage from '../assets/travel-tales-project.png';
import healthyMealImage from '../assets/healthymeal-cloud-kitchen.png';
import medicareImage from '../assets/medicare-project.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Mobile', 'Full Stack', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'Full Stack',
      links: {
        live: '#',
        code: '#',
      },
    },
    {
      id: 2,
      title: 'Travel Tales - Indian Travel Website',
      description: 'Comprehensive travel booking platform with 25+ pages, AI-powered chatbot, VR/AR tours, and real-time analytics dashboard.',
      tags: ['React', 'Tailwind CSS', 'GSAP', 'Stripe', 'AI'],
      image: travelTalesImage,
      category: 'Full Stack',
      links: {
        live: 'https://bipate7.github.io/TravelTales2025/',
        code: 'https://github.com/bipate7/TravelTales2025',
      },
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts, nutrition, and fitness progress with beautiful data visualizations.',
      tags: ['React Native', 'Firebase', 'Redux', 'Reanimated'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'Mobile',
      links: {
        live: '#',
        code: '#',
      },
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Framer Motion for smooth animations and transitions.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'Web',
      links: {
        live: '#',
        code: '#',
      },
    },
    {
      id: 5,
      title: 'Food Delivery App UI',
      description: 'A sleek and intuitive UI design for a food delivery mobile application.',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'UI/UX',
      links: {
        live: '#',
        code: '#',
      },
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging and group chat functionality.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
      category: 'Full Stack',
      links: {
        live: '#',
        code: '#',
      },
    },
    {
      id: 7,
      title: 'HealthyMeal Cloud Kitchen',
      description: 'Full-stack e-commerce platform for meal ordering and subscription management with comprehensive database design and secure authentication system.',
      tags: ['Next.js 16', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'JWT'],
      image: healthyMealImage,
      category: 'Full Stack',
      links: {
        live: 'https://healthy-meal-cloud-kitchen.vercel.app/',
        code: 'https://github.com/bipate7/healthy-meal-cloud-kitchen',
      },
    },
    {
      id: 8,
      title: 'MediCare',
      description: 'Advanced healthcare management platform integrating Telemedicine, Patient Management, and Analytics with real-time clinical operations and secure role-based access control.',
      tags: ['Node.js', 'Express', 'Next.js', 'Tailwind CSS', 'JWT'],
      image: medicareImage,
      category: 'Full Stack',
      links: {
        live: 'https://medicare-project-coral.vercel.app/',
        code: 'https://github.com/bipate7/medicare-project',
      },
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 group-hover:underline"
                  >
                    Live Demo <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always looking for interesting projects to work on. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
