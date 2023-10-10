import scrollIcon from "../../assets/scroll-down.png"
import { motion } from 'framer-motion';

const ScrollArrow = () => {
    const scrollToSecondSection = () => {
        const cardServices = document.querySelector('#card-services');
        if (cardServices) {
          cardServices.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

  return (
    <motion.div
      className="scroll-arrow w-[65px]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToSecondSection}
    >
      <img src={scrollIcon} alt="scroll down icono" />
    </motion.div>
  );
};

export default ScrollArrow;
