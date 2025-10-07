"use client";

import * as React from "react";
import { useParams, Link } from "react-router-dom";
import "./tour.css";
import { Footer } from "../components/Footer";
import StickyMosaicGallery from "../components/StickyMosaicGallery";

/* ============ Tipos ============ */
type Currency = "USD" | "MXN" | "EUR";
type SectionId = "hero" | "highlights" | "itinerary" | "gallery" | "pricing" | "faq" | "cta";

type Tour = {
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  duration: string;     // "8h", "2 días", etc.
  language?: string;    // "ES/EN"
  cover: string;        // imagen hero
  gallery?: string[];
  price: { amount: number; currency: Currency; notes?: string };
  highlights?: string[];
  itinerary?: Array<{ title: string; desc?: string }>;
  faq?: Array<{ q: string; a: string }>;
  sections: SectionId[]; // orden de secciones a renderizar
  cta?: { label: string; href?: string; onClick?: () => void };
  // campos extra que quieras (incl. SEO)
};

/* ============ DATA (puedes mover a tours.data.ts) ============ */
const TOURS_BY_SLUG: Record<string, Tour> = {
  "chichen-itza-deluxe": {
    slug: "chichen-itza-deluxe",
    title: "Chichén Itzá Deluxe",
    subtitle: "Experiencia premium con cenote y comida buffet",
    location: "Yucatán, México",
    duration: "12h",
    language: "ES/EN",
    cover: "/img/tours/chichen-hero.jpg",
    gallery: [
      "/img/tours/chichen-1.jpg",
      "/img/tours/chichen-2.jpg",
      "/img/tours/chichen-3.jpg",
    ],
    price: { amount: 129, currency: "USD", notes: "por persona" },
    highlights: [
      "Entrada a zona arqueológica",
      "Cenote sagrado (tiempo para nadar)",
      "Comida buffet regional",
      "Guía certificado",
    ],
    itinerary: [
      { title: "Salida", desc: "Pick-up desde tu hotel (Cancún/Riviera)." },
      { title: "Chichén Itzá", desc: "Recorrido guiado + tiempo libre." },
      { title: "Almuerzo buffet", desc: "Gastronomía yucateca." },
      { title: "Cenote", desc: "Tiempo para nadar y fotos." },
      { title: "Regreso", desc: "Drop-off en tu hotel." },
    ],
    faq: [
      { q: "¿Qué incluye?", a: "Transporte, guía, entradas, comida buffet." },
      { q: "¿Qué llevar?", a: "Bloqueador, toalla, traje de baño, efectivo para gastos personales." },
    ],
    sections: ["hero", "highlights", "itinerary", "gallery", "pricing", "faq", "cta"],
    cta: { label: "Reservar ahora", href: "/booking?tour=chichen-itza-deluxe" },
  },

  "isla-mujeres-catamaran": {
    slug: "isla-mujeres-catamaran",
    title: "Isla Mujeres en Catamarán",
    subtitle: "Snorkel, barra libre y club de playa",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: ["/img/tours/isla-1.jpg", "/img/tours/isla-2.jpg"],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["hero", "highlights", "gallery", "pricing", "cta"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },
};

/* ============ Helpers UI ============ */
const moneyFmt = (n: number, c: Currency) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: c }).format(n);

/* ============ Secciones ============ */
function SectionHero({ tour }: { tour: Tour }) {
  return (
    <section className="tour__hero">
      <div className="tour__hero-media">
        <img src={tour.cover} alt={tour.title} className="tour__hero-img" />
      </div>
      <div className="tour__hero-info">
        <h1 className="tour__title">{tour.title}</h1>
        {tour.subtitle && <p className="tour__subtitle">{tour.subtitle}</p>}
        <div className="tour__meta">
          <span>{tour.location}</span>
          <span>•</span>
          <span>{tour.duration}</span>
          {tour.language && <>
            <span>•</span><span>{tour.language}</span>
          </>}
        </div>
      </div>
    </section>
  );
}

function SectionHighlights({ tour }: { tour: Tour }) {
  if (!tour.highlights?.length) return null;
  return (
    <section className="tour__section">
      <h2 className="tour__h2">Lo que más gusta</h2>
      <ul className="tour__chips">
        {tour.highlights.map((h, i) => <li key={i} className="tour__chip">{h}</li>)}
      </ul>
    </section>
  );
}

function SectionItinerary({ tour }: { tour: Tour }) {
  if (!tour.itinerary?.length) return null;
  return (
    <section className="tour__section">
      <h2 className="tour__h2">Itinerario</h2>
      <ol className="tour__timeline">
        {tour.itinerary.map((it, i) => (
          <li key={i} className="tour__timeline-item">
            <div className="tour__dot" />
            <div className="tour__timeline-content">
              <h3>{it.title}</h3>
              {it.desc && <p>{it.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SectionGallery({ tour }: { tour: Tour }) {
    if (!tour.gallery?.length) return null;
  
    // Si quieres la sección a lo ancho total:
    // return (
    //   <section className="tour__section tour__section--immersive">
    //     <StickyMosaicGallery images={tour.gallery} />
    //   </section>
    // );
  
    // Si te vale el ancho normal del layout:
    return (
      <section className="tour__section">
        <StickyMosaicGallery images={tour.gallery} />
      </section>
    );
  }

function SectionPricing({ tour }: { tour: Tour }) {
  const { amount, currency, notes } = tour.price;
  return (
    <section className="tour__section">
      <div className="tour__pricing">
        <div>
          <div className="tour__price">{moneyFmt(amount, currency)}</div>
          {notes && <div className="tour__note">{notes}</div>}
        </div>
        {tour.cta && tour.cta.href && (
          <Link to={tour.cta.href} className="btn btn--primary">Reservar</Link>
        )}
      </div>
    </section>
  );
}

function SectionFAQ({ tour }: { tour: Tour }) {
  if (!tour.faq?.length) return null;
  return (
    <section className="tour__section">
      <h2 className="tour__h2">Preguntas frecuentes</h2>
      <div className="tour__faq">
        {tour.faq.map((f, i) => (
          <details key={i} className="tour__faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function SectionCTA({ tour }: { tour: Tour }) {
  if (!tour.cta) return null;
  return (
    <section className="tour__cta">
      {tour.cta.href ? (
        <Link to={tour.cta.href} className="btn btn--primary">{tour.cta.label}</Link>
      ) : (
        <button className="btn btn--primary" onClick={tour.cta.onClick}>{tour.cta.label}</button>
      )}
    </section>
  );
}

/* ============ Registry de secciones ============ */
const SECTIONS: Record<SectionId, React.FC<{ tour: Tour }>> = {
  hero: SectionHero,
  highlights: SectionHighlights,
  itinerary: SectionItinerary,
  gallery: SectionGallery,
  pricing: SectionPricing,
  faq: SectionFAQ,
  cta: SectionCTA,
};

/* ============ Layout ============ */
const TourLayout: React.FC = () => {
  const { slug } = useParams();
  const tour = slug ? TOURS_BY_SLUG[slug] : undefined;

  if (!tour) {
    return (
      <main className="tour tour--notfound">
        <h1>Tour no encontrado</h1>
        <Link to="/tours" className="btn">Volver a tours</Link>
      </main>
    );
  }

  return (
    <main className="tour">
      {/* Render dinámico según orden configurado */}
      {tour.sections.map((key) => {
        const Comp = SECTIONS[key];
        return <Comp key={key} tour={tour} />;
      })}
      <Footer />
    </main>
  );
};

export default TourLayout;
