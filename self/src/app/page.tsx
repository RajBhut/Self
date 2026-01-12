"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  X,
  Moon,
  Sun,
  ArrowRight,
  Circle,
} from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  demo: string;
  details: string;
  year: string;
  type?: "Product" | "Infra" | "Hackathon";
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      name: "OnComp",
      type: "Product",
      description: "Online code execution platform with multi-language support",
      technologies: ["React", "Node.js", "Docker", "MongoDB"],
      demo: "https://oncomp.rajb.tech",
      details:
        "A comprehensive platform allowing users to write, execute, and test code in multiple programming languages directly in the browser. Features real-time execution, syntax highlighting, and collaborative coding capabilities.",
      year: "2024",
    },
    {
      id: 2,
      name: "Hoster",
      type: "Infra",
      description: "Self-hosting platform for deploying web applications",
      technologies: ["Node.js", "Docker", "Nginx", "Linux", "MongoDB"],
      demo: "https://hoster.rajb.tech",
      details:
        "A self-hosting and deployment platform built to deploy applications using Docker. Includes container lifecycle management, Nginx reverse proxy configuration, environment handling, and production-style deployment workflows.",
      year: "2024",
    },
    {
      id: 3,
      name: "Paster",
      type: "Product",
      description: "Code snippet sharing platform for developers",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis"],
      demo: "https://paster.rajb.codes",
      details:
        "Developer-focused pastebin alternative with syntax highlighting, private/public sharing options, and snippet expiration settings. Optimized for fast retrieval with Redis caching.",
      year: "2024",
    },
    {
      id: 4,
      name: "FoodRikshaw",
      type: "Product",
      description: "Food truck management and ordering system",
      technologies: ["React", "Express", "MongoDB", "Socket.IO"],
      demo: "https://food.rajb.codes",
      details:
        "Real-time order management system with daily menu updates, live order tracking, and Firebase push notifications for customers.",
      year: "2024",
    },
    {
      id: 5,
      name: "BlinkNotes",
      type: "Product",
      description: "Educational platform for study materials",
      technologies: ["React", "Spring Boot", "MongoDB", "Cloudinary"],
      demo: "https://blinknotes-tj5f.vercel.app",
      details:
        "Streamlined platform for students to access study materials organized by subject and chapter, with robust search and cloud-based storage.",
      year: "2023",
    },
    {
      id: 6,
      name: "Vidhyakosh",
      type: "Hackathon",
      description: "Educational content sharing platform",
      technologies: ["React", "Express", "MongoDB", "Cloudinary"],
      demo: "https://github.com/RajBhut/tictechtoe24",
      details:
        "Hackathon finalist platform featuring blogging system, book marketplace, and comprehensive content management for educators.",
      year: "2023",
    },
    {
      id: 7,
      name: "Brainiac Blast",
      type: "Product",
      description: "AI-powered quiz platform",
      technologies: ["React", "Node.js", "PostgreSQL", "OpenAI API"],
      demo: "https://frontend-braniac.vercel.app",
      details:
        "Interactive quiz platform with real-time leaderboards, customizable quizzes, and AI-generated questions with adaptive difficulty.",
      year: "2024",
    },
  ];

  const skills = {
    Frontend: ["React", "Next.js"],
    Backend: ["Node.js", "Express", "Spring Boot", "Python"],
    Database: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
    DevOps: ["Docker", "Vercel", "Heroku", "Git"],
  };

  const downloadResume = () => {
    window.open(
      "https://res.cloudinary.com/demo214/image/upload/RajBhut2026_sgbguz.pdf",
      "_blank"
    );
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#0f0f0f]" : "bg-[#fafafa]"
      } transition-colors duration-500`}
    >
      {/* Sidebar Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`fixed left-0 top-0 h-full w-20 ${
          darkMode ? "bg-black/40" : "bg-white/40"
        } backdrop-blur-xl border-r ${
          darkMode ? "border-white/5" : "border-black/5"
        } z-50 hidden lg:flex flex-col items-center py-8`}
      >
        <div className="mb-12">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`w-10 h-10 rounded-full ${
              darkMode ? "bg-white" : "bg-black"
            } flex items-center justify-center text-sm font-bold ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            RB
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col space-y-8">
          {["About", "Work", "Skills", "Contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <Circle
                className={`w-2 h-2 ${
                  darkMode ? "text-white/30" : "text-black/30"
                } group-hover:${
                  darkMode ? "text-white" : "text-black"
                } transition-colors`}
              />
              <span
                className={`absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium ${
                  darkMode ? "text-white/60" : "text-black/60"
                } opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                {item}
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-10 h-10 rounded-full ${
            darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
          } flex items-center justify-center hover:scale-110 transition-transform`}
        >
          {darkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Header */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 ${
          darkMode ? "bg-black/40" : "bg-white/40"
        } backdrop-blur-xl border-b ${
          darkMode ? "border-white/5" : "border-black/5"
        } z-50 px-6 py-4 flex justify-between items-center`}
      >
        <div
          className={`text-sm font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Raj Bhut
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-9 h-9 rounded-full ${
            darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
          } flex items-center justify-center`}
        >
          {darkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="lg:ml-20">
        <section
          className="min-h-screen flex items-center justify-center px-6 lg:px-20"
          id="about"
        >
          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between gap-8 lg:gap-12"
            >
              {/* Image Section - Right on Desktop, Top on Mobile */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative shrink-0"
              >
                <div
                  className={`absolute inset-0 ${
                    darkMode ? "bg-white/5" : "bg-black/5"
                  } rounded-full blur-2xl`}
                />
                <img
                  src="raj.jpg"
                  alt="Raj Bhut"
                  className="relative w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover"
                />
              </motion.div>

              {/* Content Section - Left on Desktop */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`inline-block px-4 py-2 rounded-full text-xs font-medium mb-6 ${
                    darkMode
                      ? "bg-white/5 text-white/60 border border-white/10"
                      : "bg-black/5 text-black/60 border border-black/10"
                  }`}
                >
                  Available for opportunities
                </motion.div>

                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-black"
                  } tracking-tight leading-none`}
                >
                  Raj Bhut
                </h1>

                <p
                  className={`text-lg sm:text-xl lg:text-2xl mb-8 ${
                    darkMode ? "text-white/50" : "text-black/50"
                  } font-light`}
                >
                  Full Stack Developer crafting digital experiences with clean
                  code and thoughtful design
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={downloadResume}
                    className={`group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full ${
                      darkMode
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-black text-white hover:bg-black/90"
                    } transition-colors`}
                  >
                    <span className="font-medium text-sm sm:text-base">
                      Download Resume
                    </span>
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </motion.button>

                  <div className="flex gap-3">
                    {[
                      { icon: Github, href: "https://github.com/RajBhut" },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/raj-bhut-2b9a67264",
                      },
                      { icon: Mail, href: "mailto:rajbhut2832005@gmail.com" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${
                          darkMode
                            ? "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                            : "bg-black/5 text-black/60 hover:text-black hover:bg-black/10"
                        } flex items-center justify-center transition-all`}
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-20" id="work">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Selected Work
              </h2>
              <p className={`${darkMode ? "text-white/50" : "text-black/50"}`}>
                Projects I've built and shipped
              </p>
            </motion.div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer p-6 lg:p-8 rounded-2xl ${
                    darkMode
                      ? "bg-white/2 hover:bg-white/4 border border-white/5"
                      : "bg-black/2 hover:bg-black/4 border border-black/5"
                  } transition-all duration-300`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3
                        className={`text-2xl font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {project.name}
                      </h3>

                      <p
                        className={`${
                          darkMode ? "text-white/60" : "text-black/60"
                        } mb-4`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-sm ${
                          darkMode ? "text-white/40" : "text-black/40"
                        }`}
                      >
                        {project.year}
                      </span>

                      {project.type && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            darkMode
                              ? "bg-white/5 text-white/50"
                              : "bg-black/5 text-black/50"
                          }`}
                        >
                          {project.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-white/5 text-white/60"
                            : "bg-black/5 text-black/60"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        darkMode ? "text-white/80" : "text-black/80"
                      }`}
                    >
                      View Project
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        darkMode ? "text-white/80" : "text-black/80"
                      } group-hover:translate-x-1 transition-transform`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 px-6 lg:px-20" id="skills">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Skills & Tools
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3
                    className={`text-sm font-semibold mb-6 uppercase tracking-wider ${
                      darkMode ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className={`text-lg ${
                          darkMode ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 px-6 lg:px-20" id="contact">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-12 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Get In Touch
              </h2>

              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    value: "rajbhut2832005@gmail.com",
                    href: "mailto:rajbhut2832005@gmail.com",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/RajBhut",
                    href: "https://github.com/RajBhut",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/RajBhut",
                    href: "https://www.linkedin.com/in/raj-bhut-2b9a67264",
                  },
                ].map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className={`group flex items-center justify-between py-6 border-b ${
                      darkMode ? "border-white/5" : "border-black/5"
                    }`}
                  >
                    <div>
                      <div
                        className={`text-sm mb-1 ${
                          darkMode ? "text-white/40" : "text-black/40"
                        }`}
                      >
                        {contact.label}
                      </div>
                      <div
                        className={`text-xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {contact.value}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ${
                        darkMode ? "text-white/40" : "text-black/40"
                      } group-hover:translate-x-1 transition-transform`}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <footer
          className={`py-12 px-6 lg:px-20 border-t ${
            darkMode ? "border-white/5" : "border-black/5"
          }`}
        >
          <div className="max-w-5xl w-full mx-auto flex justify-between items-center">
            <p
              className={`text-sm ${
                darkMode ? "text-white/40" : "text-black/40"
              }`}
            >
              © {new Date().getFullYear()} Raj Bhut
            </p>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`${
                darkMode ? "bg-[#1a1a1a]" : "bg-white"
              } rounded-3xl max-w-3xl w-full p-8 lg:p-12 relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 w-10 h-10 rounded-full ${
                  darkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                } flex items-center justify-center transition-colors`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div
                  className={`text-sm mb-2 ${
                    darkMode ? "text-white/40" : "text-black/40"
                  }`}
                >
                  {selectedProject.year}
                </div>
                <h2
                  className={`text-3xl lg:text-4xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {selectedProject.name}
                </h2>
              </div>

              <p
                className={`text-lg mb-8 leading-relaxed ${
                  darkMode ? "text-white/70" : "text-black/70"
                }`}
              >
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm ${
                      darkMode
                        ? "bg-white/5 text-white/60"
                        : "bg-black/5 text-black/60"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full ${
                  darkMode
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/90"
                } transition-colors font-medium`}
              >
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
