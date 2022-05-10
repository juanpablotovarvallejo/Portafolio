import { Component } from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class BarraNavegacion extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const sections = document.querySelectorAll('h1');
        if (window.scrollY >= sections[3].offsetTop - 200) {
            document.getElementById('navbar').classList.add('blur');
            document.getElementById('logo').classList.remove('dnone');
        } else {
            document.getElementById('navbar').classList.remove('blur');
            document.getElementById('logo').classList.add('dnone');
        }
        if (window.scrollY >=  sections[3].offsetTop - 150 && 
        window.scrollY <=  sections[4].offsetTop - 150) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementsByClassName('nav-link')[0].classList.add('active');
        } else if (window.scrollY >=  sections[4].offsetTop - 150 && 
        window.scrollY <=  sections[5].offsetTop - 150) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementsByClassName('nav-link')[1].classList.add('active');
        } else if (window.scrollY >=  sections[5].offsetTop - 150) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementsByClassName('nav-link')[2].classList.add('active');
        } else {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
        }
    }

    handleBrandClick = () => {
        document.querySelectorAll('.nav-link').forEach(element => {
            element.classList.remove('active');
        });
        window.scrollTo(0, 0);

    }
    handlePortafolioClick = () => {
        window.scrollTo(0, document.querySelectorAll('h1')[3].offsetTop - 100);
    }
    handleHabilidadesClick = () => {
        window.scrollTo(0, document.querySelectorAll('h1')[4].offsetTop - 100);
    }
    handleContactoClick = () => {
        window.scrollTo(0, document.querySelectorAll('h1')[5].offsetTop - 100);
    }

    render() {
        return (
            <div id="navbar" className="fixed-top" onScroll={this.handleScroll}>
                <Navbar bg="transparent" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" onClick={this.handleBrandClick}><nav id="logo" className="dnone marca">Juan Pablo Tovar</nav></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav d-flex" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#portafolio" onClick={this.handlePortafolioClick}>Portafolio</Nav.Link>
                                <Nav.Link href="#habilidades" onClick={this.handleHabilidadesClick}>Habilidades</Nav.Link>
                                <Nav.Link href="#contacto" onClick={this.handleContactoClick} >Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <style jsx>{`   
                    .marca {
                        font-size: 1.5rem;
                        transition: font-size 0.5s;
                    }
                    .dnone{
                        font-size: 0;  
                    }
                    #navbar{
                        transition: all 0.5s;
                        webkit-filter: all 0.5s;
                    }
                `}</style>
            </div>
        )
    }




}
export default BarraNavegacion;