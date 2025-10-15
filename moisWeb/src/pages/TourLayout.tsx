"use client";

import * as React from "react";
import { useParams, Link } from "react-router-dom";
import "./tour.css";
import { Footer } from "../components/Footer";
import StickyMosaicGallery from "../components/StickyMosaicGallery";
import { motion, type Variants } from "framer-motion";
import SplitText from "../components/SplitText";

// imagenes de isla mujeres
import islamujeres1 from "../assets/images/islamujeres1.webp"
import islamujeres2 from "../assets/images/islamujeres2.webp"
import islamujeres3 from "../assets/images/islamujeres3.webp"
import islamujeres4 from "../assets/images/islamujeres4.webp"
import islamujeres5 from "../assets/images/islamujeres5.webp"
import islamujeres6 from "../assets/images/islamujeres6.webp"
import islamujeres7 from "../assets/images/islamujeres7.webp"
import islamujeres8 from "../assets/images/islamujeres8.webp"
import islamujeres9 from "../assets/images/islamujeres9.webp"
import islamujeres10 from "../assets/images/islamujeres10.webp"
import islamujeres11 from "../assets/images/islamujeres11.webp"

import xelha1 from "../assets/images/xelha1.jpg"
import xavage1 from "../assets/images/xavage1.webp"
import xplor1 from "../assets/images/xplor1.jpeg"
import xenses1 from "../assets/images/xenses1.jpg"
import xoximilco1 from "../assets/images/xoximilco1.png"
import xenses2 from "../assets/images/xenses2.jpg"
import xplorfuego1 from "../assets/images/xplorfuego1.webp"
import xplor2 from "../assets/images/xplor2.png"
import xcaret1 from "../assets/images/xcaret1.webp"
import xichen1 from "../assets/images/xichen1.jpg"
import xenotes1 from "../assets/images/xenotes1.jpg"

import dolphin1 from "../assets/images/dolphin1.jpg"
import dolphin2 from "../assets/images/dolphin2.jpg"
import dolphin3 from "../assets/images/dolphin3.webp"
import dolphin4 from "../assets/images/dolphin4.jpg"
import dolphin5 from "../assets/images/dolphin5.webp"
import garrafon1 from "../assets/images/garrafon1.webp"
import garrafon2 from "../assets/images/garrafon2.jpg"
import garrafon3 from "../assets/images/garrafon3.jpg"
import garrafon4 from "../assets/images/garrafon4.jpg"
import garrafon5 from "../assets/images/garrafon5.webp"

// logos
import logoXplor from "../assets/images/logoXplor.png"
import logoXplorFuego from "../assets/images/logoXplorFuego.png"
import logoXenotes from "../assets/images/logoXenotes.png"
import logoXcaret from "../assets/images/logoXcaret.webp"
import logoXichén from "../assets/images/logoXichen.png"
import logoXoximilco from "../assets/images/logoXoximilco.png"
import logoXenses from "../assets/images/logoXenses.png"
import logoXavage from "../assets/images/logoXavage.avif"
import logoXelha from "../assets/images/logoXelha.png"
import logoDolphin from "../assets/images/dolphindiscoverylogo.webp"
import logoGarrafon from "../assets/images/logoGarrafon.png"

// headers
import xplorheader from "../assets/images/xplorheader.jpg"
import xplorfuegoheader from "../assets/images/xplorfuegoheader.webp"
import xenotesheader from "../assets/images/xenotesheader.jpg"
import xavageheader from "../assets/images/xavageheader.jpg"
import xensesheader from "../assets/images/xensesheader.jpg"
import xelhaheader from "../assets/images/xelhaheader.jpg"
import xcaretheader from "../assets/images/xcaretheader.png"
import xoximilcoheader from "../assets/images/xoximilcoheader.jpg"
import xichenheader from "../assets/images/chichenitza1.webp"
import dolphinheader from "../assets/images/dolphinheader.webp"
import garrafonheader from "../assets/images/garrafonheader.webp"

import AnimatedMarqueeHero from "../components/AnimatedMarqueeHero";
import { Navbar1 } from "../components/Navbar/Navbar1";

/* ============ Tipos ============ */
type Currency = "USD" | "MXN" | "EUR";
type SectionId = "hero" | "highlights" | "itinerary" | "gallery" | "pricing" | "faq" | "cta" | "variants" | "description";

type PriceItem = { variantAmount: number; currency: Currency; notes?: string };

type VariantPackage = {
  packageTitle: string;
  packageDescription: string;
  /** Precios opcionales por sub-paquete */
  packagePrice?: Array<PriceItem>;
};

type Variant = {
  variantLogo: string;
  variantTitle: string;
  /** Descripción principal del tour/variante */
  variantDescription: string;
  /** Precios principales de la variante (opcionales) */
  variantPrice?: Array<PriceItem>;
  variantImage: string;
  /** Sub-paquetes opcionales: cada uno con su propia descripción y precios */
  variantPackages?: Array<VariantPackage>;
};

type Tour = {
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  description?: string;
  duration: string;     // "8h", "2 días", etc.
  language?: string;    // "ES/EN"
  cover: string;        // imagen hero
  gallery?: string[];
  variants?: Array<Variant>;
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
    sections: ["hero", "highlights", "itinerary", "gallery", "pricing", "faq", "cta", "variants"],
    cta: { label: "Reservar ahora", href: "/booking?tour=chichen-itza-deluxe" },
  },

  "isla-mujeres-catamaran": {
    slug: "isla-mujeres-catamaran",
    title: "Isla Mujeres en Catamarán",
    subtitle: "Snorkel, barra libre y club de playa",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["hero", "highlights", "gallery", "pricing", "cta"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },



  "discover-isla-mujeres": {
    slug: "discover-isla-mujeres",
    title: "Descubre Isla Mujeres",
    description: "Isla Mujeres te espera con sus aguas turquesas y el majestuoso Sistema Arrecifal Mesoamericano, el segundo más grande del mundo. Este tour incluye snorkel en el colorido arrecife El Farito, un recorrido por la bahía para admirar los distintos tonos del Caribe, comida típica con el delicioso pescado Tikin Xic o pollo a la parrilla, tiempo libre para recorrer el encantador Pueblo Mágico en carrito de golf y terminar relajándote en Playa Norte, una de las mejores playas de México. Un recorrido completo que combina naturaleza, cultura y diversión, ideal para todas las edades.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["description", "gallery"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },

    "tulum-coba-chichen-3x1": {
    slug: "tulum-coba-chichen-3x1",
    title: "Tour 3x1 Tulum, Coba & Cenote",
    description: "Isla Mujeres te espera con sus aguas turquesas y el majestuoso Sistema Arrecifal Mesoamericano, el segundo más grande del mundo. Este tour incluye snorkel en el colorido arrecife El Farito, un recorrido por la bahía para admirar los distintos tonos del Caribe, comida típica con el delicioso pescado Tikin Xic o pollo a la parrilla, tiempo libre para recorrer el encantador Pueblo Mágico en carrito de golf y terminar relajándote en Playa Norte, una de las mejores playas de México. Un recorrido completo que combina naturaleza, cultura y diversión, ideal para todas las edades.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["description", "gallery"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },




  "cancun-city-tour": {
    slug: "cancun-city-tour",
    title: "Cancún City Tour",
    description: "Conoce Cancún a través de este hermoso tour y disfruta de los lugares más emblemáticos de este paraíso. Visitaremos el mirador de Playa Delfines, donde podrás tomar las fotos más bonitas del viaje. Después nos dirigiremos a Playa Langosta, donde podrás relajarte y disfrutar del mar con un tiempo libre de aproximadamente 2 horas. Más tarde, haremos una parada en el Mercado 28, ideal para comprar artesanías y recuerdos típicos de la región. Para finalizar, visitaremos un restaurante típico yucateco, donde podrás degustar una variedad de platillos tradicionales de la zona.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["description", "gallery"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },

  "arrecife-el-farito-arrecife-manchones-musa": {
    slug: "arrecife-el-farito-arrecife-manchones-musa",
    title: "Arrecife El Farito, Arrecife Manchones & Musa",
    description: "Este tour de snorkel recorre los tres principales atractivos del Parque Costa Occidental de Isla Mujeres y es ideal para quienes disfrutan del mar sin necesidad de gran experiencia. Incluye El Farito, un arrecife de poca profundidad lleno de vida marina; el arrecife Manchones, donde se aprecian corales y esculturas del Museo Subacuático de Arte; y la famosa instalación La Evolución Silenciosa, con más de 450 figuras bajo el mar. Una experiencia única para descubrir la belleza del Caribe desde sus aguas.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["description", "gallery"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },

  "tour-catamaran-musa-isla-mujeres": {
    slug: "tour-catamaran-musa-isla-mujeres",
    title: "Tour Catamaran Museo Musa, Isla Mujeres",
    description: "Navega en catamarán hacia Isla Mujeres, disfruta barra libre, haz snorkel en el MUSA y relájate explorando la isla y sus playas.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/isla-hero.jpg",
    gallery: [islamujeres1, islamujeres2, islamujeres3, islamujeres4, islamujeres5, islamujeres6, islamujeres7, islamujeres8, islamujeres9, islamujeres10, islamujeres11],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["description", "gallery"],
    cta: { label: "Book", href: "/booking?tour=isla-mujeres-catamaran" },
  },

  'mega-tour-tulum-coba-chichen-itza': {
    slug: 'mega-tour-tulum-coba-chichen-itza',
    title: 'Mega Tour Tulum, Coba & Chichen Itza',
    description: 'Descubre lo mejor de la cultura maya en un solo día con el Archaeological Mega Tour Tulum, Cobá & Chichén Itzá. Inicia tu recorrido admirando las ruinas frente al mar Caribe en Tulum, continúa explorando la antigua ciudad de Cobá, donde podrás subir la pirámide más alta de la región y disfrutar de la selva que la rodea. Finalmente, maravíllate con la imponente Chichén Itzá, una de las Nuevas Siete Maravillas del Mundo. Este tour combina historia, cultura y naturaleza en una experiencia inolvidable por las joyas arqueológicas de la península de Yucatán.',
    location: 'Quintana Roo, México',
    duration: '7h',
    cover: '/img/tours/xcaret-hero.jpg',
    gallery: [xelha1, xavage1, xplor1, xenses1, xoximilco1, xplorfuego1, xenses2, xplor2, xcaret1, xenotes1, xichen1],
    price: { amount: 89, currency: 'USD', notes: 'niños 30% off' },
    highlights: ['Snorkel en arrecife', 'Open bar', 'Club de playa', 'Pueblo libre'],
    sections: ['description', 'gallery'],
    cta: { label: 'Book', href: '/booking?tour=mega-tour-tulum-coba-chichen-itza' },
  },

  "xcaret-group": {
    slug: "xcaret-group",
    title: "Xcaret Group",
    subtitle: "Conoce todos los parques de grupo Xcaret. Xelha, Xavage, Xplor, Xenotes, Xoximilco, Xenses, Xichen.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/xcaret-hero.jpg",
    gallery: [xelha1, xavage1, xplor1, xenses1, xoximilco1, xplorfuego1, xenses2, xplor2, xcaret1, xenotes1, xichen1],
    variants: [
      {
        variantLogo: logoXplor,
        variantTitle: "Xplor",
        variantDescription: "Vive un día inigualable en un lugar considerado una de las maravillas naturales más grandes y hermosas del mundo. El parque Xel-Há ofrece una de las mejores experiencias en el corazón de la Riviera Maya. Practica snorkel sin límites mientras nadas y disfrutas de sus ríos, cenotes y cala natural. Aquí descubrirás que el paraíso terrenal está más cerca de lo que crees.",
        variantPrice: [
          { variantAmount: 160, currency: "USD", notes: "adultos" },
          { variantAmount: 120, currency: "USD", notes: "niños" }
        ],
        variantImage: xplorheader,
      },
      {
        variantLogo: logoXplorFuego,
        variantTitle: "Xplor Fuego",
        variantDescription: "Reconecta con tu naturaleza valiente y exploradora. Al caer la noche, se encienden las antorchas de Xplor Fuego para conducir un vehículo anfibio por la selva, volar en tirolesas bajo las estrellas, nadar en un río de estalactitas, remar en balsa en un circuito subterráneo y disfrutar de un fantástico buffet de costillas. Disfruta de la única aventura nocturna sin límites.",
        variantPrice: [
          { variantAmount: 127, currency: "USD", notes: "adultos" },
          { variantAmount: 96, currency: "USD", notes: "niños" }
        ],
        variantImage: xplorfuegoheader,
      },
      {
        variantLogo: logoXenotes,
        variantTitle: "Xenotes",
        variantDescription: "Diviértete en tu visita a Cancún y la Riviera Maya con experiencias que te permitirán interactuar con todos los tipos de cenotes que existen en Cancún, a través de diversas actividades en cada uno: rapel asistido, tirolesas, kayak y nado acuático exploratorio, para que disfrutes plenamente de entornos naturales perfectamente adaptados y te sientas en armonía con estos enigmáticos lugares. Además, el Tour Xenotes por Xcaret incluye transporte a los cuatro cenotes, guía certificado, fotógrafo, transporte, alimentos y bebidas.",
        variantPrice: [
          { variantAmount: 150, currency: "USD", notes: "adultos" },
          { variantAmount: 113, currency: "USD", notes: "niños" }
        ],
        variantImage: xenotesheader,
      },
      {
        variantLogo: logoXoximilco,
        variantTitle: "Xoximilco",
        variantDescription: "Las fiestas mexicanas en Playa del Carmen y Cancún son las mejores, ¡y en el agua, aún mejores! Súbete a una colorida trajinera que te llevará a un recorrido por los canales de Xoximilco mientras degustas lo mejor de la gastronomía mexicana y te animas con la barra libre de cervezas y tequila, en compañía de nuevos amigos, mariachis y un divertido artista. Déjate llevar por el espíritu de una noche mexicana en Cancún y Playa del Carmen en Xoximilco.",
        variantPrice: [
          { variantAmount: 145, currency: "USD", notes: "adultos" },
          { variantAmount: 109, currency: "USD", notes: "niños" }
        ],
        variantImage: xoximilcoheader,
      },
      {
        variantLogo: logoXelha,
        variantTitle: "Xelha",
        variantDescription: "Vive un día inigualable en un lugar considerado una de las maravillas naturales más grandes y hermosas del mundo. El parque Xel-Há ofrece una de las mejores experiencias en el corazón de la Riviera Maya. Practica snorkel sin límites mientras nadas y disfrutas de sus ríos, cenotes y cala natural. Aquí descubrirás que el paraíso terrenal está más cerca de lo que crees.",
        variantPrice: [
          { variantAmount: 155, currency: "USD", notes: "adultos" },
          { variantAmount: 116, currency: "USD", notes: "niños" }
        ],
        variantImage: xelhaheader,
      },
      {
        variantLogo: logoXcaret,
        variantTitle: "Xcaret",
        variantDescription: "El Parque Xcaret te transportará al corazón de México a través de sus diferentes etapas, estados y tradiciones. Es la combinación perfecta de historia, cultura, vida silvestre, gastronomía y exploración mexicanas. Descubre este increíble parque ecoarqueológico, diseñado para todos y ganador de varios premios internacionales. Aquí podrás nadar en cuevas a lo largo de ríos subterráneos; practicar snorkel en las aguas cristalinas de la laguna; admirar los arrecifes, disfrutar de las playas y caletas, y pasear por el Río Paraíso. Descubre animales como tortugas, tapires y monos araña, visita el santuario de aves, el mariposario y la Isla Jaguar. Adéntrate en los sitios arqueológicos que albergaron las ceremonias mayas más importantes durante más de 1000 años.",
        variantPrice: [
          { variantAmount: 208, currency: "USD", notes: "adultos" },
          { variantAmount: 156, currency: "USD", notes: "niños" }
        ],
        variantImage: xcaretheader,
      },
      {
        variantLogo: logoXenses,
        variantTitle: "Xenses",
        variantDescription: "Redescubre tus sentidos en Xenses, el único parque sensorial en Playa del Carmen y la Riviera Maya, durante medio día. Siéntete como un pájaro en la tirolesa Vuelo de Pájaro o súbete al tobogán que lleva a una caverna en Cancún. Cuestionarás la realidad al visitar El Pueblo, donde no sabes si subes o bajas, si arriba es abajo o abajo es arriba, y deja que tus sentidos te guíen en Xensatorium, una caverna subterránea en total oscuridad que alberga todos los ecosistemas del planeta.",
        variantPrice: [
          { variantAmount: 113, currency: "USD", notes: "adultos" },
          { variantAmount: 85, currency: "USD", notes: "niños" }
        ],
        variantImage: xensesheader,
      },
      {
        variantLogo: logoXavage,
        variantTitle: "Xavage",
        variantDescription: "Si vienes con tu pareja, amigos o familia, en Xavage encontrarás una variedad de actividades para todos los gustos. Quizás tus acompañantes sean muy intrépidos y quieran hacerlo todo, mientras que tú prefieres algo más relajado, ¡con nuestras entradas todos lo pasarán en grande!",
        variantPrice: [
          { variantAmount: 110, currency: "USD", notes: "adultos" },
          { variantAmount: 83, currency: "USD", notes: "niños" }
        ],
        variantImage: xavageheader,
      },
      {
        variantLogo: logoXichén,
        variantTitle: "Xichén",
        variantDescription: "Xichén es la mejor alternativa para descubrir la grandeza cultural e histórica de Quintana Roo y Yucatán. Explora Chichén Itzá, Cobá y Tulum en compañía de guías expertos que te llevarán a descubrir los secretos de una de las culturas más enigmáticas de todos los tiempos.",
        variantPrice: [
          { variantAmount: 140, currency: "USD", notes: "adultos" },
          { variantAmount: 105, currency: "USD", notes: "niños" }
        ],
        variantImage: xichenheader,
      },
    ],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["variants", "gallery"],
    cta: { label: "Book", href: "/booking?tour=xcaret-group" },
  },

  "dolphin-garrafon-park": {
    slug: "dolphin-garrafon-park",
    title: "Dolphin Garrafón Park",
    subtitle: "Conoce todos los parques de grupo Xcaret. Xelha, Xavage, Xplor, Xenotes, Xoximilco, Xenses, Xichen.",
    location: "Quintana Roo, México",
    duration: "7h",
    cover: "/img/tours/xcaret-hero.jpg",
    gallery: [dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, garrafon1, garrafon2, garrafon3, garrafon4, garrafon5],
    variants: [
      {
        variantLogo: logoDolphin,
        variantTitle: "Dolphin Discovery",
        variantDescription: "Los programas de nado con delfines de Dolphin Discovery son reconocidos por sus características especiales únicas e incomparables y por mantener los más altos estándares de calidad en el cuidado de las especies marinas.",
        variantImage: dolphinheader,
        variantPackages: [
          {
            packageTitle: "Dolphin Royal Swim",
            packageDescription: "Incluye: 2 Delfines en el programa • 60 minutos de tiempo con el delfín • Transportación marítima viaje redondo • Comida buffet en el club • Barra libre internacional • Club de playa Dolphin Discovery • Área VIP del parque • Casilleros • Recorrido en el centro de Isla Mujeres • Puente colgante • Observación de tiburón gata",
            packagePrice: [
              { variantAmount: 179, currency: "USD", notes: "adultos" },
              { variantAmount: 109, currency: "USD", notes: "niños" }
            ]
          },
          {
            packageTitle: "Dolphin Swim Adventure",
            packageDescription: "Incluye: 1 Delfín en el programa • 50 minutos de tiempo con el delfín (actividad de nado) • Transportación marítima redonda • Comida buffet en el club (1 vez) • Barra libre internacional • Club de playa Dolphin Discovery • Casilleros • Tour al centro desde Isla Mujeres • Puente colgante • Observación de tiburón gata",
            packagePrice: [
              { variantAmount: 149, currency: "USD", notes: "adultos" },
              { variantAmount: 109, currency: "USD", notes: "niños" }
            ]
          },
          {
            packageTitle: "Dolphin Encounter",
            packageDescription: "Incluye: 1 Delfín en el programa • 40 minutos de tiempo con el delfín (en plataforma) • Transportación marítima viaje redondo • Comida buffet en el club • Bebidas no alcohólicas gratis • Club de playa Dolphin Discovery (albercas, camastros, sombrillas y regaderas) • Casilleros • Tour al centro de Isla Mujeres • Puente colgante",
            packagePrice: [
              { variantAmount: 119, currency: "USD", notes: "adultos" },
              { variantAmount: 109, currency: "USD", notes: "niños" }
            ]
          }
        ]
      },
      {
        variantLogo: logoGarrafon,
        variantTitle: "Garrafón Natural Park",
        variantDescription: "El Parque Natural Garrafón es mundialmente conocido por la incomparable belleza de sus arrecifes y acantilados con vistas a las aguas turquesas del Caribe mexicano. A solo 25 minutos de Cancún, en la hermosa Isla Mujeres, este parque natural ofrece actividades recreativas como snorkel, kayak, una piscina panorámica, tirolesa y excursiones por la isla.",
        variantImage: garrafonheader,
        variantPackages: [
          {
            packageTitle: "Garrafon Basic",
            packageDescription: "Incluye: Transportación marítima redonda • Comida buffet en el club (resto bucaneros) • Snack Bar • Barra libre nacional • Alberca panorámica • Casilleros • Tour al centro de Isla Mujeres • Snorkel (equipo incluido) • Kayaks • Paddleboards • Temazcal y Ceremonia de Armonización • Caminata guiada a Punta Sur",
            packagePrice: [
              { variantAmount: 99, currency: "USD", notes: "adultos" },
              { variantAmount: 79, currency: "USD", notes: "niños" }
            ]
          },
          {
            packageTitle: "Garrafon VIP & Royal Swim",
            packageDescription: "Incluye: Transportación marítima redonda • Comida buffet en el club (descansa la vista y big fish) • Snack Bar • Barra libre nacional • Alberca panorámica e infinity • Área de jacuzzi • Casilleros • Tour al centro de Isla Mujeres • Tirolesa • Snorkel (equipo incluido) • Kayaks • Paddleboards • Temazcal y Ceremonia de Armonización • Caminata guiada a Punta Sur",
            packagePrice: [
              { variantAmount: 189, currency: "USD", notes: "adultos" },
              { variantAmount: 109, currency: "USD", notes: "niños" }
            ]
          }
        ]
      }
    ],
    price: { amount: 89, currency: "USD", notes: "niños 30% off" },
    highlights: ["Snorkel en arrecife", "Open bar", "Club de playa", "Pueblo libre"],
    sections: ["variants", "gallery"],
    cta: { label: "Book", href: "/booking?tour=xcaret-group" },
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

function SectionDescription({ tour }: { tour: Tour }) {
  if (!tour.description) return null;
  return (
    <section className="tour__section">
      <SplitText text="Ten una experiencia inolvidable" className="tour__h2" />
      <p className="tour__description">{tour.description}</p>
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

const item: Variants = {
  hidden: { opacity: 0, y: 38, filter: "blur(1px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.07
    }
  })
};

function PricesRow({ prices }: { prices?: Array<PriceItem> }) {
  if (!prices?.length) return null;
  return (
    <div className="variant-prices">
      {prices.map((p, pIdx) => (
        <div key={`price-${pIdx}`} className="variant-price">
          <span className="amount">{moneyFmt(p.variantAmount, p.currency)}</span>
          <span className="notes"> {p.notes}</span>
        </div>
      ))}
    </div>
  );
}

function SectionVariants({ tour }: { tour: Tour }) {
  if (!tour.variants?.length) return null;
  return (
    <motion.section className="variants-container">
      {tour.variants.map((variant, i) => (
        <motion.div
          key={i}
          className="variant"
          variants={item}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.02, margin: "0px 0px -20% 0px" }}
        >
          <div
            className="logo-container"
            style={{ backgroundImage: `url(${variant.variantImage})` }}
          >
            <img className="variant-logo" src={variant.variantLogo} alt={variant.variantTitle} />
          </div>

          <div className="variant-info">
            <div className="text">
              {/* Descripción principal de la variante */}
              <p className="variant-description">{variant.variantDescription}</p>

              {/* Precios principales de la variante (opcionales) */}
              <PricesRow prices={variant.variantPrice} />

              {/* Sub-paquetes opcionales */}
              {variant.variantPackages?.length ? (
                <div className="packages">
                  {variant.variantPackages.map((p, pIdx) => (
                    <div key={`package-${i}-${pIdx}`} className="variant-package">
                      <span className="title">{p.packageTitle}</span>
                      <span className="description">{p.packageDescription}</span>
                      <PricesRow prices={p.packagePrice} />
                    </div>
                  ))}
                </div>
              ) : null}

              <Link to={""} className="btn btn-reserve">Reservar</Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
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
  variants: SectionVariants,
  cta: SectionCTA,
  description: SectionDescription,
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
      <Navbar1 />
      <AnimatedMarqueeHero
        title={tour.title}
        images={tour.gallery || []}
      />
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
