import CardServices from "../../components/body/CardServices"
import Jumbotron from "../../components/body/Jumbotron"
import SocialMedia from "../../components/body/SocialMedia"
import Banner from "../../components/header/Banner"
import { motion } from "framer-motion"

const Home = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner />
        <CardServices />
        <Jumbotron />
        <SocialMedia />
      </motion.div>
  )
}

export default Home