/**
*
* WorkSubForm
*
*/

import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import FormContainer from './FormContainer';
import { GenericInput, AddFormButton, RemoveSubFormButton } from '../../../components/';


const WorkSubForm = ({ fields }) => (
  <div>
    <AddFormButton
      content="Add Work History"
      onClick={() => fields.push({})}
    />
    {fields.map((name, idx) => (
      <FormContainer key={idx}>
        <RemoveSubFormButton onClick={() => fields.remove(idx)} />
        <Form.Group>
          <Field name={`${name}.company`} component={GenericInput} label="Company" type="text" width={8} />
          <Field name={`${name}.start-date`} component={GenericInput} label="Start Date" type="date" width={4} />
          <Field name={`${name}.end-date`} component={GenericInput} label="End Date" type="date" width={4} />
        </Form.Group>
        <Form.Group>
          <Field name={`${name}.position`} component={GenericInput} label="Position" type="text" width={8} />
        </Form.Group>
        <Form.Group>
          <div className="responsibilities-textarea">
            Responsibilties
            <Field name={`${name}.responsibilities`} component="textarea" />
          </div>
        </Form.Group>
      </FormContainer>
    ))}
  </div>
);

WorkSubForm.propTypes = {
  fields: PropTypes.object,
};

export default WorkSubForm;
