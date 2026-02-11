import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const dialogues = [
  {
    line: "Swagat nahi karoge hamara?",
    context: "Welcome to Dabangg C 2.0 — the coding arena awaits!",
  },
  {
    line: "Hum tum mein itne ched karenge... ki confuse ho jaoge ki saans kahaan se le aur dhuan kahaan se nikale!",
    context: "Our questions will push your C skills to the limit.",
  },
  {
    line: "Thappad se darr nahi lagta sahab, pyaar se lagta hai.",
    context: "Don't fear the challenge — fear missing out on the fun!",
  },
  {
    line: "Ek baar jo maine commitment kar di, uske baad toh main khud ki bhi nahi sunta.",
    context: "Once you register, give it everything you've got.",
  },
  {
    line: "Dabangg hai toh kya hua, dil toh bachcha hai ji!",
    context: "Code hard, but enjoy every moment of it.",
  },
];

const DialoguesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-glow-primary text-primary"
        >
          DABANGG DIALOGUES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-4 max-w-lg mx-auto"
        >
          Iconic lines that define the spirit of this competition
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {dialogues.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 rounded-sm p-6 md:p-8 transition-colors duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

              <div className="relative z-10 flex gap-4">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg md:text-xl font-display font-bold text-foreground leading-relaxed italic">
                    "{d.line}"
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-3 border-l-2 border-primary/40 pl-3">
                    {d.context}
                  </p>
                </div>
              </div>

              {/* Decorative index */}
              <span className="absolute top-3 right-4 text-5xl font-display font-bold text-primary/5 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DialoguesSection;
