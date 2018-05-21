import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApartmentList from ./pages/ApartmentList
import ApartmentDetail from ./pages/ApartmentDetail


class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={ApartmentList} />
                    <Route exact path="/ApartmentDetail" component={ApartmentDetail} />
                </Switch>
            </Router>
        </div>
    );
  }
}


export default App;
