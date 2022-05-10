import { Button } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BsEnvelopeFill} from 'react-icons/bs';

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
    };

    return <div className="container text-center mb-4">
        <h1 className='my-4 marca' style={{ fontSize: 4 + 'rem' }}>Contacto</h1>
        <form className="mb-4" ref={form} onSubmit={sendEmail}>
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