import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("oa_intro_seen");
    if (seen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("oa_intro_seen", "1");
      setShow(false);
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-darker overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Animated rings */}
          <motion.div
            className="absolute rounded-full border border-secondary/30"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 600, height: 600, opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full border border-accent/30"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 900, height: 900, opacity: [0, 0.4, 0] }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
          />

          {/* Glow */}
          <motion.div
            className="absolute h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(190 95% 55% / 0.5), transparent 70%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0.6, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
          >
            <motion.div
              className="rounded-3xl bg-white p-6 shadow-elevated"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
              <img src={logo} alt="OrthoAutomate logo" width="288" height="144" decoding="async" fetchPriority="high" className="h-28 w-auto md:h-36" />
            </motion.div>

            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.h1
                className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              >
                Ortho<span className="text-gradient">Automate</span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="mt-3 h-[2px] w-0 bg-gradient-to-r from-secondary via-accent to-secondary"
              animate={{ width: 200 }}
              transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
