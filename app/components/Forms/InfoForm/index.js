/**
*
* InfoForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Divider, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import FormContainer from '../FormContainer';
import { GenericInput, H1 } from '../components/';
import Wrapper from '../Wrapper';

function InfoForm(props) {
  return (
    <Wrapper>
      <H1>Personal Info</H1>
      <Divider />
      <Form onSubmit={props.onSubmit}>
        <FormContainer>
          <Form.Group widths="equal">
            <Field name="info.name.first" component={GenericInput} label="First Name" type="text" />
            <Field name="info.name.last" component={GenericInput} label="Last Name" type="text" />
          </Form.Group>

          <Form.Group widths="equal">
            <Field name="info.email" component={GenericInput} label="Email" type="email" />
            <Field name="info.phone" component={GenericInput} label="Phone" type="tel" />
          </Form.Group>

          <Form.Group>
            <Field name="info.address.address" component={GenericInput} label="Address" type="text" width={14} />
            <Field name="info.address.unit-num" component={GenericInput} label="Unit #" type="text" width={2} />
          </Form.Group>

          <Form.Group>
            <Field name="info.address.city" component={GenericInput} label="City" type="text" width={12} />
            <Field name="info.address.state" component={GenericInput} label="State" type="text" width={2} />
            <Field name="info.address.zip" component={GenericInput} label="Zip" type="text" width={2} />
          </Form.Group>
        </FormContainer>
        <Button size="big" type="submit" primary>Next</Button>
      </Form>
    </Wrapper>

  );
}

InfoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(InfoForm);
