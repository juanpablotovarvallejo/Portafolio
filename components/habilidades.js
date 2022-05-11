export default function Habilidades() {
    let icons = {
        NextJs: '/Portafolio/icons/nextjs.svg',
        React: '/Portafolio/icons/react.svg',
        NodeJs: '/Portafolio/icons/nodejs.svg',
        JavaScript: '/Portafolio/icons/javascript.svg',
        HTML: '/Portafolio/icons/html.svg',
        CSS: '/Portafolio/icons/css.svg',
        Bootstrap: '/Portafolio/icons/bootstrap.svg',
        Laravel: '/Portafolio/icons/laravel.svg',
        Angular: '/Portafolio/icons/angular.svg',
        PHP: '/Portafolio/icons/php.svg',
        Django: '/Portafolio/icons/django.svg',
        NestJs: '/Portafolio/icons/nestjs.svg',
        TypeScript: '/Portafolio/icons/typescript.svg',
    }
    return <div className="container">
        <div className='row text-center'>
            <h1 className='my-4 marca' style={{fontSize:4+'rem'}}>Habilidades</h1>
            {Object.keys(icons).map(elemento => (
                <div className="col-4 col-md-2 p-3" key={elemento}>
                    <div className="my-3" style={{height:60+'px'}}>
                    <img className="icon mx-auto" height={'50px'} src={icons[elemento]}></img>
                    </div>
                    <p>{elemento}</p>
                </div>
            ))}
        </div>
    </div>  
}