import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect";
import ScrollArrow from "../body/ScrollDownButton";


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

                    <motion.div className="mx-3 text-xl text-white"
                        animate={{ x: 20 }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1.1 }
                        }}>
                        <TypewriterComponent

                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Desarrollo")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("y Diseño de")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("tu futuro sitio Web.")
                                    .start();
                            }}
                        />
                    </motion.div>
                </div>
                <div className="flex justify-center items-center">
                    <ScrollArrow />
                </div>
            </div>
        </header>
    )
}

export default Banner