import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiMui,
  SiFigma,
  SiGithub,
  SiReactquery,
  SiNextdotjs,
} from "react-icons/si";
import { Menu, X, Github, Instagram, Mail, PhoneCall } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const [showTooltip, setShowTooltip] = useState(false);

  const projects = [
    {
      title: "UzAssets",
      info: "UzAssets is a web project aimed at presenting financial data, investment indicators, and analytical dashboards in a clear, convenient, and user-friendly way",
      url: "/uzassets.jpg",
      // github: "https://github.com/abdujabbor13/redux-movie",
      versel: "",
    },
    {
      title: "Adidas Official Website — Frontend Clone",
      info: "This project is developed in a style similar to the official Adidas website and includes features such as a product listing, page navigation, and order placement functionality.",
      url: "/adidas.shop.jpg",
      github: "https://github.com/abdujabbor13/adidas-shop",
      versel: "https://adidas-shop.vercel.app/",
    },
    // {
    //   title: "KFC Website — Frontend Clone",
    //   info: "Loyiha KFC brendining rasmiy saytiga mos ravishda yaratilib, unda silliq navigatsiya, filiallarni ko‘rish uchun Google Map integratsiyasi, menyu sahifalari",
    //   url: "/kfc.uz.jpg",
    //   github: "https://github.com/abdujabbor13/kfc-uz",
    //   versel: "https://kfc-uz-rho.vercel.app/"
    // },
    {
      title: "Movie Website — CRUD Functionality with Redux.",
      info: "In this project, global state management is handled using Redux, and API integration is implemented with Axios. The application fully supports fetching (GET), adding (POST), updating (PUT), and deleting (DELETE) movies.",
      url: "/redux.movie.jpg",
      github: "https://github.com/abdujabbor13/redux-movie",
      versel: "https://redux-movie-xi.vercel.app/",
    },
    // {
    //   title: "Marvel Movies — Search & Sort Application.",
    //   info: "Marvel kinolari bazasi bo‘yicha qidirish funksiyasi, yiliga qarab tartiblash (sorting) va qulay UI bilan to‘liq ishlangan loyiha.",
    //   url: "/marvel.movies.jpg",
    //   github: "https://github.com/abdujabbor13/marvel-react",
    //   versel: "https://marvel-react-gamma.vercel.app/"
    // }
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Redux basics", icon: <SiRedux />, color: "#764ABC" },
    { name: "React Query", icon: <SiReactquery />, color: "#FF4154" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Ant design", icon: <SiAntdesign />, color: "#0170FE" },
    { name: "Mui", icon: <SiMui />, color: "#007FFF" },
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Abdujabbor</h1>

          <div className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={toggleMenu}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-lg">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="pt-28 pb-20 max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Abdujabbor</span>
          </h2>
          <p className="text-xl mb-6">
            Frontend Developer specializing in{" "}
            <span className="font-semibold">
              JavaScript, TypeScript, React, Next.js, Redux, React Query, and
              Tailwind CSS
            </span>
            , with experience in building modern, scalable, and responsive web
            applications.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-600 text-white shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-500 dark:border-gray-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
            <img
              src="/myPhoto.jpg"
              alt="My Photo"
              className="w-56 h-56 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto p-4 py-24">
        <h2 className="text-4xl font-bold mb-8 text-blue-500">About Me</h2>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Hello! My name is{" "}
            <span className="font-semibold text-blue-500">
              Abdujabbor Abduvahobov
            </span>
            . I’m a <span className="font-semibold">Front-End Developer</span>{" "}
            from Andijan, Uzbekistan, focused on building modern, responsive,
            and user-friendly web applications.
            <br />
            <br />I work mainly with{" "}
            <span className="font-semibold">
              JavaScript, TypeScript, React, Next.js, Redux, and React Query
            </span>
            , and I use tools like{" "}
            <span className="font-semibold">
              Tailwind CSS, Bootstrap, Ant Design, and Material UI
            </span>{" "}
            to create clean and scalable UI.
            <br />
            <br />I also have experience working with{" "}
            <span className="font-semibold">
              REST APIs (Axios), Git, and GitHub
            </span>
            . I enjoy building smooth user experiences, optimizing performance,
            and continuously learning new technologies to improve my skills.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto p-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08 }}
              className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800 transition-all duration-300 cursor-pointer border border-transparent hover:shadow-lg"
              style={{
                boxShadow: `0 0 0px ${skill.color}`,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-4xl mx-auto mb-3"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>
              <p className="font-semibold text-lg">{skill.name}</p>
              <motion.div
                className="h-1 w-full mt-4 rounded-full"
                style={{ backgroundColor: skill.color, opacity: 0.4 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto p-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-500">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
            >
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-xl mb-4">
                <img
                  className="rounded-xl"
                  src={project.url}
                  alt="project image"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.info}
              </p>
              <div className="relative group">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl opacity-60 cursor-not-allowed">
                  Live Demo
                </button>

                <div
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
    bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                >
                  This project is private and can only be shown by the portfolio
                  owner
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto p-4 py-24">
        <h2 className="text-4xl font-bold mb-8 text-blue-500">Contact</h2>

        <div className="flex flex-col gap-5 text-lg bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Email */}
          <a
            href="mailto:abduvahobovabdujabbor7@gmail.com"
            target="_blank"
            className="flex items-center gap-3 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Mail /> abduvahobovabdujabbor7@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/abdujabbor13"
            target="_blank"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <Github /> github.com/abdujabbor13
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ja660r.x/"
            target="_blank"
            className="flex items-center gap-3 hover:text-pink-500 transition"
          >
            <Instagram /> @ja660r.x
          </a>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <PhoneCall /> +998 95 062 99 00
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-300 dark:border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-6 text-gray-600 dark:text-gray-300 text-2xl">
            <a
              href="https://github.com/abdujabbor13"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/ja660r.x/"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:abduvahobovabdujabbor7@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Line */}
          <div className="w-40 h-[2px] bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
}
