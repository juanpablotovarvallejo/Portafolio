export default function Hero() {
    return (
        <div className="">
            <div className="text-white py-5 text-center marca">
                    <h1>Hola,</h1>
                    <h1>soy Juan Pablo Tovar Vallejo,</h1>
                    <h1>estudiante de Ingeniería en Software</h1>
                    <h1>de la Escuela Politécnica Nacional</h1>
                    <h1>y me apasiona el desarrollo web</h1>
            </div>
            <style jsx>{`
                @keyframes typing {
                    from { font-size: 0 }
                    to { font-size: 5rem }
                }
                h1 {
                    font-size: 0rem;
                    animation: typing 1.5s forwards;
                }
                
            `}</style>
        </div>
    )
}
