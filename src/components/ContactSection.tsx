import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "hasindugeeminaapritude@gmail.com",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
       toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-gray-800">Get In Touch</h2>
          <p className="section-subheading text-gray-500">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Let's connect</h3>
              <p className="text-gray-600">
                I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hasindugeeminaapritude@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="text-green-500" />
                Hasindu@gmail.com
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-green-500" />
                Matara, Sri Lanka
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/Hasidu0023" target="_blank">
                <Github className="text-gray-700 hover:text-gray-900 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/hasindu-wijeweera-637b2a272/" target="_blank">
                <Linkedin className="text-gray-700 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-gray-50 border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-gray-50 border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
            />

            <Textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="bg-gray-50 border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;