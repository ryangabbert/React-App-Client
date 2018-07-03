import React from 'react';
import TeamCreate from './TeamCreate';
import TeamTable from './TeamTable';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../../helpers/environment';
class TeamList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team: []
    }
  }
  componentWillMount() {
    this.fetchTeam()
  }
  fetchTeam = () => {
    fetch(`'${APIURL}/api/team/'`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }) 
      
      .then((res) => res.json())
      .then((teamData) => {
        return this.setState({ team: teamData })
      })
  }
  TeamDelete = (event) => { 
    fetch(`${APIURL}/api/team/createteam`, {
      method: 'DELETE', 
      body: JSON.stringify({ team: { id: event.target.id } }), 
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token 
      })
    })
      .then((res) => this.fetchTeam()) 
  }
  render() {
    const team = this.state.team.length >= 1 ?
    <TeamTable team={this.state.team} delete={this.teamDelete} update={this.setUpdatedTeam} /> :
    <h2>Enter your players</h2>
    return (
      <Container>
        <Row>
          <Col md="3">
          <TeamCreate token={this.props.token} updateTeamArray={this.fetchTeam}/>
          </Col>
          <Col md="9">
            {team}
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TeamList;