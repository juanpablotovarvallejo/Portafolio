import Button from "react-bootstrap/Button"
import {BsDownload} from "react-icons/bs"

export default function Hero() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/Portafolio/curriculum.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'curriculum.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <div className="text-white py-5 text-center marca">
                <h1>Hola,</h1>
                <h1>soy Juan Pablo Tovar Vallejo,</h1>
                <h1>estudiante de Ingeniería en Software</h1>
                <h1>de la Escuela Politécnica Nacional</h1>
                <h1>y me apasiona el desarrollo web</h1>

            </div>
            <div className="text-center">
                <Button onClick={onButtonClick}>
                <BsDownload className="mb-1"/> Descargar CV
                </Button>
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
