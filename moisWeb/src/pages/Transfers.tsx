import Carousel from "../components/Carrousel";
import { FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Navbar1 } from "../components/Navbar/Navbar1";
import { Footer } from "../components/Footer";
import AnimatedMarqueeHero from "../components/AnimatedMarqueeHero";
import "./transfer.css";
import SplitText from "../components/SplitText";
import { useMediaQuery } from "../hooks/useMediaQuery";

import img1 from "../assets/images/chichenitza1.webp";
import img2 from "../assets/images/coba1.avif";
import img3 from "../assets/images/cancun1.jpg"
import img4 from "../assets/images/cancun2.jpg"
import img5 from "../assets/images/holbox1.jpg"
import img6 from "../assets/images/riolagartos1.jpg"
import img7 from "../assets/images/puertocancun1.avif"


import airportImage from "../assets/images/aeropuerto1.jpeg"
import openServiceImage from "../assets/images/suburban1.webp"
import hotelToHotelImage from "../assets/images/sprinter1.jpg"

export default function Transfers() {
    const navigate = useNavigate();
    const isSm = useMediaQuery("(max-width: 480px)");
    const isMd = useMediaQuery("(max-width: 800px)");

    const baseWidth = isSm ? 340 : isMd ? 420 : 650; // ajusta a tus cortes
    return (
        <div>
            <Navbar1 />
            <AnimatedMarqueeHero
                tagline="Conoce la Riviera Maya"
                title="¿A donde te llevamos?"
                description="Elige tu transfer perfecto"
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

            <div className="transfer-text-container">
                <SplitText
                    text="En Mois Travel, te ofrecemos diferentes maneras de viajar, de tal manera que tengas la mejor experiencia desde que aterrizas, hasta que te despides."
                    className="transfer-text"
                    delay={100}
                    duration={0.9}
                    ease="power3.out"
                    splitType="lines"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>

            <div className="transfers-container">
                <Carousel
                    baseWidth={baseWidth}
                    items={[
                        {
                            id: 1,
                            title: 'Airport Transfer',
                            description: 'Comienza tu viaje con total comodidad. Nuestros traslados desde y hacia el aeropuerto te garantizan puntualidad, seguridad y un servicio confiable desde el momento en que aterrizas o te diriges a tu vuelo',
                            icon: <FiLayers className="carousel-icon" />,
                            imageUrl: airportImage,
                            slug: 'airport-transfer'
                        },
                        {
                            id: 2,
                            title: 'Hotel to Hotel Transfer',
                            description: 'Cambia de alojamiento con completa tranquilidad. Te trasladamos de un hotel a otro de manera rápida, segura y confiable, sin preocuparte por el equipaje o la ruta.',
                            icon: <FiLayers className="carousel-icon" />,
                            imageUrl: hotelToHotelImage,
                            slug: 'hotel-to-hotel-transfer'
                        },
                        {
                            id: 3,
                            title: 'Open Transportation Service',
                            description: 'Disfruta de un transporte totalmente flexible. Nuestro servicio abierto te permite disponer del vehículo por horas o días, con la libertad de elegir tus propios destinos y horarios.',
                            icon: <FiLayers className="carousel-icon" />,
                            imageUrl: openServiceImage,
                            slug: 'open-transportation-service'
                        },
                    ]}
                    onViewMore={(slug) => navigate(`/tours/${slug}`)}
                />
            </div>
            <Footer />
        </div>
    )
}