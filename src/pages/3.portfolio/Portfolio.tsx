import BackButton from "../../components/body/BackButton"
import Cards from "../../components/body/Cards"
import { motion } from "framer-motion"
import SocialMedia from "../../components/body/SocialMedia"


const Portfolio = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Cards />
        <BackButton />
        <SocialMedia />
      </motion.div>
  )
}

export default Portfolio