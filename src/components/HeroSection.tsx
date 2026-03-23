import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/project-4.jpeg"; // Profile image

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-gray-50/80 to-gray-50" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto px-6">
        
        {/* Left Image Section - Square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-green-400 hover:scale-105 transition-transform"
        >
          <img src={profileImg} alt="Hasindu Wijeweera" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-lg text-center md:text-left"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-green-600">Available for opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Hasindu Wijeweera</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            An IT undergraduate at{" "}
            <span className="font-semibold text-gray-800">General Sir John Kotelawala Defence University</span>, passionate about building modern web applications and solving real-world problems with technology.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <Button size="lg" onClick={() => scrollTo("projects")} className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-all font-semibold">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="border-green-400 text-green-600 hover:bg-green-400 hover:text-white transition-all font-semibold">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
            <a href="https://github.com/Hasidu0023" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hasindu-wijeweera-637b2a272/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hasindugeeminaapritude@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;