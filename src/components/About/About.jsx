import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, ChevronRight } from 'lucide-react';

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'] },
    { name: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 mx-auto mt-2"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Who am I?</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in computer science and years of hands-on experience, I create
              efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in web development started when I built my first website in college. Since then,
              I've worked with various technologies and frameworks, always staying up-to-date with the
              latest industry trends and best practices.
            </p>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 transition-colors"
              >
                View my projects <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-gray-800">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            Experience & Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  <Code size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Experience</h4>
              </div>
              
              <div className="space-y-6 border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-0"></div>
                
                <div className="pl-4">
                  <h5 className="font-bold text-gray-900">Senior Frontend Developer</h5>
                  <p className="text-indigo-600 text-sm">Tech Company Inc. • 2020 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading frontend development, implementing new features, and optimizing performance.
                  </p>
                </div>
                
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-24"></div>
                <div className="pl-4 pt-6">
                  <h5 className="font-bold text-gray-900">Frontend Developer</h5>
                  <p className="text-indigo-600 text-sm">Digital Agency • 2018 - 2020</p>
                  <p className="text-gray-600 mt-2">
                    Developed responsive websites and web applications for various clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  <Globe size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Education</h4>
              </div>
              
              <div className="space-y-6 border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-0"></div>
                
                <div className="pl-4">
                  <h5 className="font-bold text-gray-900">Master's in Computer Science</h5>
                  <p className="text-indigo-600 text-sm">University of Technology • 2016 - 2018</p>
                  <p className="text-gray-600 mt-2">
                    Specialized in Web Technologies and Human-Computer Interaction.
                  </p>
                </div>
                
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-24"></div>
                <div className="pl-4 pt-6">
                  <h5 className="font-bold text-gray-900">Bachelor's in Computer Science</h5>
                  <p className="text-indigo-600 text-sm">State University • 2012 - 2016</p>
                  <p className="text-gray-600 mt-2">
                    Focused on Software Engineering and Web Development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
