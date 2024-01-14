import "./index.scss";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Sidebar className="sidebar sidebar-inner" />
        <motion.h1
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.4,
            },
          }}
        >
          Rahul Kuvlekar
        </motion.h1>
        <div className="social">
          <motion.a
            target="_blank"
            href="mailto:kuvlekar.rahul@gmail.com"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/gmail.svg" alt="gmail" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/rahulkuvlekar/"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://github.com/RahulKuvlekar"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/github.svg" alt="github" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://twitter.com/RahulKuvlekar"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/twitter.svg" alt="twitter" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
