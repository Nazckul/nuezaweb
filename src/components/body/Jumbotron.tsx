import { NavLink } from "react-router-dom"


const Jumbotron = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Esto llevará la página al principio
  };
  return (
    <section className="section__container">
      <div className="reward__container">
        <p>Tu página web a un solo paso</p>
        <h4 className="text-2xl lg:text-4xl">Sumá tu negocio al <span className="text-indigo-600">cambio tecnológico</span> y dale la visibilidad que se merece</h4>
        <NavLink 
          className="text-gradient"
          to="/contact"
          onClick={scrollToTop}
          >
        <button className="reward__btn">Hablemos</button>
        </NavLink>
      </div>
    </section>
  )
}

export default Jumbotron