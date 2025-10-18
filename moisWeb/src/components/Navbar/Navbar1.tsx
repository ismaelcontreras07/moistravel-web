"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import "./navbar1.css";
import { Link, useLocation } from "react-router-dom";
import iconoMois from "../../assets/images/iconomois.png";

type NavItem =
  | { label: string; path: string }     // página/ruta (absoluta, ej: "/tours")
  | { label: string; hash: string };    // sección en la página actual (ej: "transfers")

const links: NavItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Transfers", path: "/transfers" },
  { label: "Tours", path: "/tours" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(v => !v);
  const { pathname } = useLocation();

  // Resuelve la URL destino correctamente
  const resolveTo = (item: NavItem) =>
    "path" in item ? item.path : `${pathname}#${item.hash}`;

  return (
    <div className="navbar">
      <div className="navbar__inner" role="navigation" aria-label="Main">
        <div className="navbar__brand">
          <motion.div
            className="brand__logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={iconoMois} alt="Icono Mois Travel" className="brand__logo-icon" />
          </motion.div>
          <p className="brand__logo-text">Mois Travel</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav__links" aria-label="Primary">
          {links.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={resolveTo(item)} className="link">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="cta__desktop"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to={`${pathname}#contact-form`} className="btn btn--primary">
            Contacto
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="menu__button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="icon" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile__overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="overlay__close"
              aria-label="Close menu"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="icon" />
            </motion.button>

            <div className="overlay__links">
              {links.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link
                    to={resolveTo(item)}
                    className="overlay__link"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="overlay__cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Link
                  to={`${pathname}#contact-form`}
                  className="btn btn--primary btn--block"
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
