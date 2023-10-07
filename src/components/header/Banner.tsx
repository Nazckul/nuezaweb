import { motion } from "framer-motion"

const Banner = () => {
    return (
        <header className="section__container header__container">
            <div className="header__image__container">
                <div className="header__content">
                    <motion.h1 className="mx-2 lg:text-6xl text-4xl "
                        animate={{ x: 20 }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 }
                          }}>NuezaWeb</motion.h1>
                    <motion.p className="mx-3 text-xl uppercase" 
                    animate={{ x: 20 }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1.1 }
                          }}>Desarrollo y diseño de tu futuro Sitio Web</motion.p>
                </div>
            </div>
        </header>
    )
}

export default Banner