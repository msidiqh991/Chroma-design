import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#hero",
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
  },
  {
    id: 3,
    title: "Project",
    link: "#project",
  },
  {
    id: 4,
    title: "Contact",
    link: "#footer",
  },
];

const Navbar = () => {
  return (
    <motion.div 
    initial={{ y: -100 }} 
    animate={{ y: 0 }} 
    transition={{ duration: 0.5 }}
    className="container py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold">Chroma</span>
      </div>
      <div className="hidden md:block">
        {NavLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.link}
              className="mx-4 text-lg font-semibold"
            >
              {link.title}
            </a>
          );
        })}
      </div>
      <button className="primary-btn">
        Try For Free
      </button>
    </motion.div>
  );
};

export default Navbar;
