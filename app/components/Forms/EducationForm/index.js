/**
*
* EducationForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Divider, Form } from 'semantic-ui-react';
import { GenericInput, H1 } from '../components/';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';

class EducationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { prevPage } = this.props;
    return (
      <Wrapper>
        <H1>Education</H1>
        <Divider />
        <Form onSubmit={this.props.onSubmit}>
          <Form.Group>
            <Field name="education.school" component={GenericInput} label="School" type="text" width={8} />
            <Field name="education.start-date" component={GenericInput} label="Start Date" type="text" width={4} />
            <Field name="education.end-date" component={GenericInput} label="End Date" type="text" width={4} />
          </Form.Group>
          <Form.Group>
            <Field name="education.degree" component={GenericInput} label="Degree" type="text" width={8} />
            <Field name="education.major" component={GenericInput} label="Major" type="text" width={6} />
            <Field name="education.gpa" component={GenericInput} label="GPA" type="text" width={2} />
          </Form.Group>
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
