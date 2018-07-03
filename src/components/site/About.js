import React from 'react';
import { Container, Row, Col } from 'reactstrap';
var soccerBallPic = require ('../../assets/the-ball-stadion-football-the-pitch-47730.jpeg');
const About = () => {
    return (
        <Container>
            <Row  id="about-container">
                <Col md="6" id="about-media">
                    <div>
                        Welcome to Indy Soccer! We are based in Indianapolis, IN and are a non profit company who's focused on providing a free "pick-up" soccer experience for adults. 
                    </div>
                    <img src={soccerBallPic} alt="aboutPic"/>
                </Col>
            </Row>
        </Container>
    )
}
export default About;

