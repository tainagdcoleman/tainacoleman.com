import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const SOCIAL_STYLE = {height: 25, width: 25};

const projects = [
    {
        name: 'WorkflowHub',
        links: {
            'youtube': 'https://www.youtube.com/watch?v=3LhcWa-T3MQ',
            'github': 'https://www.github.com',
        },
        description: (
            <p>
                
            </p>
        )
    }
]

function Projects() {

    const panel = projects.map(project => {
        const links = Object.entries(project.links).map(([social, url], i) => {
            return (
                <SocialIcon 
                    key={`social-${social}`} 
                    url={url} 
                    className={`${i > 0 ? 'ml-1' : ''} ${i < Object.keys(project.links).length ? 'mr-1' : ''}`}
                    style={SOCIAL_STYLE}
                />
            );
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
                <h1 className='text-center'>Projects</h1>
                {panel}
            </Col>
        </Row>
    );
}

export default Projects;