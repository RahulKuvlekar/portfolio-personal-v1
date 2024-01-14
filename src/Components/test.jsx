import { motion } from "framer-motion";

const Test = () => {
  const testVariant = {
    hidden: { x: "0vh", opacity: 0 },
    visible: (idx) => ({
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.4, staggerDirection: -1 },
    }),
  };

  const testMap = ["list 1", "List 2", "List 3", "List 4", "List 5"];

  return (
    <div className="test">
      <motion.ul
        // className="box"
        variants={testVariant}
        initial={"hidden"}
        animate={"visible"}
        // transition={{ duration: 2 }}
      >
        {testMap.map((item, idx) => (
          <motion.li variants={testVariant} custom={idx} key={idx}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
