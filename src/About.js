import React from 'react';
import {Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Row>
            <Col>
                <h4 className='text-center'>About Me</h4>
                <h5>Research</h5>
                <p>
                    My research interests are in Scientific Workflows. In particular, my goal is to develop a better understanding of how workflow structure affects execution in high-performance computing environments. To this end, I develop algorithms, benchmarks, and data-driven approaches for extracting and exploiting structure in scientific workflows.
                </p>
                <p>
                    On my last semester of my BS, I had to present a senior project that had the format of a thesis. That was my first opportunity to research a topic and develop something with it. The project involved creating a programing language in Portuguese and its interpreter, and it was a very exciting moment of my student carreer.
                </p>
                <p>
                    In 2018 I started a MS program in Computer Science and for the two years of the program I worked with Dr. Ju Cheol Moon on machine learning problems. Our main work was called <b>SharkID</b> and it was a novel framework based on bipartite graphs and perfect minimum matching. The goal of the framework is to identify individual sharks by their dorsal fin. This research was presented as my master's thesis <b>SharkID: A Framework For Automated Individual Shark Identification</b> in which Dr. Moon was my advisor and chair. I was awarded my Masters Degree in Computer Science in May of 2020.
                </p>
                <p>
                    In August 2020, I started a Ph.D. program in Computer Science at <a href="https://www.usc.edu/">University of Southern California</a> and my research concentration is in <b>Scientific Workflows for Distributed Computing</b>. Through my PhD program I was advised by <a href="https://rafaelsilva.com/#about-me">Dr. Rafael Ferreira da Silva</a> and we developed a novel approach for extracting and exploiting structure in scientific workflows for data augmentation. We then used this approach to develop automated realistic scientific workflows benchmarks. This research was presented as my doctoral dissertation <b>Scientific Workflow Generation and Benchmarking</b>. I was awarded my Ph.D. in Computer Science in December of 2023.
                </p>
                <p>
                    In January of 2024, I started amy current postion as a Schmidt AI in Science Postdoctoral Fellow at the <a href="https://www.sdsc.edu/">San Diego Supercomputer Center</a> under the mentorship of Dr. Ilkay Altintas and Dr. Tara Javidi. I hope to continue my research in scientific workflows by exporing now AI and dynamic workflows.
                </p>

                
                <h5>More About Me</h5>
                <p>
                    I was born and raised in Taubaté, a medium-sized town in the state of São Paulo in Brazil. Growing up life was hard, and I found in education a path to take me places I have never imagined achievable. During my teenager years I learned english and in 2013 I had the opportnity to study abroad through a government funded program called <b>Ciências Sem Fronteiras (Science Without Borders)</b>. I was accepted for a one-year scholarship to continue my studies in Computer Engineering at <a href="https://csulb.edu">California State University, Long Beach</a>. It was an unbelivable academic opportunity and I also got to see many incredible places in the United States.
                </p>
                <p>
                    During my exchange program at CSULB, I also met my now husband <a href="https://jaredraycoleman.com">Jared Coleman</a>. He is also a Computer Scientist and I am grateful we get to share our lives and most of our interests! After my program was over, Jared was fluent in Portuguese and he decided to start an exchange program at my university then, <a href="https://unifei.edu.br/">Universidade Federal de Itajubá</a>. In 2016, we moved to the US, got married and started our new chapter in Long Beach.
                </p>
                <p>
                    Jared and I are both now Ph.D. students at USC. Read more about Jared at <a href="https://jaredraycoleman.com">his page</a>.
                </p>
            </Col>
        </Row>
    );
}

export default About;