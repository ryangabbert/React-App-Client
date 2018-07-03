import React from 'react';
import { Table, Button } from 'reactstrap';
const GamesTable = (props) => { 
    return (
        <div>
            <h3>Game Schedule</h3>
            <hr />
            <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
    props.Games.map((game, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{game.id}</th>
                <td>{game.location_of_game}</td>
                <td>{game.time_of_game}</td>
                <td>{game.date_of_game}</td>
                <td>{game.description}</td>
                <td>
                    <Button id={game.id} onClick={props.delete} color="danger">Delete</Button>| 
                    <Button id={game.id} onClick={e => props.update(e, game)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}
            </tbody>
        </Table>
    </div>
    );
}
export default GamesTable;
