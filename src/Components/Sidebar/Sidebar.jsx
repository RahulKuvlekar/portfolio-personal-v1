import ToggleButton from "./ToggleButton/ToggleButton";
import SideNav from "./SideNav/SideNav";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Sidebar.scss";

const variant = {
  open: {
    clipPath: "circle(2330px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};
const Sidebar = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={className}
      initial={"close"}
      animate={open ? "open" : "close"}
    >
      <ToggleButton setOpen={setOpen} />
      <motion.div className="sidebar-bg" variants={variant}>
        <SideNav />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
