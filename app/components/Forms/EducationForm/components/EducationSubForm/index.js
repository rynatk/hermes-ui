/**
*
* EducationSubForm
*
*/

import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import FormContainer from './FormContainer';
import { GenericInput, AddFormButton } from '../../../components/';


const EducationSubForm = ({ fields }) => (
  <div>
    <AddFormButton
      content="Add Education"
      onClick={() => fields.push({})}
    />
    {fields.map((name, idx) => (
      <FormContainer key={idx}>
        <Form.Group>
          <Field name={`${name}.school`} component={GenericInput} label="School" type="text" width={8} />
          <Field name={`${name}.start-date`} component={GenericInput} label="Start Date" type="text" width={4} />
          <Field name={`${name}.end-date`} component={GenericInput} label="End Date" type="text" width={4} />
        </Form.Group>
        <Form.Group>
          <Field name={`${name}.degree`} component={GenericInput} label="Degree" type="text" width={8} />
          <Field name={`${name}.major`} component={GenericInput} label="Major" type="text" width={6} />
          <Field name={`${name}.gpa`} component={GenericInput} label="GPA" type="text" width={2} />
        </Form.Group>
      </FormContainer>
    ))}
  </div>
);

EducationSubForm.propTypes = {
  fields: PropTypes.object,
};

export default EducationSubForm;
