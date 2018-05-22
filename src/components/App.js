import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApartmentList from '../pages/ApartmentList'
import ApartmentDetail from '../pages/ApartmentDetail'
import { getApartments } from '../api/index.js'
import Login from '../components/Login';

class App extends Component {
  /*constructor(props){
      super(props)
      this.state = {
        apartments: [
          {
            id: 1,
            streetName: 'Beryl',
            streetNum: '1333',
            city: 'San Diego',
            zip: '92109',
            state: 'CA',
            manager:  'Fat Bluto',
            managerNum: '888-555-3232',
            managerHours: '8am-2pm'
          },
          {
            id: 2,
            streetName: 'Beryl',
            streetNum: '11333',
            city: 'San Diego',
            zip: '92109',
            state: '1CA',
            manager:  'Fat1 Bluto',
            managerNum: '1888-555-3232',
            managerHours: '8am-2pm'
          }
        ]
      }
    }
*/





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

  render() {
    return (
        <div>
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


export default App;
