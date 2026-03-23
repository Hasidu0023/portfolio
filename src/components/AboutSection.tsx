import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "IT Undergraduate", desc: "Studying at KDU, specializing in Information Technology" },
  { icon: Code2, title: "Full-Stack Developer", desc: "Building modern web apps with React, Java, and more" },
  { icon: Target, title: "Problem Solver", desc: "Passionate about creating tech solutions for real-world challenges" },
];

const skills = ["React", "Java", "JavaScript", "Spring Boot", "Python", "SQL", "HTML", "CSS", "C#", "Php", "Flatter", "Firebase", "MySQL"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A driven IT undergraduate passionate about modern web development, problem-solving, and creating meaningful tech solutions.
          </p>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-2 justify-center md:justify-start"
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-lg transition-all"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;