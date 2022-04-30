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
    return Object.keys(icons).map(elemento => {
                return  <div className="col-2 p-3" key={elemento}> 
                            <img height={'50px'} src={icons[elemento]}></img>
                            <p>{elemento}</p>
                        </div>
            })
}