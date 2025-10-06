
import AnimatedMarqueeHero from "../components/AnimatedMarqueeHero";
import { Navbar1 } from "../components/Navbar/Navbar1";
import "./inicio.css";
import { PropertyCard } from "../components/property-card";
import SplitText from "../components/SplitText";


import { motion } from "framer-motion";

// imagenes
import img1 from "../assets/images/chichenitza1.webp";
import img2 from "../assets/images/coba1.avif";
import img3 from "../assets/images/cancun1.jpg"
import img4 from "../assets/images/cancun2.jpg"
import img5 from "../assets/images/holbox1.jpg"
import img6 from "../assets/images/riolagartos1.jpg"
import img7 from "../assets/images/puertocancun1.avif"
import img8 from "../assets/images/tiburonballenatour1.jpeg"
import img9 from "../assets/images/islamujeres1.webp"
import img10 from "../assets/images/museomusa1.webp"
import img11 from "../assets/images/valladolid1.jpg"
import turista from "../assets/images/turista1.webp"

import LogoLoop from "../components/LogoLoop";
import { Footer } from "../components/Footer";

// logos
import xcaretlogo from "../assets/images/xcaretlogo.webp"
import dolphinlogo from "../assets/images/dolphindiscoverylogo.webp"
import inahlogo from "../assets/images/INAHlogo.webp"
import visitmexico from "../assets/images/visitmexicologo.webp"

import SmartForm, { type SmartField } from "../components/SmartForm";

const imageLogos = [
    { src: xcaretlogo, alt: "Company 1", href: "#" },
    { src: dolphinlogo, alt: "Company 2", href: "#" },
    { src: inahlogo, alt: "Company 3", href: "#" },
    { src: visitmexico, alt: "Company 4", href: "#" },
];

const fields: SmartField[] = [
    { id: "destination", label: "Destination:", type: "text", placeholder: "type your destination", required: true },
    { id: "pax", label: "Pax:", type: "number", placeholder: "pax number", min: 1, required: true },
    { id: "email", label: "Email:", type: "email", placeholder: "@email.com", required: true },
    { id: "arrival", label: "Arrival Date:", type: "date", placeholder: "dd/mm/aaaa", showDatePlaceholder: true, required: true },
    { id: "departure", label: "Departure Date:", type: "date", placeholder: "dd/mm/aaaa", showDatePlaceholder: true, required: true },
];

export default function Inicio() {
    return (
        <div>
            <Navbar1 />
            <AnimatedMarqueeHero
                tagline="Bienvenido a Mois Travel"
                title="Descubre la belleza de la Quintana Roo"
                description="Explora las playas y estructuras arqueológicas"
                images={[
                    img1,
                    img2,
                    img3,
                    img4,
                    img5,
                    img6,
                    img7,
                ]}
            />

            <div className="form-container">
                <div className="form-title">
                    <SplitText
                        text="Transportación"
                        className="section-text"
                        delay={100}
                        duration={0.9}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </div>
                <div className="form-content">
                    <motion.img
                        src={turista}
                        alt="Turista"
                        className="turista"
                        initial={{ y: 0, rotate: 0 }}
                        animate={{
                            y: [0, -10, 0, 10, 0],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                    <div className="form">
                        <SmartForm
                            title="Contactanos"
                            fields={fields}
                            submitLabel="Enviar"
                            onValidate={(values) => {
                                const errs: Record<string, string> = {};
                                if (values.arrival && values.departure) {
                                    // Comparar YYYY-MM-DD
                                    if (values.departure < values.arrival) {
                                        errs.departure = "La salida no puede ser anterior a la llegada.";
                                    }
                                }
                                return errs;
                            }}
                            onSubmit={(values) => {
                                console.log("Submitted:", values);
                                alert("Enviado ✅");
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="tours">
                <div className="line-conatiner">
                    <div className="line"></div>
                </div>
                <SplitText
                    text="Tours más Populares"
                    className="section-text"
                    delay={100}
                    duration={0.9}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <div className="property-grid">
                    <PropertyCard
                        imageUrl={img8}
                        name="Tiburon Ballena"
                        location="Cancún, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                    <PropertyCard
                        imageUrl={img4}
                        name="Cancun City Tour"
                        location="Cancún, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                    <PropertyCard
                        imageUrl={img9}
                        name="Isla Mujeres"
                        location="Isla Mujeres, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                    <PropertyCard
                        imageUrl={img1}
                        name="3x1 Chichen Itza, Coba & Cenote"
                        location="Cancún, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                    <PropertyCard
                        imageUrl={img11}
                        name="4x1 Chichen Itza, Cenote, Valladolid & Mayapan"
                        location="Cancún, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                    <PropertyCard
                        imageUrl={img10}
                        name="Tour Catamarán Museo Musa, Isla Mujeres"
                        location="Cancún, MX"
                        price={180}
                        rating={4.8}
                        reviews={234}
                        onViewMore={() => console.log("Ver más clic")}
                    />
                </div>
            </div>

            <div className="tours">
                <div className="line-conatiner">
                    <div className="line"></div>
                </div>
                <SplitText
                    text="Alianzas"
                    className="section-text"
                    delay={100}
                    duration={0.9}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />

                <div className="logo-loop-container">
                    <LogoLoop
                        logos={imageLogos}
                        speed={40}
                        direction="left"
                        logoHeight={70}
                        gap={50}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#fff"
                        ariaLabel="Technology partners"
                    />
                </div>

            </div>

            <Footer />
        </div>
    )
}
