
import AnimatedMarqueeHero from "../components/AnimatedMarqueeHero";
import { Navbar1 } from "../components/Navbar/Navbar1";
import { FiLayers } from "react-icons/fi";
import "./tours.css";

import ImmersiveScrollGallery from "../components/ImmersiveScrollGallery";
import Carousel from "../components/Carrousel";

// imagenes
import img1 from "../assets/images/chichenitza1.webp";
import img2 from "../assets/images/coba1.avif";
import img3 from "../assets/images/xplorpark1.jpg"
import img4 from "../assets/images/cancun2.jpg"
import img5 from "../assets/images/holbox1.jpg"
import img6 from "../assets/images/riolagartos1.jpg"
import img7 from "../assets/images/xcaretpark1.jpg"
import img8 from "../assets/images/dolphindiscovery1.jpg"
import img9 from "../assets/images/venturapark1.jpg"
import img10 from "../assets/images/selvatica1.jpg"
import img11 from "../assets/images/kantunchi1.webp"
import img12 from "../assets/images/casatortuga1.jpeg"
import img13 from "../assets/images/kukulcannights1.jpg"
import img14 from "../assets/images/tulum1.jpg"
import img15 from "../assets/images/ekbalam1.jpg"
import img16 from "../assets/images/museomusa2.webp"
import img17 from "../assets/images/puertocancun1.avif"
import img18 from "../assets/images/holbox2.jpg"
import img19 from "../assets/images/coloradas1.jpg"
import img20 from "../assets/images/tulum2.jpg"
import img21 from "../assets/images/museomusa1.webp"
import img22 from "../assets/images/elfarito1.jpg"
import img23 from "../assets/images/grutaventura1.jpg"
import img24 from "../assets/images/tiburonballenatour1.jpeg"
import img25 from "../assets/images/valladolid1.jpg"
import img26 from "../assets/images/islamujeres1.webp"

import SplitText from "../components/SplitText";

import { Footer } from "../components/Footer";

export default function Inicio() {
    return (
        <div>
            <Navbar1 />
            <AnimatedMarqueeHero
                tagline="Explora, disfruta y relájate"
                title="Con los mejores Tours"
                description="Privados o en grupo"
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

            <div className="inmersive-container">
                <SplitText
                    text="Busca el ideal para ti"
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
                <ImmersiveScrollGallery />
            </div>

            <div className="groupal-section">
                <div className="line-conatiner">
                    <div className="line"></div>
                </div>
                <SplitText
                    text="Tours Grupales"
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
                <div className="carousels-content">
                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Xcaret Group',
                                description: 'Conoce todos los parques de grupo Xcaret. Xelha, Xavage, Xplor, Xenotes, Xoximilco, Xenses, Xichen.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img3
                            },
                            {
                                id: 2,
                                title: 'Dolphin & Garrafon',
                                description: 'Enamorate de los delfines en Dolphin Discovery y el parque Garrafón.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img8
                            },
                            {
                                id: 3,
                                title: 'Ventura Park',
                                description: 'El parque perfecto para que toda la familia disfrute de un día lleno de actividades en Cancún.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img9
                            },
                            {
                                id: 4,
                                title: 'Selvatica',
                                description: 'Aquí podrás conocer el mejor tour de tirolesas en Cancún y la Riviera Maya rodeado de la naturaleza.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img10
                            },
                            {
                                id: 5,
                                title: 'Kantun-Chi',
                                description: 'Maravíllate con sus majestuosas aguas cristalinas y sumérgete en la tranquilidad y el misterio de este mágico lugar.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img11
                            },
                            {
                                id: 6,
                                title: 'Casa Tortuga',
                                description: 'Los Cenotes de Casa Tortuga son ideales para nadar, practicar snorkel o bucear desde las alturas.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img12
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />

                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Tour Tulum 5x1',
                                description: 'Conoce estos destinos: Tulum - Coba - Cenote - Aldea Maya & 5th Avenue Playa del Carmen',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img14
                            },
                            {
                                id: 2,
                                title: 'Kulkulcan Nights',
                                description: 'Ten la oportunidad de maravillarte con la maravilla del mundo en un evento nocturno con Kulkulcan Nights.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img13
                            },
                            {
                                id: 3,
                                title: 'Ek Balam & Cenote Hubiku',
                                description: 'Ten la oportunidad de recorrer la zona arqueológica de Ek Balam y conocer el Cenote Hubiku.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img15
                            },
                            {
                                id: 4,
                                title: 'Tulum & Casa Tortuga',
                                description: 'Recorre la zona arqueológica de Tulum en un maravilloso tour y disfruta de Casa Tortuga.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img12
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />

                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Museo Musa e Isla Mujeres',
                                description: 'Viaja en Catamarán, conoce el museo subacuatico Musa y recorre por completo Isla Mujeres.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img16
                            },
                            {
                                id: 2,
                                title: 'Cancún City Tour',
                                description: 'Recorre la ciudad de Cancún con nuestro fantástico tour con la calidad de Mois Travel.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img17
                            },
                            {
                                id: 3,
                                title: 'Holbox Plus & Cenote',
                                description: 'Enamorate de la belleza natural de Holbox Plus con sus playas y el encanto de los cenotes.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img18
                            },
                            {
                                id: 4,
                                title: 'Coloradas & Rio Lagarto ',
                                description: 'El lugar en donde es posible ver agua rosa, playas de arena dorada y los hermosos flamencos.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img19
                            },
                            {
                                id: 5,
                                title: 'Casa Tortuga & Tulum',
                                description: 'Recorre la zona arqueológica de Tulum en un maravilloso tour y disfruta de Casa Tortuga.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img20
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />
                </div>
            </div>

            <div className="privates-section" style={{ marginBottom: '3rem' }}>
                <div className="line-conatiner">
                    <div className="line"></div>
                </div>
                <SplitText
                    text="Tours Privados"
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
                <div className="carousels-content">
                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Tour Catamarán Museo Musa, Isla Mujeres',
                                description: 'Navega en catamarán hacia Isla Mujeres, disfruta barra libre, snorkel en el MUSA y tiempo libre para explorar la isla y sus playas.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img21
                            },
                            {
                                id: 2,
                                title: 'Snorkel Arrecife El Farito, Arrecife Manchones & Musa',
                                description: 'Haz snorkel en El Farito, Manchones y el MUSA, y descubre corales, peces y esculturas bajo el mar.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img22
                            },
                            {
                                id: 3,
                                title: 'Gruta Ventura',
                                description: 'Adéntrate en la Gruta Ventura y vive una aventura natural única explorando formaciones rocosas, estalactitas y estalagmitas. Disfruta un recorrido lleno de historia, misterio y belleza subterránea.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img23
                            },
                            {
                                id: 4,
                                title: 'Conoce al impresionante Tiburon Ballena',
                                description: 'Vive una experiencia única nadando junto al majestuoso tiburón ballena, el pez más grande del mundo. Admira su imponente tamaño y tranquilidad en su hábitat natural.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img24
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />

                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Tour 3x1 Tulum, Coba & Cenote',
                                description: 'Explora las antiguas ciudades mayas de Tulum y Cobá, conoce su historia y arquitectura, y refréscate en las aguas cristalinas de un hermoso cenote.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img14
                            },
                            {
                                id: 2,
                                title: 'Tour 3x1 Chichen Itza, Coba & Cenote',
                                description: 'Recorre las majestuosas zonas arqueológicas mayas de Chichén Itzá y Cobá, conoce su historia y maravíllate con su arquitectura. Finaliza el día nadando en las refrescantes aguas de un espectacular cenote. ',
                                icon: <FiLayers className="carousel-icon"    />,
                                imageUrl: img2
                            },
                            {
                                id: 3,
                                title: 'Tour 4x1 Chichen Itza, Cenote, Valladolid & Mayapan',
                                description: 'Explora Chichén Itzá, Mayapán, un cenote y la ciudad colonial de Valladolid en un tour cultural y natural completo.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img25
                            },
                            {
                                id: 4,
                                title: 'Tulum Full Day',
                                description: 'Disfruta un día completo en Tulum, recorriendo sus ruinas mayas, sus playas paradisíacas y explorando la cultura y belleza natural de este icónico destino.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img20
                            },
                            {
                                id: 5,
                                title: 'Tour Ek Balam, Rio Lagartos & Las Coloradas',
                                description: 'Descubre Ek Balam, admira los flamencos y la naturaleza en Río Lagartos y maravíllate con las salinas rosadas de Las Coloradas en un tour lleno de cultura y paisajes únicos.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img19
                            },
                            {
                                id: 6,
                                title: 'Mega Tour Tulum, Coba & Chichen Itza',
                                description: 'Vive el Mega Tour visitando Tulum, Cobá y Chichén Itzá. Explora impresionantes ruinas mayas y sumérgete en la historia y cultura de la Riviera Maya en un solo día.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img1
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />

                    <Carousel
                        baseWidth={340}
                        items={[
                            {
                                id: 1,
                                title: 'Descubre Isla Mujeres',
                                description: 'Explora Isla Mujeres, disfruta sus playas de arena blanca, aguas cristalinas y encantadores rincones, ideal para relajarte y vivir el Caribe mexicano al máximo.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img26
                            },
                            {
                                id: 2,
                                title: 'Cancún City Tour',
                                description: 'Recorre Cancún y descubre sus principales atractivos, desde playas y centros comerciales hasta su vibrante cultura y vida urbana, todo en un divertido City Tour.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img17
                            },
                            {
                                id: 3,
                                title: 'Tour Catamaran Museo Musa, Isla Mujeres',
                                description: 'Navega en catamarán hacia Isla Mujeres, disfruta barra libre, haz snorkel en el MUSA y relájate explorando la isla y sus playas.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img21
                            },
                            {
                                id: 4,
                                title: 'Arrecife El Farito, Arrecife Manchones & Musa',
                                description: 'Haz snorkel en El Farito, Manchones y el MUSA, y descubre corales, peces tropicales y esculturas bajo el mar.',
                                icon: <FiLayers className="carousel-icon" />,
                                imageUrl: img22
                            },
                        ]}
                        onViewMore={(item) => {
                            // aquí navegas con react-router-dom, por ejemplo:
                            // navigate(`/tours/${item.id}`);
                            alert(`Ver más: ${item.title}`);
                        }}
                    />
                </div>
            </div>



            <Footer />
        </div>
    )
}
