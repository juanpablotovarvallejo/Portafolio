import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
import { Carousel } from "react-bootstrap"

export default function Tarjeta(props) {
    const [show, setShow] = useState(false);    // para mostrar el modal

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let icons = {
        NextJs: '/icons/nextjs.svg',
        React: '/icons/react.svg',
        NodeSs: '/icons/node.svg',
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


    return (
        <div className="col-4 p-3">
            <Card className="h-100">
                <Card.Img variant="top" src={props.img} />
                <Card.Body onClick={handleShow}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Herramientas:
                        {Object.keys(icons).map(elemento => {
                            return props.tools.includes(elemento) ? <img key={elemento} title={elemento} alt={elemento} height={'25px'} width={'30px'} src={icons[elemento]}></img> : null
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block img-fluid h-100"
                                src="/img/rr.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block img-fluid h-100"
                                src="/img/yt.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <p className="m-0">{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    {props.demo ? <Button variant="primary" href={props.demo}>Demo</Button> : null}
                    <Button variant="primary" href={props.repository}>
                        Repositorio
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}