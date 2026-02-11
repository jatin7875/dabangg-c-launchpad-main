import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Award } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "22 February 2026" },
  { icon: Clock, label: "Duration", value: "2-3 Hours" },
  { icon: MapPin, label: "Venue", value: "Em.Tech Dept, SBJITMR Nagpur" },
  { icon: Award, label: "Prizes", value: "Upto 7500/-" },
];

const rules = [
  "Individual participation only",
  "Judging based on correctness, efficiency & plagiarism",
  "Decision of judges is final",
];

const EventDetails = () => {
  return (
    <section id="details" className="py-24 relative circuit-pattern">
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-glow-primary text-primary"
        >
          EVENT DETAILS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-16"
        />

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm p-5 text-center"
            >
              <d.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-xs text-muted-foreground font-display tracking-wider uppercase">{d.label}</p>
              <p className="text-foreground font-bold font-body text-lg mt-1">{d.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card border border-border rounded-sm p-8"
        >
          <h3 className="font-display text-2xl font-bold text-accent text-center mb-6">RULES</h3>
          <ul className="space-y-3">
            {rules.map((rule, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-muted-foreground font-body"
              >
                <span className="text-primary font-bold mt-0.5">▸</span>
                {rule}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
