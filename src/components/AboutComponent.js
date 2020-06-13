import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {Fade, Stagger } from 'react-animation-components';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Esper amid COVID</h2>
                    <p>Esper’s global workforce is headquartered in Seattle, WA, with offices in Menlo Park, CA, and Bangalore, India. Esper was among the first few companies to respond quickly and shifted to the work from home model in order to protect the health of our employees and our communities.</p>
                    <p>We decided to open our platform to healthcare institutions, to help them fight the pandemic. Esper is eager to help frontline healthcare workers restore safe communities. We have been giving free consultations to companies providing essential healthcare on technology challenges and the best way you can overcome them.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2015</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Its developers</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Esper raised Rs 6 lakh for Feed My Bangalore, initiative with contributions from our global team and leadership.</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Source : LinkedIn</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Esper’s developer Kiran Anto created a hyperlocal essential supply finder application called “Neighbourhood Supply” to help people find essentials in their neighbourhood, across cities.</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Source : LinkedIn</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Finally, Esper is focusing on their product to help organisations gain complete mobility and visibility of their devices and give the best device management solution for businesses to continue work during these trying times.</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Source : LinkedIn</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default About;
