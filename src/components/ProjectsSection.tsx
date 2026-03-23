import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Institute Management System (Web & Mobile)",
    desc: "Developed a full web and mobile application for institute management that project implement at General Sir John Kotelawala Defence University. Supports student records, administration, and operational workflows.",
    image: project1,
    tags: ["Flutter", "Firebase", "Web App", "Mobile App"],
    github: "https://github.com/Hasidu0023/se-project2.git",
    live: "#",
  },
  {
    title: "Fitness Application (Java)",
    desc: "A Java-based fitness application with BMI calculation, real-time fitness updates, and health tracking features for monitoring user wellness.",
    image: project2,
    tags: ["Java", "OOP", "Desktop App"],
    github: "https://github.com/Hasidu0023",
    live: "#",
  },
  {
    title: "Smart Home Management System (IoT)",
    desc: "An IoT-based smart home system to monitor and control home devices remotely. Achieved 1st Place at the IoT Exhibition at KDU.",
    image: project3,
    tags: ["IoT", "Arduino", "Sensors", "Automation"],
    github: "https://github.com/Hasidu0023",
    live: "#",
  },
  {
    title: "Clothing Website – Admin Panel",
    desc: "Developed an admin dashboard for managing products, orders, and users in an e-commerce clothing platform.",
    image: project1,
    tags: ["React", "Tailwind", "Admin Panel"],
    github: "https://github.com/Hasidu0023/Travel-expo-.git",
    live: "#",
  },
  {
    title: "Tax Calculation Application",
    desc: "A desktop application designed to calculate income tax accurately based on predefined rules and regulations.",
    image: project2,
    tags: ["C#", ".NET", "Desktop App"],
    github: "https://github.com/Hasidu0023",
    live: "#",
  },
  {
    title: "Research Publications",
    desc: "Contributed to academic research publications conducted at General Sir John Kotelawala Defence University.",
    image: project3,
    tags: ["Research", "Academic", "Publications"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="section-container" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Projects
          </h2>
          <p className="text-gray-500 mt-2 md:text-lg">
            Some of the things I've built
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-gray-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;