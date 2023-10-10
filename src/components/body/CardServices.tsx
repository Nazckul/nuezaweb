import { NavLink } from 'react-router-dom'
import client1 from '../../assets/client-1.jpg'
import client2 from '../../assets/client-2.jpg'
import client3 from '../../assets/client-3.jpg'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


const CardServices = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Esto llevará la página al principio
  };

  // Control de animación para las cards
  const cardAnimation = useAnimation();

  // Umbral de desplazamiento para activar las animaciones
  const scrollThreshold = 200; // Puedes ajustar esto según tus necesidades

  // Función para manejar el scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > scrollThreshold) {
      cardAnimation.start({ opacity: 1, y: 0, scale: 1 });
    }
  };

  useEffect(() => {
    // Agregar un event listener para el scroll
    window.addEventListener("scroll", handleScroll);
    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="client" id="card-services">
      <div className="section__container client__container">
        <h2 className="section__header mt-20">¿En qué te puedo ayudar?</h2>
        <div className="client__grid">
          <motion.div
            className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={cardAnimation} // Aplicar animación controlada por cardAnimation
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img src={client1} alt="icono de Wev Developer and SEO Engineer" />
            <p>
              Construcción de tu <b>primera página web</b>. Integración y mejoramiento de SEO para un <span className='text-green-700 font-bold'>óptimo posicionamiento</span> en los principales buscadores.
            </p>
            <div className='flex flex-1 justify-center mt-4'>
              <NavLink to="/portfolio" onClick={scrollToTop}>
                <button className="px-6 py-2 font-medium bg-emerald-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Conoce Mis Proyectos
                </button>
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={cardAnimation} // Aplicar animación controlada por cardAnimation
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img src={client2} alt="icono de diseño web y adaptabilidad" />
            <p>
              Diseño de Webs y Apps para que el usuario que visite tu plataforma tenga una <span className='text-green-700 font-bold'>experiencia favorable</span> y decida regresar.
               <b> Interfaz adaptable</b> a cualquier dispositivo, ya sea Celular, PC, Tablet o TV.
            </p>
          </motion.div>
          <motion.div
            className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={cardAnimation} // Aplicar animación controlada por cardAnimation
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img src={client3} alt="icono de soporte y mantenimiento web" />
            <p>
              Mantenimiento 24/7 y soporte constante. <br />
              <span className='text-blue-700 font-semibold'>  ¿Ya contás con una web? </span> <br />
              <span className='text-green-700 font-medium underline underline-offset-2'> Vamos a optimizarla. </span>
            </p>

            <div className='flex flex-1 justify-center mt-4'>
              <NavLink to="/services" onClick={scrollToTop}>
                <button className="px-6 py-2 font-medium bg-emerald-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Acerca de mi
                </button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}

export default CardServices