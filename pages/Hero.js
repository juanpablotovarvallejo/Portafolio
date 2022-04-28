import BarraNavegacion from "./BarraNavegacion";

export default function Hero() {
    return (
        <div className="hero">
            <BarraNavegacion />
            <div className="text-white text-center">
                <h1>Hola,</h1>
                <h1>soy Juan Pablo,</h1>
                <h1>desarrollador web</h1>
            </div>
            <style jsx>{`
                .hero {
                background-image: url('/hero.png');
                }
            `}</style>
        </div>
    )
}