import React, { Component } from 'react';
import {Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap'
import {getApartments} from '../api'
import withAuth from '../components/withAuth'
import AuthService from '../services/AuthService'
import login from '../components/Login'
console.log(getApartments());


const Auth = new AuthService()

class ApartmentList extends Component {
//Alysia's code
  constructor(props){
 		super(props)
 		this.state = {
 			status: "loading",
 			apartments: []
 		}
 	}
   componentWillMount() {
 		getApartments()
 		.then(json => {
 			console.log(json);
 			this.setState({
 				status: "loaded",
 				apartments: json
 			})
 		})
 	}

  handleLogout(){ // <- Remove local storage, and redirect the user
      Auth.logout()
      this.props.history.replace('/')

    }
//Rendering using flex
/*render() {
		const { apartments } = this.state

		let listStyles = {
			display: "flex",
			justifyContent: "space-around",
			marginTop: 50
		}

		let cardStyles = {
			padding: "20px",
			border: "1px solid #545454",
			borderRadius: "3px",
			minWidth: "250px",
			textAlign: "center"
		}

		const list = apartments.map(a => {
			let url = "/apartment_lists/" //+ a.id
			return (
				<a href={url} style={cardStyles}>
					<li key={a.id}>{a.name}</li>
				</a>
			)
		})
		return (
			<main>
				<h1>This is a list of apartments</h1>
				<ul style={listStyles}>
					{list}
				</ul>
			</main>
		)
	}
}*/
  render() {
    console.log('list history', this.props);
    return (

    <div>
      <p className="App-intro">
      <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
      </p>
      <Row>
      <Col xs={12}>
              <ListGroup>
              {this.state.apartments.map((apartment, index) =>{

                return (

                  <ListGroupItem
                    key={index}
                    header={
                      <h4>Apartment# {apartment.id}</h4>
                    }>
                    <span className='apartment-location'>
                      {apartment.streetNum} {apartment.streetName} {apartment.zip}
                    </span>

                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withAuth(ApartmentList)
