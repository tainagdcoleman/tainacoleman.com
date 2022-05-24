import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import profile from "./profile.png";


function Home() {

    return (
      
      <Row>
    
        <Col xs={12} md={3} className="mb-2 text-center" style={{backgroundColor: '#f8f9fa',
                                                                paddingTop: 30,
                                                                paddingBottom: 100,
                                                                paddingLeft: 30,
                                                                paddingRight: 30 }}>
        
            <Image src={profile} rounded width="80%" />
            {/* <h4 className="text-center">Tainã Gariglio Dias Coleman</h4> */}
            <p>
                <i>Information Sciences Institute</i> 
                <br /> 
                University of Southern California 
            </p>

            <Row>
                <Col className="text-center"><h6>Current Research Interests</h6></Col>
            </Row>
            <Row>
                <p className="text-left">
                    <b>Scientific Workflows</b> structures, optimizations, benchmarks and energy effiency.
                </p>
            
                <p className="text-left">
                    <b>Distributed Computing</b> for HPC clusters. 
                </p>
            
                <p className="text-left">
                    <b>Data Science</b> 
                </p>
            </Row>
            
            {/* <p className="mt-3 text-center">
                I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="https://rafaelsilva.com/">Rafael Ferreira da Silva</a>.
                I have a <b>Bachelor's degree</b> in <b>Computer Engineering</b> from Universidade Federal de Itajubá in Brazil and a <b>Master's degree</b> in <b>Computer Science</b> from California State University, Long Beach.
            </p>  */}
        </Col>
       
        <Col>
            <Row>
                <Col>
                
                    <h4 className="text-center">Tainã Gariglio Dias Coleman</h4>
                    <p className="mt-3 text-justified">
                        I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="https://rafaelsilva.com/">Dr. Rafael Ferreira da Silva</a>.
                        I have a <b>Bachelor's degree</b> in <b>Computer Engineering</b> from Universidade Federal de Itajubá in Brazil and a <b>Master's degree</b> in <b>Computer Science</b> from California State University, Long Beach.
                    </p>
                    <p>
                        My current research is in <b>Scientific Workflows Structure and Benchmarks</b>. More specifically, I am contributing to a project called <a href="https://wfcommons.org/">WfCommons</a>, more information about this project in my <a href="https://tainacoleman.com/projects">Projects</a> tab.    
                    </p> 
                </Col>
            </Row>
            {/* <Row>
                <Col className="text-center"><h5>Current Research Interests</h5></Col>
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
                <Col>
                    <p className="text-center">
                        <b>Data Science</b> 
                    </p>
                </Col>
            </Row> */}
        </Col>
      </Row>


    );  
   
}

export default Home;