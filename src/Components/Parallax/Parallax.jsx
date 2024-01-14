import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type, className }) => {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
    // animation "start" when target reaches "start" of the viewport
    // animation "end" when top of target reaches the bottom of the viewport i.e. "start"
  });

  const textPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0", "300%", "600%"]
  );

  const position = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0", "50%", "100%"]
  );

  return (
    <motion.section
      className={`parallax ${className ?? ""}`}
      ref={parallaxRef}
      style={{
        background:
          type === "experience"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: textPosition }}>
        {type === "experience" ? "Experience ?" : "Proof of Work ?"}
      </motion.h1>
      <motion.div className="stars" style={{ x: position }} />
      <motion.div
        className="planets"
        style={{
          y: position,
          backgroundImage: `url(${
            type === "experience" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div className="mountains" />
    </motion.section>
  );
};

export default Parallax;
