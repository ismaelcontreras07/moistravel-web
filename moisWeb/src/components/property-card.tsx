// components/ui/property-card.tsx
"use client";

import "./property-card.css";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

// 1) Toma el tipo real de props de motion.div
type MotionDivProps = React.ComponentPropsWithoutRef<typeof motion.div>;

// 2) Define tus props y mézclalas con las de motion.div
type PropertyCardProps = {
  imageUrl: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  imageAlt?: string;
  onViewMore?: () => void;
  className?: string;
} & Omit<MotionDivProps, "children">; // evita duplicar children

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// 3) Usa el tipo de ref real del motion.div
const PropertyCard = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  PropertyCardProps
>(
  (
    {
      className = "",
      imageUrl,
      name,
      location,
      price,
      rating,
      reviews,
      imageAlt = "Property Image",
      onViewMore,
      ...props // ← aquí vendrán whileHover, onDrag, etc. de Framer sin chocar
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={`pcard ${className}`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.01, y: -5 }}
        {...props}
      >
        <div className="pcard__media">
          <img src={imageUrl} alt={imageAlt} className="pcard__img" loading="lazy" decoding="async" />
        </div>

        <div className="pcard__body">
          <div className="pcard__row">
            <motion.h3 variants={textVariants} initial="hidden" animate="visible" className="pcard__title">
              {name}
            </motion.h3>
            <motion.p variants={textVariants} initial="hidden" animate="visible" style={{ transitionDelay: "0.1s" }} className="pcard__price">
              ${price}<span className="pcard__price-note"> /Night</span>
            </motion.p>
          </div>

          <div className="pcard__row pcard__row--meta">
            <motion.div variants={textVariants} initial="hidden" animate="visible" style={{ transitionDelay: "0.2s" }} className="pcard__meta">
              <svg className="pcard__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
              </svg>
              <span>{location}</span>
            </motion.div>

            <motion.div variants={textVariants} initial="hidden" animate="visible" style={{ transitionDelay: "0.3s" }} className="pcard__meta">
              <svg className="pcard__icon pcard__icon--star" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 17.27 6.18 3.73-1.64-7.03L21.5 9.5l-7.19-.62L12 2 9.69 8.88 2.5 9.5l4.96 4.47L5.82 21z"/>
              </svg>
              <span className="pcard__rating">{rating}</span>
              <span>({reviews.toLocaleString()} Reviews)</span>
            </motion.div>
          </div>

          <motion.button
            type="button"
            className="pcard__button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onViewMore}
          >
            Ver más
          </motion.button>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";
export { PropertyCard };
