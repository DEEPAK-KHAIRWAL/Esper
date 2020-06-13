import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label ,Card, CardImg, CardText, CardBody,
                CardTitle, CardSubtitle } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    render(){

    return(
        <div className="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        3581, 4th Cross Rd <br />
                        HAL 2nd Stage, Doopanahalli<br />
                        Domlur, Bengaluru, Karnataka 560008<br />
                        <i className="fa fa-phone"></i> : +91 9445823716<br />
                        <i className="fa fa-fax"></i> : +91 9445823716<br />
                        <i className="fa fa-envelope"></i> : <a href="deepakkhairwal12@gmail.com">deepakkhairwal12@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <Card id="crd" className="z-depth-1-half map-container-5">
                          <iframe src="https://maps.google.com/maps?q=Esper(bangalore)&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" allowfullscreen></iframe>
                    </Card>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+91 9445823716"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:deepakkhairwal12@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

        </div>
    );
}
}

export default Contact;
