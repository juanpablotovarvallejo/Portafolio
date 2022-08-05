import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
import { Carousel } from "react-bootstrap"
import { BsGithub,BsLink45Deg } from 'react-icons/bs';
import CloseButton from 'react-bootstrap/CloseButton'

export default function Tarjeta(props) {
    const [show, setShow] = useState(false);    // para mostrar el modal

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let icons = {
        NextJs: '/Portafolio/icons/nextjs.svg',
        React: '/Portafolio/icons/react.svg',
        NodeSs: '/Portafolio/icons/node.svg',
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


    return (
        <div className="col-lg-4 col-md-6 px-4 my-4 tarjeta">
            <Card className="h-100 negro mx-auto" role={'button'} onClick={handleShow}>
                <div className="card-img-top img ">
                    <Card.Img style={{ borderRadius: 12 + 'px' }} variant="top" src={props.img} />
                    <div className="hidden container">
                        <div className="row h-100 align-items-center">
                            {props.demo ? <div className="col-12">
                                <Button href={props.demo}>
                                    <BsLink45Deg className="mb-1"/> Demo</Button>
                            </div> : null}
                            {props.repository ? <div className="col-12">
                                <Button className="align-itms-center" href={props.repository}>
                                    <BsGithub className="mb-1"/> Repositorio
                                </Button>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <Card.Body >
                    <Card.Title>{props.title}</Card.Title>
                    <div className="card-text row justify-content-center">
                        <p>Herramientas:</p>
                        {Object.keys(icons).map(elemento => {
                            return props.tools.includes(elemento) ?
                                <div key={elemento} className="d-inline-block p-0" style={{height:35+'px',width:40+'px'}}>
                                    <img className="icon-card" title={elemento} alt={elemento} height={'25px'} width={'30px'} src={icons[elemento]}></img>
                                </div>
                            : null
                        })}
                    </div>
                </Card.Body>
            </Card>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade variant="dark">
                        {props.ss.map((img, index) => {
                            return <Carousel.Item key={index}>
                                <img className="d-block w-100" src={img} alt="First slide" />
                            </Carousel.Item>
                        }
                        )}
                    </Carousel>
                    <p className="m-0">{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    {props.demo ? <Button variant="primary" href={props.demo}>
                        <BsLink45Deg className="mb-1"/> Demo</Button> : null}
                    {props.repository ? <Button className="button" href={props.repository}>
                        <BsGithub className="mb-1"/> Repositorio
                    </Button> : null}
                </Modal.Footer>
            </Modal>
            <style jsx>{`
                .hidden {
                    border-radius: 10px;
                    position: absolute;
                    bottom: 100%;
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    overflow: hidden;
                    width: 100%;
                    height: 0%;
                    transition: .5s ease;
                }
                .tarjeta:hover .hidden {
                    bottom: 0;
                    height: 100%;
                }
                .img {
                    position: relative;
                    width: 100%;
                }
                .bg-dark{
                    background-color: white; !important;
                    border: white;
                }
                
            `}</style>
        </div>
    )
}