import hotel1 from "../../assets/terra.jpg"
import hotel2 from "../../assets/tierraps.jpg"
import hotel3 from "../../assets/hotelero.jpg"
import hotel4 from "../../assets/cabure.jpg"
import hotel5 from "../../assets/auditest.jpg"
import hotel6 from "../../assets/tyt.jpg"
import hotel7 from "../../assets/conteba.jpg"
import hotel8 from "../../assets/cerve.jpg"

import { motion } from "framer-motion"

const Cards = () => {
    return (
        <section className="section__container popular__container">
            <h2 className="section__header">Mis últimos proyectos</h2>
            <div className="popular__grid">
                <motion.div className="imagen de terranostrasierra.com"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel1} alt="popular hotel" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>TERRA NOSTRA SIERRA</h4>
                        </div>
                        <p className="mb-3">Simple Landing Page desarrollada para cabaña de vacaciones en Sierra de la Ventana, Argentina.</p>
                        <a href="https://terranostrasierra.com/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>
                    </div>

                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel2} alt="imagen de tierraps.com" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>Tierra Productividad Sustentable</h4>
                        </div>
                        <p className="mb-3">Sitio Web desarrollado desde cero con React.js y TailwindCSS para una Consultora Ambiental.</p>
                        <a href="https://tierraps.com/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel8} alt="imagen de landing page de nuezaweb.com" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>Landing Page Cervecería</h4>
                        </div>
                        <p className="mb-3">Construcción de un boceto de Landing Page en Next.js para cervecería artesanal.</p>
                        <a href="https://next-beer-seven.vercel.app/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel3} alt="imagen de martinolhaberry.com.ar" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>Landing Page Consultor Hotelero</h4>
                        </div>
                        <p className="mb-3">Maquetación de Landing Page a partir de un diseño otorgado por la Agencia Audiovisual <a href="https://cuboestudio.com.ar/" className="text-red-700 hover:underline">CUBO</a>.</p>
                        <a href="http://www.martinolhaberry.com.ar/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel4} alt="imagen de caburegimnasiofotografico.com" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>Caburé Gimnasio Fotográfico</h4>
                        </div>
                        <p className="mb-3">Landing Page realizada con Bootstrap, funcional a la comunicación entre el Gimnasio Fotográfico y sus posibles nuevos estudiantes.</p>
                        <a href="http://caburegimnasiofotografico.com/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel5} alt="imagen de auditestarg.com" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>Auditest Argentina</h4>
                        </div>
                        <p className="mb-3">Maquetación de página Web a partir de un diseño otorgado por la <a href="http://agenciaforest.com/" className="text-red-700 hover:underline">Agencia Forest.</a></p>

                        <a href="http://www.auditestarg.com/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel6} alt="imagen de tyt-obrasyservicios.com.ar" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>T&T Obras y Servicios</h4>
                        </div>
                        <p className="mb-3">Maquetación de página Web a partir de un diseño otorgado por la <a href="http://agenciaforest.com/" className="text-red-700 hover:underline">Agencia Forest.</a></p>
                        <a href="http://www.tyt-obrasyservicios.com.ar/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>
                <motion.div className="popular__card"
                    initial={{ opacity: 0, y: 30, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
                    transition={{ duration: 0.5 }}>
                    <img src={hotel7} alt="imagen de contebaservicios.com.ar" />
                    <div className="popular__content">
                        <div className="popular__card__header">
                            <h4>CONTEBA Servicios</h4>
                        </div>
                        <p className="mb-3">Maquetación de página Web a partir de un diseño otorgado por la <a href="http://agenciaforest.com/" className="text-red-700 hover:underline">Agencia Forest.</a></p>
                        <a href="http://www.contebaservicios.com.ar/" target="_blank" className="hover:underline text-md  text-blue-500">Ir a web</a>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Cards