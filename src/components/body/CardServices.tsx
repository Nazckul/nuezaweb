import { NavLink } from 'react-router-dom'
import client1 from '../../assets/client-1.jpg'
import client2 from '../../assets/client-2.jpg'
import client3 from '../../assets/client-3.jpg'
import { motion } from "framer-motion"


const CardServices = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Esto llevará la página al principio
  };
  return (
    <section className="client">
      <div className="section__container client__container">
        <h2 className="section__header">¿En qué te puedo ayudar?</h2>
        <div className="client__grid">
          <motion.div className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <img src={client1} alt="icono de Wev Developer and SEO Engineer" />
            <p>
              Construcción de tu <b>primera página web</b>. Integración y mejoramiento de SEO para un <span className='text-green-700 font-bold'>óptimo posicionamiento</span> en los principales buscadores.
            </p>
            <div className='flex flex-1 justify-center mt-4'>
              <NavLink to="/portfolio" onClick={scrollToTop}>
                <button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span className='mr-2'>Conoce mis proyectos</span>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M8 1V0v1Zm4 0V0v1Zm2 4v1h1V5h-1ZM6 5H5v1h1V5Zm2-3h4V0H8v2Zm4 0a1 1 0 0 1 .707.293L14.121.879A3 3 0 0 0 12 0v2Zm.707.293A1 1 0 0 1 13 3h2a3 3 0 0 0-.879-2.121l-1.414 1.414ZM13 3v2h2V3h-2Zm1 1H6v2h8V4ZM7 5V3H5v2h2Zm0-2a1 1 0 0 1 .293-.707L5.879.879A3 3 0 0 0 5 3h2Zm.293-.707A1 1 0 0 1 8 2V0a3 3 0 0 0-2.121.879l1.414 1.414ZM2 6h16V4H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v12h2V6h-2Zm0 12v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V6H0v12h2ZM2 6V4a2 2 0 0 0-2 2h2Zm16.293 3.293C16.557 11.029 13.366 12 10 12c-3.366 0-6.557-.97-8.293-2.707L.293 10.707C2.557 12.971 6.366 14 10 14c3.634 0 7.444-1.03 9.707-3.293l-1.414-1.414ZM10 9v2a2 2 0 0 0 2-2h-2Zm0 0H8a2 2 0 0 0 2 2V9Zm0 0V7a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Z" />
                  </svg>
                </button>
              </NavLink>
            </div>
          </motion.div>
          <motion.div className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <img src={client2} alt="icono de diseño web y adaptabilidad" />
            <p>
              Diseño de Webs y Apps para que el usuario que visite tu plataforma tenga una <span className='text-green-700 font-bold'>experiencia favorable</span> y decida regresar.
              <br /> <b>Interfaz adaptable</b> a cualquier dispositivo, ya sea Celular, PC, Tablet o TV.
            </p>
          </motion.div>
          <motion.div className="client__card"
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <img src={client3} alt="icono de soporte y mantenimiento web" />
            <p>
              Mantenimiento 24/7 y soporte constante. <br />
              <span className='text-blue-700 font-semibold'>  ¿Ya contás con una web? </span> <br />
              <span className='text-green-700 font-medium underline underline-offset-2'> Vamos a optimizarla. </span>
            </p>

            <div className='flex flex-1 justify-center mt-4'>
              <NavLink to="/services" onClick={scrollToTop}>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded inline-flex items-center">
                  <span className='mr-2'>Acerca de mi</span>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>
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