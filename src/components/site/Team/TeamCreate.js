import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../../helpers/environment';
class TeamCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            player_name: '',
            position: '',
            email: ''
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
        fetch(`${APIURL}/api/team/createteam`, {
            method: 'POST',
            body: JSON.stringify({ team: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((teamData) => {
                // after we create a log we want to pull that data from the server.
                this.props.updateTeamArray()
                this.setState({
                    id: '',
                    player_name: '',
                    position: '',
                    email: ''
                })
            })
    }
    render() {
        return (
            <div>
                <h3>Add Players</h3>
                <hr />
                <Form onSubmit={this.handlesubmit} >
                    <FormGroup>
                        <Label for="player_name">Name</Label>
                        <Input id="name" type="text" name="player_name" value={this.state.player_name} placeholder="enter name" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="position">Position</Label>
                        <Input id="position" type="text" name="position" value={this.state.position} placeholder="enter position" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" name="email" value={this.state.email} placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default TeamCreate;