import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';
class GamesCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            location_of_game: '',
            time_of_game: '',
            date_of_game: '',
            description: ''
        };
    }
    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APUURL}/api/games/creategame`, {
            method: 'POST',
            body: JSON.stringify({Games:this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((gamesData) => {
                // after we create a log we want to pull that data from the server.
                this.props.updateGamesArray()
                this.setState({
                    id: '',
                    location_of_game: '',
                    time_of_game: '',
                    date_of_game: '',
                    description: ''
                })
            })
    }
    render() {
        return (
            <div>
                <h3>Create a Game</h3>
                <hr />
                <Form onSubmit={this.handlesubmit} >
                    <FormGroup>
                        <Label for="location_of_game">Location</Label>
                        <Input id="location_of_game" type="text" name="location_of_game" value={this.state.location} placeholder="enter location" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="time_of_game">Time</Label>
                        <Input id="time_of_game" type="time" name="time" value={this.state.time} placeholder="enter time of game" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date_of_game">Date</Label>
                        <Input id="date_of_game" type="date" name="date" value={this.state.date} placeholder="enter date of game" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default GamesCreate;