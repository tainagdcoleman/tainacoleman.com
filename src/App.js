import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Nav, Navbar } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import Publications from './Publications';
import Projects from './Projects';
import About from './About';
import Home from './Home';

const SOCIAL_STYLE = {height: 35, width: 35};


function App() {
  return (
    <Router>
      <Navbar bg="light" expand="sm" className="mb-2">
        <Navbar.Brand href="/">Tainã Gariglio Dias Coleman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container style={{paddingBottom: '75px'}}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      
      <Navbar bg="light" fixed="bottom" style={{opacity: 1, backgroundColor: "white"}}>
        <Nav key='nav-contact' className='mr-auto'>
          <Nav.Link href="mailto:tgcolema@usc.edu">Contact</Nav.Link>
          <Nav.Link href="/resume.pdf">CV</Nav.Link>
        </Nav>
        <Nav>
          <SocialIcon key='social-facebook' url="https://www.facebook.com/tainagdcoleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-instagram' url="https://www.instagram.com/tainagcoleman/?hl=en" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-twitter' url="https://twitter.com/tainagdcoleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-linkedin' url="https://www.linkedin.com/in/tainacoleman/" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-github' url="https://github.com/tainagdcoleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-scholar' url="https://scholar.google.com/citations?user=xFB72yMAAAAJ&hl=en" className="m-1" style={SOCIAL_STYLE} />
        </Nav>
      </Navbar>
    </Router>
  );
}

export default App;
