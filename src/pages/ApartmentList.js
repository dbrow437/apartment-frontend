import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class ApartmentList extends Component {
  render() {
    return (
      <Row>
      <Col xs={12}>
              <ListGroup>
              {this.props.apartments.map((apartment, index) =>{
                  
                return (
                  <ListGroupItem
                    key={index}
                    header={
                      <h4>
                        <span className='apartment-street'>
                          {apartment.street}
                        </span>
                        - <small className='apartment-number'>{apartment.number} years old</small>
                      </h4>
                    }>
                    <span className='apartment-zip'>
                      {apartment.zip}
                    </span>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
    );
  }
}

export default ApartmentList;
