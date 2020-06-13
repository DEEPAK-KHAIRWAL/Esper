import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <div>
                <Navbar dark expand="md" fixed="top">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='pic.png' height="50" width="50" alt='Esper' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span></span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-mobile fa-lg"></span> My Devices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/group'><span className="fa fa-group fa-lg"></span> My Groups</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>

                        </Collapse>
                        <Nav navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <br></br>
                                <h1>Esper</h1>
                                <p>Esper is the first DevOps platform for an agile approach to the Android device lifecycle. Customers worldwide use Esper’s cloud management tools for Android device deployment, app development, and monitoring.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                           <FormGroup>
                               <Label htmlFor="username">Username</Label>
                               <Input type="text" id="username" name="username"
                                   innerRef={(input) => this.username = input} />
                           </FormGroup>
                           <FormGroup>
                               <Label htmlFor="password">Password</Label>
                               <Input type="password" id="password" name="password"
                                   innerRef={(input) => this.password = input}  />
                           </FormGroup>
                           <FormGroup check>
                               <Label check>
                                   <Input type="checkbox" name="remember"
                                   innerRef={(input) => this.remember = input}  />
                                   Remember me
                               </Label>
                           </FormGroup>
                           <Button type="submit" value="submit" color="primary">Login</Button>
                       </Form>
                    </ModalBody>
                </Modal>
                <br></br>
            </div>

        );
    }
}


export default Header;
