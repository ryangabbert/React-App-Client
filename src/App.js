import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Main from './components/site/Main'
class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         sessionToken: ''
    //     }
    // }
    // componentWillMount() {
    //     const token = localStorage.getItem('token');
    //     if (token && !this.state.sessionToken) {
    //         this.setState({ sessionToken: token });
    //     }
    // }
    // setSessionState = (token) => {
    //     localStorage.setItem('token', token);
    //     this.setState({ sessionToken: token });
    // }
    logout = () => {
      this.setState({ 
        sessionToken: '', 
      });
      localStorage.clear();
    }
  
  render() {
    return (
      <div>
          <Header clickLogout={this.logout} />
          <Main />
          <Footer />
         </div>
    );
  }
}

//  class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         sessionToken: '',
//       }
//     }
//     componentWillMount() {
//       const token = localStorage.getItem('token')
//       if (token && !this.state.sessionToken) {
//         this.setState({ sessionToken: token });
//       }
//     }
//     setSessionState = (token) => {
//       localStorage.setItem('token', token);
//       this.setState({ sessionToken: token });
//     }
//     logout = () => {
//       this.setState({ sessionToken: ''});
//       localStorage.clear();
//     }
//     protectedViews = () => {
//       if (this.state.sessionToken === localStorage.getItem('token')) {
//         return (
//           <Switch>
//             <Route path='/' exact>
//               <Splash sessionToken={this.state.sessionToken} />
//             </Route>
//           </Switch>
//         )
//       } else {
//         return (
//           <Route path="/auth" >
//             <Auth setToken={this.setSessionState}/>
//           </Route>
//         )
//       }
//     }
//     render() {
//       return (
//         <Router>
//           <div>
//             {this.protectedViews()}
//           </div>
//         </Router>
//       );
//     }
//   }
  export default App;