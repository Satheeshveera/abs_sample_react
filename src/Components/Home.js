import React,{ useState } from "react";
import { FaAlignJustify,FaPowerOff,FaHome } from "react-icons/fa";
import { MdFastfood,MdNoFood } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
import "../Styles/Home.css"

const Home = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div>
            <div className="container-fluid p-0">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>          
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                                <Nav className="me-auto">
                                    <Nav.Link href="#" onClick={ToggleSidebar}><FaAlignJustify /></Nav.Link>
                                    <Navbar.Brand href="#home">Foodie</Navbar.Brand>
                                </Nav>
                                <Nav className="mr-0">
                                    <NavDropdown title={"Profile"} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#/">Action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#/"><FaPowerOff/> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0"><MdFastfood/> Foodie </h4>
                            {/* <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div> */}
                        </div>
                        <div className="sd-body text-left">
                            <ul>
                                <li><Link to={"/"}><p  className="sd-link"><FaHome/> Home</p></Link></li>
                                <li><Link to={"/veg"}><p  className="sd-link"><MdFastfood/> Veg Food Items</p></Link></li>
                                <li><Link to={"/nonveg"}><p  className="sd-link"><MdNoFood/>  Non-Veg Food Items</p></Link></li>     
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

                   
           </div>
           
        </div>
    )
}

export default Home;