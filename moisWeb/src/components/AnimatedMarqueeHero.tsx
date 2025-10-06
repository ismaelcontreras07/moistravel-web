"use client";

import * as React from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import "./animated-marquee-hero.css";

/* ---------- Hooks util ---------- */
function useMediaQuery(query: string, fallback = false) {
  const [matches, setMatches] = React.useState(fallback);
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

/* ---------- Tipos ---------- */
type Direction = "left" | "right";

export interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description?: string;
  ctaText?: string;

  /** Si pasas href usa <Link />, si no, renderiza un botón */
  ctaHref?: string;
  onCtaClick?: () => void;

  images: string[];

  /** Estilo / layout */
  className?: string;
  /** Altura del carrusel (vh). Ej: 35 = 35vh */
  trackHeightVh?: number; // default 35 (40 en md)
  /** Duplicaciones del array para continuidad (>=2). Default: 2 */
  duplicateTimes?: number;

  /** Animación */
  direction?: Direction;              // default: "left"
  durationDesktop?: number;           // default: 24
  durationMobile?: number;            // default: 36
  startAtHalf?: boolean;              // default: true
  pauseOnHover?: boolean;             // default: true

  /** Performance */
  eagerCount?: number;                // cuántas imágenes priorizar
}

/* ---------- Variants ---------- */
const FADE_IN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

/* ---------- Componente ---------- */
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText = "Get started",
  ctaHref,
  onCtaClick,
  images,
  className = "",

  trackHeightVh = 35,
  duplicateTimes = 2,

  direction = "left",
  durationDesktop = 24,
  durationMobile = 36,
  startAtHalf = true,
  pauseOnHover = true,

  eagerCount = 6,
}) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  // Duplicar imágenes N veces para loop perfecto
  const duplicatedImages = React.useMemo(() => {
    const out: string[] = [];
    for (let i = 0; i < Math.max(2, duplicateTimes); i++) out.push(...images);
    return out;
  }, [images, duplicateTimes]);

  // Dirección y puntos de animación
  const from = startAtHalf ? (direction === "left" ? "0%" : "-50%") : (direction === "left" ? "-50%" : "0%");
  const to   = startAtHalf ? (direction === "left" ? "-50%" : "0%") : (direction === "left" ? "0%" : "-50%");

  // Reduced motion: inmóvil
  const animateTrack = reduce ? { x: 0 } : { x: [from, to] };
  const duration = isDesktop ? durationDesktop : durationMobile;

  // hover pause
  const [isHover, setIsHover] = React.useState(false);
  const effectiveRepeat = pauseOnHover && isHover ? 0 : Infinity;

  return (
    <section className={`amh-hero ${className}`} style={{}}>
      <div className="amh-hero__inner">
        {tagline && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="amh-tagline"
          >
            {tagline}
          </motion.div>
        )}

        <motion.h1
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.2 }}
          className="amh-title"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="amh-title__word">
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {description && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.5 }}
            className="amh-description"
          >
            {description}
          </motion.p>
        )}

        {(ctaHref || onCtaClick) && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.6 }}
          >
            {ctaHref ? (
              <Link to={ctaHref} className="amh-btn">
                {ctaText}
              </Link>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="amh-btn"
                onClick={onCtaClick}
              >
                {ctaText}
              </motion.button>
            )}
          </motion.div>
        )}
      </div>

      {/* Marquee */}
      <div
        className="amh-marquee"
        style={{
          height: `${trackHeightVh}vh`,
        }}
        onMouseEnter={() => pauseOnHover && setIsHover(true)}
        onMouseLeave={() => pauseOnHover && setIsHover(false)}
      >
        <motion.div
          className="amh-marquee__track"
          initial={{ x: startAtHalf ? (direction === "left" ? "0%" : "-50%") : (direction === "left" ? "-50%" : "0%") }}
          animate={animateTrack}
          transition={{
            ease: "linear",
            duration,
            repeat: effectiveRepeat,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div key={`${index}-${src}`} className="amh-card" aria-hidden={index >= images.length}>
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="amh-card__img"
                loading={index < eagerCount ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index < eagerCount ? "high" : "auto"}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedMarqueeHero;
