import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
​
class GamesEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '', //1
            location_of_game: '',
            time_of_game: '',
            date_of_game: '',
            description: ''
        };
    }
    render() {
        return (
            <div>
                GamesEdit Component
            </div>
        )
    }
}
export default GamesEdit;