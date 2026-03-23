import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const timeline = [
  {
    year: "2022 – Present",
    title: "BSc (Hons) in Information Technology",
    institution: "General Sir John Kotelawala Defence University",
    desc: "Studying core IT subjects including Software Engineering, Data Structures, Networking, and Database Systems.",
  },
  {
    year: "2020",
    title: "G.C.E. Advanced Level – Commerce Stream",
    institution: "St. Thomas' College, Matara",
    desc: "Successfully completed Advanced Level studies specializing in Accounting, Business Studies, and Information Technology.",
  },
  {
    year: "2017",
    title: "G.C.E. Ordinary Level",
    institution: "St. Thomas' College, Matara",
    desc: "Successfully obtained outstanding results in all subjects at the G.C.E. Ordinary Level (O/L) examination.",
  },
];

const certifications = [
  "Computer Hardware Basics",
  "CCNA: Introduction to Networks",
  "Introduction to IoT",
  "Oracle Java Foundations",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Education & Certifications
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            My academic journey and professional certifications
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariant}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse text-right"
              }`}
            >
              {/* Side Dot */}
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg border-2 border-white mt-1" />

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow w-full md:w-3/4">
                <div className="flex items-center gap-2 text-sm text-green-500 font-medium mb-2">
                  <Calendar className="h-4 w-4" />
                  {item.year}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <GraduationCap className="h-4 w-4" />
                  {item.institution}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-4 text-center text-sm md:text-base shadow-md hover:shadow-xl transition-all"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;