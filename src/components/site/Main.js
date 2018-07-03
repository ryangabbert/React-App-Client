import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Team from './Team';
import Splash from './Splash'
import Auth from './auth/Auth'

class Main extends Component {
      constructor() {
        super();
        this.state = {
          sessionToken: '',
        }
      }
      componentWillMount() {
        const token = localStorage.getItem('token')
        if (token && !this.state.sessionToken) {
          this.setState({ sessionToken: token });
        }
      }
      setSessionState = (token) => {
        localStorage.setItem('token', token);
        this.setState({ sessionToken: token });
      }
      protectedViews = () => {
        if (this.state.sessionToken === localStorage.getItem('token')) {
          return (
            <Switch>
              <Route path='/games' exact>
                <Splash sessionToken={this.state.sessionToken} />
              </Route>
              <Route path='/team' exact>
                <Team sessionToken={this.state.sessionToken} />
              </Route>
              <Route path='/home' exact>
                <Home sessionToken={this.state.sessionToken} />
              </Route>
              <Route path='/about' exact>
                <About sessionToken={this.state.sessionToken} />
              </Route>
            </Switch>
          )
        } else {
          return (
            <Route path="/auth" >
              <Auth setToken={this.setSessionState}/>
            </Route>
          )
        }
      }
      render() {
        return (
          <Router>
            <div>
              {this.protectedViews()}
            </div>
          </Router>
        );
      }
    }
// const Main = () => (
//     <Router>
//   <main>
//     <Switch>
//       <Route exact path='/home' component={Home}/>
//       <Route path='/about' component={About}/>
//       {/* <Route path='/team' component={Team}/> */}
//       <Route path='/games' component={Splash}/>
//       {/* <Route path='/contact' component={Contact}/> */}
//     </Switch>
//   </main>
//   </Router>
// )
export default Main;