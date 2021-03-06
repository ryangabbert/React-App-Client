import React from 'react';
import GamesCreate from './GamesCreate';
import GamesTable from './GamesTable';
import GamesEdit from './GamesEdit';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../../helpers/environment';
class GamesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Games: [],
      updatePressed: false,
      GamesToUpdate: {}

    }
  }
  componentWillMount() {
    this.fetchGames()
  }
  fetchGames = () => {
    fetch(`${APIURL}/api/games/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((gamesData) => {
        return this.setState({Games:gamesData })
      })
  }
  GamesDelete = (event) => {
    fetch(`${APIURL}/api/games/delete`, {
      method: 'DELETE', //2
      body: JSON.stringify({ Games: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token 
      })
    })
      .then((res) => this.fetchGames()) 
  }
  GamesUpdate = (event, games) => {
    fetch(`${APIURL}/api/games/updategame`, {
      method: 'PUT',
      body: JSON.stringify({ Games: games }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => {
      this.setState({ updatePressed: false })
      this.fetchGames();
    })
  }
  setUpdatedGames = (event, games) => {
    this.setState({
        GamesToUpdate: games, //2
        updatePressed: true //1
    })
}

  render() {
    const Games = this.state.Games.length >= 1 ?
    <GamesTable Games={this.state.Games} delete={this.GamesDelete} update={this.setUpdatedGames} /> :
    <h2>Log a game to see table</h2>
    return (
      <Container>
        <Row>
          <Col md="3">
          <GamesCreate token={this.props.token} updateGamesArray={this.fetchGames}/>
          </Col>
          <Col md="9">
            {Games}
          </Col>
        </Row>
        <Col md="12">  
          {
            this.state.updatePressed ? <GamesEdit t={this.state.updatePressed} update={this.GamesUpdate} Games={this.state.GamesToUpdate} /> 
            : <div></div>
          }
        </Col>
      </Container>
    )
  }
}
export default GamesList;