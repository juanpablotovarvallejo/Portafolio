export default function Hero() {
    return (
        <div className="hero">
            <div className="text-white py-5 text-center marca">
                <h1>Hola,</h1>
                <h1>soy Juan Pablo,</h1>
                <h1>desarrollador web</h1>
            </div>
            <style jsx>{`
                .hero {
                background-image: url('/hero.png');
                background-size: cover;
                background-position: center;
                }
                h1 {
                    font-size: 5rem;
                }
                
            `}</style>
        </div>  
    )
}