import wsp from "../../assets/wsp.webp"
import lkd from "../../assets/linkedin.png"
import email from "../../assets/email.png"




const SocialMedia = () => {

  return (
    <section>

      <div className="flex justify-center items-center my-10">
        {/* Agrega aquí tus iconos de redes sociales */}
        <a href="https://api.whatsapp.com/send?phone=5492915051375&text=Buenas!%20Quiero%20asesorarme%20sobre%20Nueza%20Web%20" target="_blank" rel="noreferrer" className="mx-2"><img src={wsp} alt="icono de wsp" className="w-[80px]" /></a>
        <a href="mailto:stefanocopreni@hotmail.com?Subject=Me%20interesa%20obtener%20un%20sitio%20web" target="_blank" rel="noreferrer" className="mx-2"><img src={email} alt="icono de email" className="w-[60px] mx-5"/></a>
        <a href="https://www.linkedin.com/in/stefano-copreni-2786871a2/" target="_blank" className="mx-2"><img src={lkd} alt="icono de linkedin" className="w-[60px]" /></a>

      </div>

    </section>

  );
}

export default SocialMedia