import { CloudArrowUpIcon, LockClosedIcon, ShieldCheckIcon} from '@heroicons/react/20/solid'
import imageGithub from '../../assets/imageGithub.jpg'
import Jumbotron from '../../components/body/Jumbotron'
import BackButton from '../../components/body/BackButton'
import SocialMedia from '../../components/body/SocialMedia'

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">¿Quién soy?</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acerca de mi</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              ¡Hola! Mi nombre es Stefano, soy <b>desarrollador web</b> con experiencia en el
              diseño y desarrollo de <span className='text-green-700 font-semibold'>sitios web, aplicaciones y videojuegos</span>. Con una formación enfocada especialmente a
              la <i>maquetación web</i>, buscando siempre crear interfaces
              atractivas y
              funcionales que mejoren la <b>experiencia del usuario</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={imageGithub}
            alt="imagen del perfil de GitHub de Nazckul - Stefano Copreni"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              A lo largo de mis <span className='font-semibold underline underline-offset-2'>5 años de experiencia</span> en el mundo del desarrollo web, he trabajado con una amplia
              variedad de <span className='text-indigo-600 font-semibold'>tecnologías y herramientas</span>, entre las que se incluyen HTML, CSS, Bootstrap, Tailwind
              CSS,
              Javascript, Typescript, React.js, Next.js, Astro, Vite.js, Material-UI, CoreUI, PHP, Python y Java. <br /> Además, he adquirido <span className='text-indigo-600 font-semibold'>habilidades</span> en
              el
              manejo de herramientas como Adobe Photoshop, y en el ámbito del marketing digital, con Google Marketing
              Platform.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Correcto despliegue de la plataforma a la World Wide Web.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Me encargo de seleccionar tu dominio, hosting y certificar la seguridad de tu sitio.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Testing.</strong> Checkeo final de errores y validación de buen funcionamiento.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Mi <span className='text-green-700 font-semibold'>objetivo como desarrollador</span> es seguir aprendiendo y
              creciendo en este apasionante mundo,
              siempre
              buscando <b>soluciones innovadoras y de calidad</b> para cada proyecto en el que trabajo.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Si estás
              buscando
              un
              desarrollador web comprometido, responsable y capacitado, ¡no dudes en contactarme!</h2>
         
            </div>
          </div>
        </div>
      </div>
      <Jumbotron />
      <BackButton />
      <SocialMedia />
    </div>
  )
}
