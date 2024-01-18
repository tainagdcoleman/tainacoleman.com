import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import wfcommonsLogo from './wfcommons.png';

const SOCIAL_STYLE = {height: 25, width: 25};

const projects = [
    {
        name: 'WfCommons',
        links: {
            'youtube': 'https://www.youtube.com/watch?v=3LhcWa-T3MQ',
            'github': 'https://www.github.com',
            'wfcommons': "https://wfcommons.org"
        },
        description: (
            
            <Col>
                <p>
                WfCommons is a framework for enabling scientific workflow research and development. It provides foundation tools for analyzing workflow execution instances, generating workflow recipes, and generating synthetic, yet realistic, workflow instances. The synthetic instances can then be used to develop new techniques, algorithms and systems that can overcome the challenges of efficient and robust execution of ever larger workflows on increasingly complex distributed infrastructures. 
                </p>
                <p>
                My first contribution to this project is the component called <b>WfChef</b> which is responsible for detecting patterns in the structure of sample graphs to generate the synthetic graphs. WfChef brought scalability to WfCommons by allowing the framework to be used by any workflow application and generate synthetic instances of any size.
                </p>
                <p>
                Followed by <b>WfChef</b> and using its recipes, I develop <b>WfBench</b> which is benchmark generator for scientific workflows. WfBench is a tool that generates scientific workflows benchmarks based on real-world workflow instances. It is designed to allow for extensive customization of the tasks and the workflow structure and it can be used to evaluate the performance of workflow management systems, and to evaluate the performance of workflow algorithms and techniques.                
                </p>
            </Col>
        )
    }
]

function Projects() {

    const panel = projects.map(project => {
        const links = Object.entries(project.links).map(([social, url], i) => {
            if (social === "wfcommons") {
                return (
                    <a href={url}>
                        <img 
                            src={wfcommonsLogo} 
                            className={`${i > 0 ? 'ml-1' : ''}`}
                            alt={social} 
                            style={{height: '1.6em'}} 
                        />
                    </a>
                )
            } else {
                return (
                    <SocialIcon 
                        key={`social-${social}`} 
                        url={url} 
                        className={`${i > 0 ? 'ml-1' : ''} ${i < Object.keys(project.links).length ? 'mr-1' : ''}`}
                        style={SOCIAL_STYLE}
                    />
                );
            }
        });
        
        return (
            <ListGroup.Item key={project.name}>
                <Row className='mt-4 mb-3'>
                    <Col xs={12} sm={4} lg={2} className='text-center'>
                        <h3>{project.name}</h3>
                        {links}
                    </Col>
                    <Col xs={12} sm={8} lg={10}>
                        {project.description}
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    });

    return (
        <Row>
            <Col>
                <h4 className='text-center'>Projects</h4>
                {panel}
            </Col>
        </Row>
    );
}

export default Projects;