import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  CheckSquare,
  BookOpen,
  Phone,
  Download,
  ArrowUpCircle,
  Code,
  Clipboard,
  Briefcase,
  User,
  Coffee,
  Terminal,
  Database,
  Cloud,
  Layout,
  Settings,
  Gamepad,
  ShoppingCart,
  Lock,
  Ticket,
  FileQuestionIcon,
} from "lucide-react";
import { Pizza } from "lucide-react";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const Card3D = ({ children, className }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setRotateX(-rotateX);
      setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        className={`transform-gpu ${className}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    );
  };

  const projects = [
    {
      id: 1,
      name: "ShopeEase",
      description:
        "Comprehensive e-commerce platform with product management and wishlist features.",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      demo: "https://github.com/RajBhut/ShopeEase",
      details:
        "Desktop application featuring a user-friendly interface for dynamic product rendering, secure password validation, and real-time purchase tracking.",
    },
    {
      id: 2,
      name: "BlinkNotes",
      description:
        "Interactive platform for students to access study materials efficiently.",
      technologies: ["React", "Spring Boot", "MongoDB", "Cloudinary"],
      icon: <Terminal className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      demo: "https://blinknotes-tj5f.vercel.app",
      details:
        "Web app that allows students to access materials by subject and chapter, featuring robust search functionality and cloud-based file storage.",
    },
    {
      id: 3,
      name: "Vidhyakosh",
      description:
        "Hackathon finalist platform for sharing educational content, including blogs and books.",
      technologies: ["React", "Express", "MongoDB", "Cloudinary"],
      icon: <Layout className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      demo: "https://github.com/RajBhut/tictechtoe24",
      details:
        "An intuitive platform for educators and learners, featuring a blogging system, book purchasing, and robust content management.",
    },
    {
      id: 4,
      name: "FoodRikshaw",
      description:
        "Web app for a food truck business to manage menus and customer orders.",
      technologies: ["React", "Express", "MongoDB", "Socket.IO"],
      icon: <Pizza className="w-8 h-8" />,
      color: "from-red-600 to-orange-600",
      demo: "https://food.rajb.codes", // Replace with actual demo URL or remove
      details:
        "Features include daily menu updates, real-time order status, and Firebase-powered push notifications for customers.",
    },
    {
      id: 5,
      name: "Flatcard Game",
      description:
        "Interactive card-matching game with dynamic UI improvements.",
      technologies: ["React Native", "TypeScript"],
      icon: <Gamepad className="w-8 h-8" />,
      color: "from-indigo-600 to-violet-600",
      demo: "https://flatcardgame.com",
      details:
        "Mobile game with customizable settings, animations, and engaging gameplay for kids, featuring a 'surrender' button and modal improvements.",
    },
    {
      id: 6,
      name: "File Encryption App",
      description:
        "A secure file encryption and decryption desktop application.",
      technologies: ["Java", "Swing", "File I/O"],
      icon: <Lock className="w-8 h-8" />,
      color: "from-yellow-600 to-orange-600",
      demo: "https://github.com/RajBhut/File-Encryption_and_Decryption-using-java-",
      details:
        "Uses XOR encryption to secure files, with features to detect encrypted files and handle incorrect passwords effectively.",
    },
    {
      id: 7,
      name: "TicketTaw",
      description: "Tick-Tack-Taw Game",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: <Gamepad className="w-8 h-8" />,
      color: "from-gray-600 to-black",
      demo: "https://soticktack.rajb.codes",
      details: "Fun game where any one can play online and offline",
    },
    {
      id: 8,
      name: "OnCode",
      description:
        "A platform for executing code online and solving programming challenges.",
      technologies: ["React", "Node.js", "Docker", "MongoDB"],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-600 to-blue-600",
      demo: "https://github.com/RajBhut/oncomp",
      details:
        "Allows users to write, execute, and test code in multiple programming languages directly in the browser. Plans to expand with problem-solving features inspired by LeetCode.",
    },
    {
      id: 9,
      name: "Paster",
      description: "A code snippet sharing platform for developers.",
      technologies: ["React.js", "Node.js", "Postgres", "Redis"],
      icon: <Clipboard className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      demo: "https://paster.rajb.codes",
      details:
        "Allows developers to paste, save, and share code snippets seamlessly. Features include syntax highlighting, private/public sharing options, and snippet expiration settings.",
    },
    {
      id: 10,
      name: "Todo App",
      description:
        "Offline-first Todo app powered by PWA for seamless task management.",
      technologies: ["React", "PWA", "IndexedDB"],
      icon: <CheckSquare className="w-8 h-8" />,
      color: "from-gray-600 to-blue-600",
      demo: "https://todo.rajb.codes",
      details: "Allows users to manage tasks offline with PWA capabilities.",
    },
    {
      id: 11,
      name: "Braineac Blast",
      description:
        "Interactive quiz platform with AI-generated quizzes (in development).",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-600",
      demo: "https://frontend-braniac.vercel.app",
      details:
        "A fun and educational quiz platform. Features real-time leaderboard, customizable quizzes, and plans to include AI-powered question generation and adaptive difficulty.",
    },
    // {
    //   id: 12,
    //   name:"Other Projects",
    //   description:"Other on going projects...",
    //   technologies: [],
    //   icon:<FileQuestionIcon className="w-8 h-8" />,
    //   color: "from-yellow-600 to-orange-600",
    //   demo: "",
    //   details:"For more my work... "
    // }
  ];

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  const imageHoverVariants = {
    rest: {
      scale: 1,
      borderRadius: "100%",
      boxShadow: "0 0 0 rgba(96, 165, 250, 0)",
    },
    hover: {
      scale: 1.2,
      borderRadius: "100%",
      rotateZ: 5,

      boxShadow: "0 0 40px rgba(96, 165, 250, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const downloadresume = () => {
    window.open(
      "https://res.cloudinary.com/demo214/image/upload/v1734790835/isc6qj12lrgp7aoefftv.pdf"
    );
  };

  const glowVariants = {
    rest: {
      opacity: 0,
      scale: 1.2,
    },
    hover: {
      opacity: [0.5, 0.3, 0.5],
      scale: 1.3,
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
        },
        scale: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 overflow-hidden">
      <motion.div
        className="fixed w-4 h-4 bg-blue-500 rounded-full mix-blend-screen pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.2,
          scale: {
            duration: 0.8,
            repeat: Infinity,
          },
        }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Raj Bhut
            </motion.span>
            <div className="flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        className="min-h-screen flex items-center justify-center relative"
        id="about"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative mb-8"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl"
                variants={glowVariants}
              />

              <motion.div
                className="relative w-60 h-60  overflow-hidden bg-gradient-to-r rounded-full  from-blue-500 to-purple-500 p-1"
                variants={imageHoverVariants}
              >
                <img
                  src="raj.jpg"
                  alt="Raj Bhut"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #60A5FA, #DB2777, #60A5FA)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Raj Bhut
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-8"
              variants={floatingAnimation}
              animate="animate"
            >
              Full Stack Developer & Creative Technologist
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "https://github.com",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "https://linkedin.com",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  href: "mailto:example@mail.com",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="transform hover:scale-110 transition-transform hover:text-blue-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative" id="projects">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            style={{
              backgroundImage: "linear-gradient(45deg, #60A5FA, #DB2777)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card3D
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <motion.div
                  // layoutId={`project-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} p-4 mb-4`}
                  >
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    // variants={container}
                    // initial="hidden"
                    // animate="show"
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        // variants={item}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="py-20 relative bg-gradient-to-b from-black to-gray-900"
        id="skills"
      >
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            style={{
              backgroundImage: "linear-gradient(45deg, #60A5FA, #DB2777)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            // variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Frontend Mastery",
                skills: ["React", "HTML", "CSS"],
                icon: <Layout className="w-8 h-8" />,
                color: "from-blue-600 to-cyan-600",
              },
              {
                title: "Backend Excellence",
                skills: [
                  "Node.js",
                  "Python",
                  "SpringBoot",
                  "MongoDB",
                  "Postgres",
                  "Express",
                ],
                icon: <Database className="w-8 h-8" />,
                color: "from-purple-600 to-pink-600",
              },
              {
                title: "DevOps & Cloud",
                skills: ["Vercel", "Docker", "Heroku"],
                icon: <Cloud className="w-8 h-8" />,
                color: "from-green-600 to-teal-600",
              },
            ].map((category, index) => (
              <Card3D
                key={category.title}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <motion.div
                  // variants={item}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mb-4 flex items-center justify-center`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  // variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      // variants={item}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </Card3D>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 relative" id="contact">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            style={{
              backgroundImage: "linear-gradient(45deg, #60A5FA, #DB2777)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Connect
          </motion.h2>
          <Card3D className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-6"
                // variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <motion.div
                  className="space-y-4"
                  // variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      text: "rajbhut2832005@gmail.com",
                      link: "mailto:rajbhut2832005@gmail.com",
                    },

                    {
                      icon: <Github className="w-5 h-5" />,
                      text: "github.com/RajBhut",
                      link: "https://github.com/RajBhut",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      text: "linkedin.com/in/RajBhut",
                      link: "https://www.linkedin.com/in/raj-bhut-2b9a67264",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      // variants={item}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                      // whileHover={{ x: 10 }}
                    >
                      {item.icon}
                      <a href={item.link | "#"}>
                        <span>{item.text}</span>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                // variants={container}
                // initial="hidden"
                // whileInView="show"
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                  // whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    downloadresume();
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              // layoutId={`project-${selectedId}`}
              className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find((p) => p.id === selectedId) && (
                <>
                  <h2 className="text-2xl font-bold mb-4">
                    {projects.find((p) => p.id === selectedId).name}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {projects.find((p) => p.id === selectedId).details}
                  </p>
                  <div className="flex justify-end">
                    <motion.a
                      href={projects.find((p) => p.id === selectedId).demo}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Demo
                    </motion.a>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Portfolio;
