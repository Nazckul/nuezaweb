import BackButton from "../../components/body/BackButton"
import Cards from "../../components/body/Cards"
import { motion } from "framer-motion"


const Portfolio = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Cards />
        <BackButton />
      </motion.div>
  )
}

export default Portfolio