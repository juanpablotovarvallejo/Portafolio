export default function Hero() {
    return (
        <div className="">
            <div className="text-white py-5 text-center marca">
                    <h1>Hola,</h1>
                    <h1>soy Juan Pablo,</h1>
                    <h1>desarrollador web</h1>
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