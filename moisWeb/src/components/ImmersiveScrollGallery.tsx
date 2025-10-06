"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import "./immersive-scroll-gallery.css";
import img1 from "../assets/images/tiburonballenatour1.jpeg";
import img2 from "../assets/images/xelhapark1.jpg";
import img3 from "../assets/images/xcaretpark2.jpg";
import img4 from "../assets/images/cancun2.jpg";
import img5 from "../assets/images/holbox1.jpg";
import img6 from "../assets/images/riolagartos1.jpg"


// Types
interface IPicture {
    src: string;
    scale: MotionValue<number> | null;
}
interface ImmersiveScrollGalleryProps {
    images?: IPicture[];
    className?: string;
}

// Defaults
const DEFAULT_IMAGES: IPicture[] = [
    { src: img1, scale: null },
    { src: img2, scale: null },
    { src: img3, scale: null },
    { src: img4, scale: null },
    { src: img5, scale: null },
    { src: img6, scale: null },
];

// Clases por “slot” (equivalente a tus IMAGE_STYLES con Tailwind)
const SLOT_CLASSES = [
    "isg__slot isg__slot--0",
    "isg__slot isg__slot--1",
    "isg__slot isg__slot--2",
    "isg__slot isg__slot--3",
    "isg__slot isg__slot--4",
    "isg__slot isg__slot--5",
    "isg__slot isg__slot--6",
];

const ImmersiveScrollGallery: React.FC<ImmersiveScrollGalleryProps> = ({
    images = DEFAULT_IMAGES,
    className = "",
}) => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const contentScale = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

    // Mapea escalas por índice (como en tu array)
    const pictures = images.map((img, index) => ({
        ...img,
        scale: [scale4, scale5, scale6, scale5, scale6, scale8, scale9][index % 7],
    }));

    return (
        <div ref={container} className={`isg ${className}`}>
            <div className="isg__sticky">
                {/* Capas con zoom */}
                {pictures.map(({ src, scale }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale: scale as MotionValue<number>, opacity: opacityImage }}
                        className="isg__layer"
                    >
                        <div className={SLOT_CLASSES[index % SLOT_CLASSES.length]}>
                            <img src={src} alt={`Zoom image ${index + 1}`} className="isg__img" />
                        </div>
                    </motion.div>
                ))}

                {/* Contenido final */}
                <motion.div
                    style={{ opacity: opacitySection2, scale: contentScale }}
                    className="isg__content"
                >
                    <h1 className="isg__heading">
                        En Mois Travel, te llevamos a vivir las experiencias más increíbles de la Riviera Maya: desde emocionantes aventuras acuáticas en los cenotes y el mar turquesa, hasta recorridos llenos de historia en las majestuosas zonas arqueológicas mayas.
                        <br /> <br />Más que un viaje, te ofrecemos momentos que recordarás toda la vida.
                        Con Mois Travel, cada tour está diseñado para que disfrutes al máximo, con seguridad, confort y la mejor atención personalizada.
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default ImmersiveScrollGallery;
