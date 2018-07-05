import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
class GamesEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            location_of_game: '',
            time_of_game: '',
            date_of_game: '',
            description: ''
        };
    }
    componentWillMount() {
        this.setState({
            location_of_game: this.props.Games.location_of_game,
            time_of_game: this.props.Games.time_of_game,
            date_of_game: this.props.Games.date_of_game,
            description: this.props.Games.description
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }
    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Update a Game</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <Input id="location" type="text" name="location_of_game" value={this.state.location} placeholder="enter location" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="time">Time</Label>
                                <Input id="time" type="text" name="time_of_game" value={this.state.time} onChange={this.handleChange} placeholder="enter time">
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input id="date" type="text" name="date_of_game" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default GamesEdit;
