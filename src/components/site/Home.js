import React from 'react';
import { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

var soccerPic = require ('../../assets/the-ball-stadion-football-the-pitch-46792 (1).jpeg');


export default class Home extends Component {
    render() {
        return (
            <div>
            <Jumbotron fluid>
              <Container fluid id="jumbotron">
                <h1 className="display-3">Welcome to Indy Soccer!</h1>
                <img src={soccerPic} alt="jumbotronPic"/>
              </Container>
            </Jumbotron>
          </div>
        );
      };
      
    };
