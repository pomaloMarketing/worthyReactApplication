import React from 'react';
import './HomePage.css'; // Import a CSS file for custom styling if needed
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


function HomePage() {
  return (
    <Container fluid className="home-page">
      <header className="header text-center my-5">
        <h1 className="mb-4">I am Worthy</h1>
        <p className="lead">
          I am worthy...<br /> to define and celebrate my strengths.
        </p>
        <p className="lead">
          I am worthy to..<br /> to seek and get help.
        </p>
        <p className="lead">
          I am worthy to..<br /> to become who I am meant to be.
        </p>
      </header>
      
      <section className="cta text-center my-5">
        <h2 className="mb-4">Get Started</h2>
        <p className="mb-4">Click below to begin:</p>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={() => window.location.href = '/form'}>
              Get Started
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="secondary" onClick={() => window.location.href = '/resources'}>
              View Resources
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default HomePage;