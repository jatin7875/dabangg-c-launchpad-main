import { motion } from "framer-motion";
import { Code, Trophy, Users, Zap } from "lucide-react";

const features = [
  { icon: Code, title: "C Programming", desc: "Test your skills in pure C — from basics to advanced." },
  { icon: Trophy, title: "Win Big", desc: "Exciting prizes, certificates & bragging rights await." },
  { icon: Users, title: "Compete", desc: "Battle it out against the best coders on campus." },
  { icon: Zap, title: "Real-Time", desc: "Timed rounds with live leaderboard tracking." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-glow-primary text-primary"
        >
          ABOUT THE EVENT
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16 font-body"
        >
          Dabangg C 2.0 is a high-intensity C programming competition designed to push your coding limits. 
          Show off your logic, speed, and problem-solving skills in this electrifying event!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-sm p-6 text-center group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
