import { motion } from 'framer-motion';
import { FadeInUp, ScaleIn } from '@/components/ScrollAnimations';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Live",
      rating: 4.9
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time synchronization and team features.",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      status: "In Development",
      rating: 4.7
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with interactive charts and real-time data visualization.",
      tech: ["Next.js", "D3.js", "Firebase"],
      status: "Live",
      rating: 4.8
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      status: "Live",
      rating: 4.6
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Next-generation social media platform with AI-powered content recommendations.",
      tech: ["Next.js", "Python", "Redis"],
      status: "Beta",
      rating: 4.5
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS with interactive courses, assessments, and progress tracking.",
      tech: ["Angular", "Express", "MongoDB"],
      status: "Live",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of innovative solutions and cutting-edge applications that have transformed businesses and delighted users worldwide.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.1}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-white font-bold text-lg">{project.id}</span>
                  </motion.div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">{project.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-blue-300 font-medium">{tech}</span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>{project.status}</span>
                  <div className="flex space-x-2">
                    <motion.button className="p-2 bg-white/10 rounded-lg hover:bg-white/20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Github size={16} className="text-gray-300" />
                    </motion.button>
                    <motion.button className="p-2 bg-white/10 rounded-lg hover:bg-white/20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <ExternalLink size={16} className="text-gray-300" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </section>
    </div>
  );
}
