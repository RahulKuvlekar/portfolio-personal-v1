import "./home.scss";
import { motion } from "framer-motion";

const variants = {
  intial: {
    x: `-50vh`,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial={"intial"}
          animate={"animate"}
        >
          <motion.div variants={variants}>
            <motion.h2 variants={variants}>Rahul Kuvlekar</motion.h2>
            <motion.h1 variants={variants}>Web developer</motion.h1>
            <motion.h3 variants={variants}>
              &quot;A passionate individual who always thrive to learn more and
              more about the latest technologies.&rdquo;
            </motion.h3>
          </motion.div>
          <motion.div className="buttons" variants={variants}>
            <motion.button
              onClick={() => {
                window.location.href = "#Projects";
              }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              onClick={() => {
                window.location.href = "#Contact";
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={variants}
            animate={"scrollButton"}
          />
        </motion.div>
        <div className="imageContainer">
          <img src="/hero1.png" alt="" />
        </div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="intial"
        animate="animate"
        className="slidingTextContainer"
      >
        Frontend Specialist
      </motion.div>
    </div>
  );
};

export default Home;
