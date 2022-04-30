import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'
import Tarjeta from './tarjeta'
import BarraNavegacion from './BarraNavegacion'
import Habilidades from './habilidades'

export default function Home() {
  const projects = [
    { tittle: "Portafolio digital",description:"Portafolio digital realizado con NextJs y React.",img: "/img/yt.png", 
    tools: ["NextJs", "React", "Bootstrap", "JavaScript", "HTML", "CSS"],demo:"",repository:"" },
    { tittle: "Youtube UI",description:"Interfaz gráfica de Youtube realizada con Angular.", 
    img: "/img/yt.png", tools: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"],demo:"https://juancho1502011.github.io/YouTube-FrontEnd/inicio",repository:"https://github.com/Juancho1502011/YouTube-FrontEnd"  },
    { tittle: "Juego ruleta rusa",description:"Juego multijugador de la ruleta rusa, front-end realizado con Angular y websocket con NestJs.", 
    img: "/img/rr.png", tools: ["Angular", "TypeScript", "NestJs", "Bootstrap", "HTML"],demo:"https://juancho1502011.github.io/Juego-Ruleta-Rusa/",repository:"https://github.com/Juancho1502011/Juego-Ruleta-Rusa"  },
    { tittle: "Sistema de venta de tickets para transporte interprovincial",description:"Sistema para la venta de tickets y generación de códigos QR para un terminal terrestre, front-end realizado con Angular y API con Django", 
    img: "/img/yt.png", tools: ["Angular", "TypeScript", "Django", "Bootstrap", "HTML", "JavaScript"],demo:"",repository:""  },
    { tittle: "CRUD de videojuegos con su género",description:"Interfaz gráfica para el ingreso, consulta, actualización y eliminación de videojuegos con su género, front-end realizado con Angular y API con Laravel", 
    img: "/img/yt.png", tools: ["Angular", "Laravel", "TypeScript", "Bootstrap", "HTML", "CSS"],demo:"",repository:""  },
    { tittle: "Sistema de gestión de inventario para el GADMRiobamba",description:"Prototipo de sistema de gestión de inventario de material de seguridad del personal del GADM realizado en Laravel", 
    img: "/img/yt.png", tools: ["Laravel","HTML", "PHP", "Bootstrap"],demo:"",repository:"https://github.com/Juancho1502011/SistemaSSO"  }
  ]
  return (
    <div>
      <Head>
        <title>Juan Pablo Tovar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BarraNavegacion />
        <Hero />
        <div className="container">
          <div className="col text-center">
            <h1>Portafolio</h1>
            <div className='row'>
              {projects.map(project => (
                <Tarjeta title={project.tittle} img={project.img} tools={project.tools}
                description={project.description} demo={project.demo} repository={project.repository} key={project.tittle} />
              ))}
            </div>
            <h1>Habilidades</h1>
            <div className='row'>
              <Habilidades/>
            </div>
            <h1>Contacto</h1>
            <div className='row'>
              
            </div>
          </div>
        </div>
      </main>
      <style jsx> {`
      `}</style>
    </div>
  )
}


