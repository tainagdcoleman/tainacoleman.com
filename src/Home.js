import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import profile from "./profile.png";

function Home() {
    return (
      <Row>
        <Col xs={12} md={3} className="mb-2">
            <Image src={profile} rounded width="100%" />
        </Col>
        <Col>
            <h4 className="text-center">Tainã Gariglio Dias Coleman</h4>
            <p className="mt-3 text-center">
                I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="https://rafaelsilva.com/">Rafael Ferreira da Silva</a>.
                I have a <b>Bachelor's degree</b> in <b>Computer Engineering</b> from Universidade Federal de Itajubá in Brazil and a <b>Master's degree</b> in <b>Computer Science</b> from California State University, Long Beach.
            </p> 
    
            <h5 className="text-center">Research Interests</h5>
            <p className="text-center">
                My research interests include machine learning, data science and <b>distributed computing</b>. 
            </p>
        </Col>
      </Row>
    );  
}

export default Home;