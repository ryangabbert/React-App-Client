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
    props.Games.map((games, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{games.id}</th>
                <td>{games.location_of_game}</td>
                <td>{games.time_of_game}</td>
                <td>{games.date_of_game}</td>
                <td>{games.description}</td>
                <td>
                    <Button id={games.id} onClick={props.delete} color="danger">Delete</Button>| 
                    <Button id={games.id} onClick={e => props.update(e, games)} color="warning">Update</Button>
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
