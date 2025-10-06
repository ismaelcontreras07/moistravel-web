"use client";

import React from "react";
import { Link } from "react-router-dom";
import { DIcons } from "dicons";
import "./footer.css";
import iconoMois from "../assets/images/iconomois.png";

/* ---------- Tema sin Next ---------- */
function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch {}
}
function initTheme() {
  try {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return applyTheme(saved);
  } catch {}
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  applyTheme(prefersDark ? "dark" : "light");
}
function handleScrollTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

/* ---------- Navegación ---------- */
const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "Inicio", href: "/" },
            { name: "Nosotros", href: "/nosotros" },
            { name: "Contacto", href: "/contacto" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Tours", href: "/tours" },
            { name: "Tours privados", href: "/translados" },
            { name: "Tours grupales", href: "/reservas" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Traslado al aeropuerto", href: "/products/dicons" },
            { name: "Hotel a hotel", href: "/products/dshapes" },
            { name: "Traslado abierto", href: "/products/graaadients" },
          ],
        },
      ],
    },
  ],
};

export function Footer() {
  React.useEffect(() => { initTheme(); }, []);

  return (
    <footer className="ft">
      {/* Intro */}
      <div className="ft__container ft__intro">
        <Link to="/" className="ft__brand" aria-label="Designali Home">
          <img src={iconoMois} alt="Icono Mois Travel" className="ft__brand-icon" />
        </Link>
        <p className="ft__intro-text">
        Bienvenido a Mois Travel, donde la pasión por descubrir se une con la excelencia en el servicio. Nos dedicamos a transformar cada viaje en una experiencia inolvidable, creando recorridos únicos por Cancún y toda la Riviera Maya.
        Ofrecemos tours personalizados, traslados cómodos y seguros, y atención cercana para que disfrutes sin preocupaciones
        </p>
      </div>

      <div className="ft__container">
        <div className="ft__divider" />

        {/* Grid de enlaces */}
        <div className="ft__grid">
          {navigation.categories.map((category) => (
            <div key={category.name} className="ft__grid-row">
              {category.sections.map((section) => (
                <div key={section.id} className="ft__col">
                  <ul
                    className="ft__list"
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="ft__list-item">
                        <Link to={item.href} className="ft__link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="ft__divider" />
      </div>

      {/* Social + Toggle */}
      <div className="ft__social-wrap">
        <div className="ft__social">
          <a aria-label="Email" href="mailto:contact@designali.in" className="ft__social-btn">
            <DIcons.Mail className="ft__icon" />
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com/designali.in/" target="_blank" rel="noreferrer" className="ft__social-btn">
            <DIcons.Instagram className="ft__icon" />
          </a>
          <a aria-label="WhatsApp" href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh" target="_blank" rel="noreferrer" className="ft__social-btn">
            <DIcons.WhatsApp className="ft__icon" />
          </a>
          <a aria-label="Facebook" href="https://www.facebook.com/designali.agency" target="_blank" rel="noreferrer" className="ft__social-btn">
            <DIcons.Facebook className="ft__icon" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/company/designali" target="_blank" rel="noreferrer" className="ft__social-btn">
            <DIcons.LinkedIn className="ft__icon" />
          </a>
          <a aria-label="YouTube" href="https://www.youtube.com/@designali-in" target="_blank" rel="noreferrer" className="ft__social-btn">
            <DIcons.YouTube className="ft__icon" />
          </a>
        </div>

        {/* Mini toggle + scroll top (sin dependencias) */}
        <div className="ft__tools">
          <button className="ft__pill" onClick={handleScrollTop} aria-label="Go top" title="Top">
            <DIcons.ArrowUp className="ft__icon ft__icon--sm" />
          </button>
        </div>
      </div>

      {/* Créditos */}
      <div className="ft__container ft__credits">
        <div className="ft__credits-row">
          <span>© {new Date().getFullYear()}</span>
          <span>Mois Travel</span>
        </div>
      </div>
    </footer>
  );
}
