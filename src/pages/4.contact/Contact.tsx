import { motion } from "framer-motion"
import wspSvg from "../../assets/wspSvg.svg"
import lkdSvg from "../../assets/lkdSvg.svg"
import emailSvg from "../../assets/emailSvg.svg"
import Jumbotron from "../../components/body/Jumbotron"
import BackButton from "../../components/body/BackButton"

const Contact = () => {
  return (
    <section className="client">
      <div className="section__container client__container">
        <h2 className="section__header">Contacto</h2>
        <div className="client__grid lg:mb-[40px] ">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <div
              className="bg-gradient-to-br from-green-900 via-green-600 to-green-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-5">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-gray-200">Hablemos en</span>
                  <br />
                  <span className="text-gray-200 text-4xl font-semibold">WhatsApp</span>
                </div>
                <a href="https://api.whatsapp.com/send?phone=5492915051375&text=Buenas!%20Quiero%20asesorarme%20sobre%20Nueza%20Web%20" target="_blank" rel="noreferrer"
                  className="text-black bg-white hover:bg-gray-300 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                  <span>Ir al chat</span>

                </a>
              </div>
              <div>
                <img src={wspSvg } alt="logo Whatsapp" className="w-[80px]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <div
              className="bg-gradient-to-br from-red-600 via-stone-400 to-stone-500 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-5">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-gray-200">Contactame por</span>
                  <br />
                  <span className="text-gray-200 text-4xl font-semibold">Email</span>
                </div>
                <a href="mailto:stefanocopreni@hotmail.com?Subject=Me%20interesa%20obtener%20un%20sitio%20web" target="_blank" rel="noreferrer"
                  className="text-black bg-white hover:bg-gray-300 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                  <span>Enviar correo </span>
                </a>
              </div>
              <div>
                <img src={ emailSvg } alt="logo de correo electrónico" className="w-[80px]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Escala aumentada al pasar el mouse
            transition={{ duration: 0.5 }}>
            <div
              className="bg-gradient-to-br from-blue-400 via-slate-700 to-neutral-200 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-5">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-gray-200">Sigueme en</span>
                  <br />
                  <span className="text-gray-200 text-4xl font-semibold">LinkedIn</span>
                </div>
                <a href="https://www.linkedin.com/in/stefano-copreni-2786871a2/" target="_blank" rel="noreferrer"
                  className="text-black bg-white hover:bg-gray-300 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                  <span>Ver perfil</span>

                </a>
              </div>
              <div>
                <img src={ lkdSvg } alt="logo LinkedIn" className="w-[80px]" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      <Jumbotron />
      <BackButton />
    </section>

  )
}

export default Contact