export default function Habilidades() {
    let icons = {
        NextJs: '/icons/nextjs.svg',
        React: '/icons/react.svg',
        NodeJs: '/icons/nodejs.svg',
        JavaScript: '/icons/javascript.svg',
        HTML: '/icons/html.svg',
        CSS: '/icons/css.svg',
        Bootstrap: '/icons/bootstrap.svg',
        Laravel: '/icons/laravel.svg',
        Angular: '/icons/angular.svg',
        PHP: '/icons/php.svg',
        Django: '/icons/django.svg',
        NestJs: '/icons/nestjs.svg',
        TypeScript: '/icons/typescript.svg',
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