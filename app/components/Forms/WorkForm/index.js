/**
*
* WorkForm
*
*/

import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable';
import { Button, Divider, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import { H1 } from '../components';
import WorkSubForm from './components/WorkSubForm';


class WorkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { prevPage } = this.props;
    return (
      <Wrapper>
        <H1>Work History</H1>
        <Divider />
        <Form onSubmit={this.props.onSubmit}>
          <FieldArray name="work" component={WorkSubForm} />
          <Button size="big" type="button" onClick={prevPage}>Previous</Button>
          <Button size="big" type="submit" primary>Next</Button>
        </Form>
      </Wrapper>
    );
  }
}

WorkForm.propTypes = {
  onSubmit: PropTypes.func,
  prevPage: PropTypes.func,
};

export default reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  initialValues: {
    workHistory: [{}],
  },
  forceUnregisterOnUnmount: true,
})(WorkForm);
