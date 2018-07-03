import React from 'react';
import GamesCreate from './GamesCreate';
import GamesTable from './GamesTable';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../../helpers/environment';
class GamesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Games: []
    }
  }
  componentWillMount() {
    this.fetchGames()
  }
  fetchGames = () => {
    fetch(`'${APIURL}/api/games/getall'`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((gameData) => {
        return this.setState({Games:gameData })
      })
  }
  GamesDelete = (event) => { //1 
    fetch(`'${APIURL}/api/games/deletegame'`, {
      method: 'DELETE', //2
      body: JSON.stringify({ Games: { id: event.target.id } }), //3
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token //4
      })
    })
      .then((res) => this.fetchGames()) //5 
  }
  render() {
    const games = this.state.Games.length >= 1 ?
    <GamesTable Games={this.state.Games} delete={this.GamesDelete} update={this.setUpdatedGames} /> :
    <h2>Log a game to see table</h2>
    return (
      <Container>
        <Row>
          <Col md="3">
          <GamesCreate token={this.props.token} updateGamesArray={this.fetchGames}/>
          </Col>
          <Col md="9">
            {games}
          </Col>
        </Row>
      </Container>
    )
  }
}
export default GamesList;