import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApartmentList from '../pages/ApartmentList'
import ApartmentDetail from '../pages/ApartmentDetail'
import { getApartments } from '../api/index.js'
import Login from '../components/Login'
import withAuth from './withAuth'
import AuthService from '../services/AuthService'

/*const Auth = new AuthService()*/

class App extends Component {

constructor(props){
    super(props)
    this.state = {
        apartments: []
    }
  }

componentWillMount() {
    getApartments()
    .then(APIapartments => {
        this.setState({
            apartments: APIapartments
        })
    })
  }
/*handleLogout(){ // <- Remove local storage, and redirect the user
    Auth.logout()
    this.props.history.replace('/login')
  }*/


  render() {
    return (

        <div>
          <header><h1>Test</h1></header>
            <Router>
                <Switch>

                    <Route exact path="/" render={(props) => <ApartmentList apartments={this.state.apartments}/>} />

                    <Route exact path="/ApartmentDetail" component={ApartmentDetail} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>

        </div>
    );
  }
}

/*<p className="App-intro">
<button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
</p>*/
export default App;
