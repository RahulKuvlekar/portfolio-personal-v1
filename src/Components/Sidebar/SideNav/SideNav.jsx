import { motion } from "framer-motion";

const SideNavMenus = ["Home", "Experience", "Projects", "Skills", "Contact"];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const SideNav = () => {
  return (
    <motion.div className="sidebar-navmenus" variants={variants}>
      {SideNavMenus &&
        SideNavMenus.map((menu) => (
          <motion.a
            href={`#${menu}`}
            key={`${menu}-sidenavmenu`}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {menu}
          </motion.a>
        ))}
    </motion.div>
  );
};

export default SideNav;
