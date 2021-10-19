import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import profile from "./profile.png";

function Home() {
    return (
      <Row>
        <Col xs={12} md={4} className="mb-2 text-center">
            <Image src={profile} rounded width="100%" />
            {/* <h4 className="text-center">Tainã Gariglio Dias Coleman</h4> */}
            <p>
                <i>Information Sciences Institute</i> 
                <br /> 
                University of Southern California 
            </p>
            
            {/* <p className="mt-3 text-center">
                I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="https://rafaelsilva.com/">Rafael Ferreira da Silva</a>.
                I have a <b>Bachelor's degree</b> in <b>Computer Engineering</b> from Universidade Federal de Itajubá in Brazil and a <b>Master's degree</b> in <b>Computer Science</b> from California State University, Long Beach.
            </p>  */}
        </Col>
        <Col>
            <Row>
                <Col>
                
                    <h4 className="text-center">Tainã Gariglio Dias Coleman</h4>
                    <p className="mt-3 text-center">
                        I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="https://rafaelsilva.com/">Rafael Ferreira da Silva</a>.
                        I have a <b>Bachelor's degree</b> in <b>Computer Engineering</b> from Universidade Federal de Itajubá in Brazil and a <b>Master's degree</b> in <b>Computer Science</b> from California State University, Long Beach.
                    </p> 
                </Col>
            </Row>
            <Row>
                <Col className="text-center"><h5>Research Interests</h5></Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">
                        <b>Scientific Workflows</b> structures, optimizations, benchmarks and energy effiency.
                    </p>
                </Col>
                <Col>
                    <p className="text-center">
                        <b>Distributed Computing</b> for HPC clusters. 
                    </p>
                </Col>
                {/* <Col>
                    <p className="text-center">
                        Using <b>Data Science</b> to 
                    </p>
                </Col> */}
            </Row>
        </Col>
      </Row>
    );  
}

export default Home;