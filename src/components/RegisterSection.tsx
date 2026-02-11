import { motion } from "framer-motion";
import logoImage from "@/assets/logo.jpeg";

const RegisterSection = () => {
  return (
    <section id="register" className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <img
            src={logoImage}
            alt="Dabangg C 2.0 Logo"
            className="w-40 h-40 mx-auto rounded-full mb-8 border-2 border-primary/30 shadow-[0_0_30px_hsl(15,90%,55%,0.2)]"
          />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-glow-red text-secondary mb-4">
            READY TO COMPETE?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Register now and prove you're the Dabangg of C programming!
          </p>
          <motion.a
            href="https://forms.gle/DUpPWHLwjZoCZ1eC8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-secondary to-primary text-primary-foreground font-display font-bold text-lg tracking-widest rounded-sm uppercase hover:shadow-[0_0_40px_hsl(15,90%,55%,0.5)] transition-shadow duration-300 animate-[pulse-glow_2s_ease-in-out_infinite]"
          >
            Register Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
