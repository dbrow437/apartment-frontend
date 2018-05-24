import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApartmentList from '../pages/ApartmentList'
import ApartmentDetail from '../pages/ApartmentDetail'
import { getApartments } from '../api/index.js'
import Login from '../components/Login'
import withAuth from './withAuth'
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class App extends Component {

constructor(props){
    super(props)
    this.state = {
        apartments: [],
        user: null
    }
  }

ccomponentWillMount(){
    const userId = Auth.getUserId()
    Auth.fetch(`http://localhost:3000/users/${userId}`).then( res => {
      this.setState({ user: res })
    })
  }

// handleLogout(){ // <- Remove local storage, and redirect the user
//     Auth.logout()
//     this.props.history.replace('/login')
//   }


  render() {
    return (

        <div>
          <header><h1>92109 Crappy Prop Management</h1>
          {this.state.user &&
          <div>
            <h2>Your Account</h2>
            <div>Name: {this.state.user.name}</div>
            <div>Email: {this.state.user.email}</div>

            <h3>Your Roles</h3>
            <ul>
              {this.state.user.roles.map( role => {
                return(
                  <li key={role.name}>{role.name}</li>
                )
              })}
            </ul>
          </div>
        }
</header>
            <Router>
                <Switch>
                  <Route exact path="/ApartmentList" component={ApartmentList}/>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/ApartmentDetail" component={ApartmentDetail} />
                </Switch>
            </Router>

        </div>
    );
  }
}
/* <Route exact path="/login" component={Login} />
  <Route exact path="/" render={(props) => <ApartmentList apartments={this.state.apartments}/>} /> */
/* <p className="App-intro">
<button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
</p>*/
export default App
