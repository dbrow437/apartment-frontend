import React, { Component } from 'react';
import {Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap'
import {getApartments} from '../api'

console.log(getApartments());



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
    return (
    
    <div>
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

export default ApartmentList;
