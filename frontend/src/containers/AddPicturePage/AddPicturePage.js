import React, {Component, Fragment} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {postPicture} from "../../store/actions/picturesActions";
import {connect} from "react-redux";

class AddPicturePage extends Component {
  state = {
    name: '',
    image: '',
  };

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  fileChangeHandler = event => {
    this.setState({[event.target.name]: event.target.files[0]})
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      const value = this.state[key];

      formData.append(key, value)
    });

    this.props.postPicture(formData);
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmitHandler}>
          <FormElement
            propertyName="name"
            title="Picture Name"
            type="text"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            required
          />
          <FormElement
            propertyName="image"
            title="Picture File"
            type="file"
            onChange={this.fileChangeHandler}
            required
          />
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="success" color="primary">
                Create
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postPicture: pictureData => dispatch(postPicture(pictureData))
});

export default connect(null, mapDispatchToProps)(AddPicturePage);