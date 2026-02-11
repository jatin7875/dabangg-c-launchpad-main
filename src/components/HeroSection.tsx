import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bandImage from "@/assets/band.png";
import characterImage from "@/assets/character.png";

const EVENT_DATE = new Date("2026-02-22T10:00:00");

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate, timeLeft]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds, isExpired: timeLeft <= 0 };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border rounded-sm flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <span className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-primary relative z-10">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] md:text-xs font-display tracking-widest text-muted-foreground mt-2 uppercase">
      {label}
    </span>
  </div>
);

const HeroSection = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT_DATE);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Radial glow behind character */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-6">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 blur-2xl rounded-full" />
          <img src={bandImage} alt="Dabangg C 2.0" className="mt-12 w-full relative z-10 drop-shadow-[0_0_40px_hsl(15,90%,55%,0.4)]" />
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-48 md:w-64 animate-float"
        >
          <img src={characterImage} alt="Dabangg Character" className="w-full drop-shadow-[0_0_30px_hsl(15,90%,55%,0.3)]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-4xl font-bold font-display text-glow-accent text-accent tracking-wider"
        >
          SWAGAT NAHI KAROGE HAMARA?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl font-body"
        >
          The Ultimate C Programming Competition — Code like a Dabangg!
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="flex gap-3 md:gap-5 mt-2"
        >
          {isExpired ? (
            <p className="font-display text-xl text-accent text-glow-accent font-bold tracking-wider">EVENT IS LIVE!</p>
          ) : (
            <>
              <CountdownUnit value={days} label="Days" />
              <span className="text-2xl md:text-3xl font-bold text-primary self-center mb-6">:</span>
              <CountdownUnit value={hours} label="Hours" />
              <span className="text-2xl md:text-3xl font-bold text-primary self-center mb-6">:</span>
              <CountdownUnit value={minutes} label="Mins" />
              <span className="text-2xl md:text-3xl font-bold text-primary self-center mb-6">:</span>
              <CountdownUnit value={seconds} label="Secs" />
            </>
          )}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#register"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-10 py-4 bg-gradient-to-r from-secondary to-primary text-primary-foreground font-display font-bold text-lg tracking-widest rounded-sm uppercase border border-primary/30 hover:shadow-[0_0_30px_hsl(15,90%,55%,0.5)] transition-shadow duration-300"
        >
          Register Now
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
