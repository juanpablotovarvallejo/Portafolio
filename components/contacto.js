import { Button } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BsEnvelopeFill, BsGithub, BsLinkedin} from 'react-icons/bs';

export default function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4v7nhqn', 'template_nve1vug', form.current, 'wV1ZoxBB9FCzNSaYb')
            .then((result) => {
                console.log(result.text);
            }, (error) => { 
                console.log(error.text);    
            });
            document.querySelectorAll('input').forEach(element => {
                element.value = '';
            });
            ducument.querySelector('textarea').value = '';
    };



    return <div className="container text-center mb-4">
        <h1 className='my-4 marca' style={{ fontSize: 4 + 'rem' }}>Contacto</h1>
        <form className="mb-5   " ref={form} onSubmit={sendEmail}>
            <div className="my-4 row justify-content-center">
                <label htmlFor="inputNombre" className="col-sm-1 col-form-label">Nombre</label>
                <div className="col-sm-10 col-md-7 p-0 negro mx-3">
                    <input type="text" className="form-control" id="inputNombre" name="from_name"/>
                </div>
            </div>
            <div className="my-4 row justify-content-center">
                <label htmlFor="inputCorreo" className="col-sm-1 col-form-label">Correo</label>
                <div className="col-sm-10 col-md-7 p-0 negro mx-3" >
                    <input type="email" className="form-control" id="inputCorreo" name="from_email"/>
                </div>
            </div>
            <div className="my-4 row justify-content-center">
                <label htmlFor="inputMensaje" className="col-sm-1 col-form-label">Mensaje</label>
                <div className="col-sm-10 col-md-7 p-0 negro mx-3">
                    <textarea className="form-control" id="inputMensaje" name="message" rows="10" />
                </div>
            </div>
            <Button className="my-4" type="submit" ><BsEnvelopeFill className="mb-1"/> Enviar</Button>
        </form>
        <div className="row justify-content-center my-5">

            <a className="my-2 d-inline-block text-decoration-none text-white" href="https://www.linkedin.com/in/juan-pablo-tovar-vallejo-467220232/">
            <i class="bi bi-linkedin"></i><BsLinkedin className="mb-1"/> LinkedIn</a>
            <a className="my-2 d-inline-block text-decoration-none text-white" href="https://github.com/juanpablotovarvallejo">
            <i class="bi bi-linkedin"></i><BsGithub className="mb-1"/> Github</a>
            <div className="my-2 d-inline-block text-decoration-none text-white">
            <i class="bi bi-linkedin"></i><BsEnvelopeFill className="mb-1"/> juan.tovar@epn.edu.ec</div>
        </div>
        <style jsx>{`
            .form-control{
                position: relative;
                background:black;
                border:none;
                border-radius:10px;
                color:white;
            }
            .form-control:focus{
                box-shadow: none;
            }
        `}</style>
    </div>
}