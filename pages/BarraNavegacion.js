import { Component } from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class BarraNavegacion extends Component {
    render() {
        return (
            <div className="fixed-top">
                <Navbar bg="transparent" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><nav className="d-none marca">Juan Pablo Tovar</nav></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav d-flex" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Portafolio</Nav.Link>
                                <Nav.Link href="#link">Habilidades</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <style jsx>{`
                    .marca {
                        font-size: 1.5rem;
                    }
                `}</style>
            </div>
        )
    }
}
export default BarraNavegacion;