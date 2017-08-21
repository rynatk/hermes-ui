/**
*
* EducationForm
*
*/

import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable';
import { Button, Divider, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import { GenericInput, H1 } from '../components/';
import EducationSubForm from './components/EducationSubForm';


class EducationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { prevPage } = this.props;
    return (
      <Wrapper>
        <H1>Education</H1>
        <Divider />
        <Form onSubmit={this.props.onSubmit}>
          <FieldArray name="education" component={EducationSubForm} />
          <Button size="big" type="button" onClick={prevPage}>Previous</Button>
          <Button size="big" type="submit" primary>Next</Button>
        </Form>
      </Wrapper>
    );
  }
}

EducationForm.propTypes = {
  onSubmit: PropTypes.func,
  prevPage: PropTypes.func,
};

export default reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EducationForm);
