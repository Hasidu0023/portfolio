import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Tailwind CSS", "Spring Boot", "Express.js"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Firebase", "MySQL", "MongoDB"],
  },
  {
    category: "Concepts",
    skills: ["OOP", "REST APIs", "Agile", "Data Structures", "UI/UX Design", "Networking"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="section-container" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Skills & Tools
          </h2>
          <p className="text-gray-500 mt-2 md:text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold text-lg mb-4 uppercase tracking-wider">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: "spring", stiffness: 100, damping: 12, delay: gi * 0.15 + si * 0.05 }}
                    className="bg-white/50 backdrop-blur-sm text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;