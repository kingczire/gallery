import { useState } from "react";
import { nav_links } from "../constants/const";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section id="home" className="p-0" />
      <header className="w-full px-6 py-4 md:p-16">
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center">
          <Logo />

          <nav>
            <ul className="flex gap-5">
              {nav_links.map((nav, index) => (
                <li
                  key={index}
                  className="hover:text-white transition text-nowrap"
                >
                  <a href={`${nav.link}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center">
          <div className="cursor-pointer z-50 relative">
            <Logo />
          </div>

          <div className="z-50 relative">
            <button onClick={() => setIsOpen(!isOpen)}>
              <RxHamburgerMenu size={30} />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white p-6 shadow-lg z-40`}
              >
                <ul className="flex flex-col items-center justify-center gap-5 h-full ">
                  {nav_links.map((nav, index) => (
                    <li
                      key={index}
                      onClick={() => setIsOpen(!isOpen)}
                      className="hover:text-white transition"
                    >
                      <a href={`${nav.link}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
