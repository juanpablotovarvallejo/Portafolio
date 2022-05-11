import Head from 'next/head'
import Hero from '../components/hero'
import Tarjeta from '../components/tarjeta'
import BarraNavegacion from '../components/barraNavegacion'
import Habilidades from '../components/habilidades'
import Contacto from '../components/contacto'


export default function Home() {

  const projects = [
    {
      tittle: "Portafolio digital", description: "Portafolio digital realizado con NextJs y React.", img: "/img/yt.png",
      tools: ["NextJs", "React", "Bootstrap", "JavaScript", "HTML", "CSS"], demo: "", repository: ""
    },
    {
      tittle: "Youtube UI", description: "Interfaz gráfica de Youtube realizada con Angular.",
      img: "/img/yt.png", tools: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"], demo: "https://juancho1502011.github.io/YouTube-FrontEnd/inicio", repository: "https://github.com/Juancho1502011/YouTube-FrontEnd"
    },
    {
      tittle: "Juego ruleta rusa", description: "Juego multijugador de la ruleta rusa, front-end realizado con Angular y websocket con NestJs.",
      img: "/img/rr.png", tools: ["Angular", "TypeScript", "NestJs", "Bootstrap", "HTML"], demo: "https://juancho1502011.github.io/Juego-Ruleta-Rusa/", repository: "https://github.com/Juancho1502011/Juego-Ruleta-Rusa"
    },
    {
      tittle: "Sistema de venta de tickets para transporte interprovincial", description: "Sistema para la venta de tickets y generación de códigos QR para un terminal terrestre, front-end realizado con Angular y API con Django",
      img: "/img/yt.png", tools: ["Angular", "TypeScript", "Django", "Bootstrap", "HTML", "JavaScript"], demo: "", repository: ""
    },
    {
      tittle: "CRUD de videojuegos con su género", description: "Interfaz gráfica para el ingreso, consulta, actualización y eliminación de videojuegos con su género, front-end realizado con Angular y API con Laravel",
      img: "/img/yt.png", tools: ["Angular", "Laravel", "TypeScript", "Bootstrap", "HTML", "CSS"], demo: "", repository: ""
    },
    {
      tittle: "Sistema de gestión de inventario para el GADMRiobamba", description: "Prototipo de sistema de gestión de inventario de material de seguridad del personal del GADM realizado en Laravel",
      img: "/img/yt.png", tools: ["Laravel", "HTML", "PHP", "Bootstrap"], demo: "", repository: "https://github.com/Juancho1502011/SistemaSSO"
    }
  ]
  return (
    <div>
      <Head>
        <title>Juan Pablo Tovar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <main className='text-white'>
        <BarraNavegacion />
        <Hero />
        <div className='p-5'>
          <div className="container">
            <div className='row text-center'>
              <h1 className='my-4 marca' style={{ fontSize: 4 + 'rem' }}>Portafolio</h1>
              {projects.map(project => (
                <Tarjeta title={project.tittle} img={project.img} tools={project.tools}
                  description={project.description} demo={project.demo} repository={project.repository} key={project.tittle} />
              ))}
            </div>
          </div>
        </div>
        <div className='p-5'>
          <Habilidades />
        </div>
        <div className='p-5'>
          <Contacto />
        </div>
      </main>
      <style jsx global> {`
        .blur{
          background-color: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
        }
        main{
          background-image: url('/bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .negro{
          position: relative;
          background:black;
          border:none;
          border-radius:10px;
      }
      .negro:after{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 1px; /* control the border thickness */
          background: linear-gradient(45deg,#af2ad7 , #D46018 );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none; 
      }
        .btn{
          position: relative;
          background-color: black;
          border:none;
          border-radius:6px;
        }
        .btn:hover{
          background: linear-gradient(45deg, #af2ad7 ,#D46018) ;
        }
        .btn::after{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 5px;
          padding: 1px; /* control the border thickness */
          background: linear-gradient(45deg, #af2ad7 ,#D46018);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none; 
        }
        .modal-content{
          position: relative;
          background:black;
          border:none;
          border-radius:15px;
          color:white;
        }
        .modal-content:after{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 2px; /* control the border thickness */
          background: linear-gradient(45deg,#af2ad7 ,#fa6300 );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none; 
        }
        .btn-close{
          color:white;
        }
        .card:hover {
          width: 100%;
        }
        .card {
          width: 90%;
          transition: all 0.3s;
        }
        .icon-card{
          filter: invert(94%) sepia(99%) saturate(2%) hue-rotate(91deg) brightness(115%) contrast(101%);
          transition: all 0.5s;
        }
        .icon-card:hover{
          width: 40px;
          height: 35px;
          filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(91deg) brightness(115%) contrast(101%);
        }
        .icon{
          filter: invert(94%) sepia(99%) saturate(2%) hue-rotate(91deg) brightness(115%) contrast(101%);
          transition: all 0.5s;
        }
        .icon:hover{
          height: 60px;
          filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(91deg) brightness(115%) contrast(101%);
        }
      `}</style>
    </div>
  )
}