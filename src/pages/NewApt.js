import React, { Component } from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  HelpBlock,
  FormGroup,
  FormControl,
  Row,
  Grid
} from 'react-bootstrap'

class NewApt extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
       streetName: '',
       streetNum: '',
       city: '',
       zip: '',
       state: '',
       manager: '',
       managerNum: '',
       managerHours: '',
      avatar_base: null
      }
    }
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  // ** This is a new function to base64 encode the file
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // ** A custom handler for file uploads
  fileChangeHandler(event){
    const file = event.target.files[0]
    this.getBase64(file).then( (fileString) => {
      const formState = Object.assign({}, this.state.form)
      formState.avatar_base = fileString
      this.setState({form: formState})
    })
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors && this.props.errors[attribute]){
      const errors = this.props.errors[attribute]
      if(errors){
        errorString = errors.join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <Grid>
      <form>
        <Row>
          <Col xs={3}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again.
              </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="name-form-group"
              validationState={this.errorsFor('name') && 'error'}>
              <ControlLabel id="streetNum">Street Number</ControlLabel>
              <FormControl
                type="number"
                name="streetNum"
                value={this.state.form.streetNum}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('streetNum') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="streetName">Street Name</ControlLabel>
              <FormControl
                type="text"
                name="streetName"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.enjoys}
              />
            </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="zip">Zip</ControlLabel>
              <FormControl
                type="number"
                name="zip"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="state">state</ControlLabel>
              <FormControl
                type="text"
                name="state"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="manager">manager</ControlLabel>
              <FormControl
                type="text"
                name="manager"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="managerNum">Manager Number</ControlLabel>
              <FormControl
                type="text"
                name="managerNum"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
              />
            </FormGroup>
          </Col>
        </Row>


                <Row>
                  <Col xs={6}>
                    <FormGroup>
                      <ControlLabel id="managerHours">Manager Hours</ControlLabel>
                      <FormControl
                        type="text"
                        name="managerHours"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.form.age}
                      />
                    </FormGroup>
                  </Col>
                </Row>


        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="avatar">Image</ControlLabel>
              <input
                type="file"
                onChange={this.fileChangeHandler.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button
              id="submit"
              onClick={this.handleSubmit.bind(this)}
            >Create Apt Profile</Button>
          </Col>
        </Row>

      </form>
    </Grid>
    )
  }
}

export default NewApt
