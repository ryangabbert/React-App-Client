import React from 'react';
import { Table, Button } from 'reactstrap';
const TeamTable = (props) => { 
    return (
        <div>
            <h3>Your Squad</h3>
            <hr />
            <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
    props.team.map((team, id) => { 
        return ( 
            <tr key={id}>
                <th scope="row">{team.id}</th>
                <td>{team.player_name}</td>
                <td>{team.position}</td>
                <td>{team.email}</td>
                <td>
                    <Button id={team.id} onClick={props.delete} color="danger">Delete</Button>| 
                    <Button id={team.id} onClick={e => props.update(e, team)} color="warning">Update</Button>
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
export default TeamTable;
