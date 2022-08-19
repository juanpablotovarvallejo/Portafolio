import Head from 'next/head'
import Hero from '../components/hero'
import Tarjeta from '../components/tarjeta'
import BarraNavegacion from '../components/barraNavegacion'
import Habilidades from '../components/habilidades'
import Contacto from '../components/contacto'


export default function Home() {

  const projects = [
    {
      tittle: "Prototipo portal Ministerio de Salud Pública", description: "Prototipo de interfaz gráfica de una versión alternativa al portal web del Ministerio de Salud Pública hecho con Angular", img: "/Portafolio/img/pmsp1.png",
      tools: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"], demo: "https://juanpablotovarvallejo.github.io/PrototipoMinisterioSaludPublica/", repository: "https://github.com/juanpablotovarvallejo/PrototipoMinisterioSaludPublica",
      ss: ["/Portafolio/img/pmsp1.png", "/Portafolio/img/pmsp2.png", "/Portafolio/img/pmsp3.png"]
    },
    {
      tittle: "Portafolio digital 2022", description: "Portafolio digital realizado con NextJs y React.", img: "/Portafolio/img/pt1.png",
      tools: ["NextJs", "React", "Bootstrap", "JavaScript", "HTML", "CSS"], demo: "https://juanpablotovarvallejo.github.io/Portafolio/", repository: "https://github.com/juanpablotovarvallejo/Portafolio",
      ss: ["/Portafolio/img/pt1.png", "/Portafolio/img/pt2.png", "/Portafolio/img/pt3.png", "/Portafolio/img/pt4.png"]
    },
    {
      tittle: "Youtube UI", description: "Interfaz gráfica de Youtube realizada con Angular.",
      img: "/Portafolio/img/yt.png", tools: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"], demo: "https://juanpablotovarvallejo.github.io/YouTube-FrontEnd/inicio", repository: "https://github.com/juanpablotovarvallejo/YouTube-FrontEnd",
      ss: ["/Portafolio/img/yt.png", "/Portafolio/img/yt2.png", "/Portafolio/img/yt3.png"]
    },
    {
      tittle: "Juego ruleta rusa", description: "Juego multijugador de la ruleta rusa, front-end realizado con Angular y websocket con NestJs.",
      img: "/Portafolio/img/rr.png", tools: ["Angular", "TypeScript", "NestJs", "Bootstrap", "HTML"], demo: "https://juanpablotovarvallejo.github.io/Juego-Ruleta-Rusa/", repository: "https://github.com/juanpablotovarvallejo/Juego-Ruleta-Rusa",
      ss: ["/Portafolio/img/rr.png", "/Portafolio/img/rr2.png", "/Portafolio/img/rr3.png", "/Portafolio/img/rr4.png"]
    },
    {
      tittle: "Sistema de venta de tickets para transporte interprovincial", description: "Sistema para la venta de tickets y generación de códigos QR para un terminal terrestre, front-end realizado con Angular y API con Django",
      img: "/Portafolio/img/svt1.png", tools: ["Angular", "TypeScript", "Django", "Bootstrap", "HTML", "JavaScript"], demo: "", repository: "https://github.com/juanpablotovarvallejo/ProyectoWebA",
      ss: ["/Portafolio/img/svt1.png", "/Portafolio/img/svt2.png", "/Portafolio/img/svt3.png", "/Portafolio/img/svt4.png", "/Portafolio/img/svt5.png"]
    },
    {
      tittle: "CRUD de videojuegos con su género", description: "Interfaz gráfica para el ingreso, consulta, actualización y eliminación de videojuegos con su género, front-end realizado con Angular y API con Laravel",
      img: "/Portafolio/img/cv1.png", tools: ["Angular", "Laravel", "TypeScript", "Bootstrap", "HTML", "CSS"], demo: "", repository: "https://github.com/juanpablotovarvallejo/GestionVideojuegos",
      ss: ["/Portafolio/img/cv1.png", "/Portafolio/img/cv2.png", "/Portafolio/img/cv3.png", "/Portafolio/img/cv4.png"]
    },
    {
      tittle: "Sistema de gestión de inventario para el GADMRiobamba", description: "Prototipo de sistema de gestión de inventario de material de seguridad del personal del GADM realizado en Laravel",
      img: "/Portafolio/img/sso1.png", tools: ["Laravel", "HTML", "PHP", "Bootstrap"], demo: "", repository: "",
      ss: ["/Portafolio/img/sso1.png", "/Portafolio/img/sso2.png", "/Portafolio/img/sso3.png", "/Portafolio/img/sso4.png", "/Portafolio/img/sso5.png"]
    }
  ]
  return (
    <div>
      <Head>
        <title>Juan Pablo Tovar</title>
        <link rel="icon" href="/Portafolio/favicon.ico" />
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
                  description={project.description} demo={project.demo} repository={project.repository} key={project.tittle} ss={project.ss}/>
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
          background-image: url('/Portafolio/bg.png');
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
        .btn:focus{
          background: linear-gradient(45deg, #af2ad7 ,#D46018) ;
          box-shadow: none;
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