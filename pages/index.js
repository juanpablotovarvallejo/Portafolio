import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'
import Tarjeta from './tarjeta'
import BarraNavegacion from './BarraNavegacion'
import Habilidades from './habilidades'

export default function Home() {
  const projects = [
    { tittle: "Portafolio", img: "/img/yt.png", herramientas: ["NextJs", "React", "Bootstrap", "JavaScript", "HTML", "CSS"] },
    { tittle: "Youtube UI", img: "/img/yt.png", herramientas: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"] },
    { tittle: "Juego ruleta rusa", img: "/img/rr.png", herramientas: ["Angular", "TypeScript", "NestJs", "Bootstrap", "HTML"] },
    { tittle: "Sistema de venta de tickets para transporte interprovincial", img: "/img/yt.png", herramientas: ["Angular", "TypeScript", "Django", "Bootstrap", "HTML", "JavaScript"] },
    { tittle: "CRUD de videojuegos con su género", img: "/img/yt.png", herramientas: ["Angular", "Laravel", "TypeScript", "Bootstrap", "HTML", "CSS"] },
    { tittle: "Sistema de gestión de inventario para el GADMRiobamba", img: "/img/yt.png", herramientas: ["Laravel", "PHP", "Bootstrap"] }
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
                <Tarjeta title={project.tittle} img={project.img} herramientas={project.herramientas} key={project.tittle} />
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


