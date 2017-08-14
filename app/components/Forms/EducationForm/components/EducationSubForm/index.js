/**
*
* EducationSubForm
*
*/

import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';


const EducationSubForm = ({fields}) => (
  <div>
    <button onClick={_ => fields.push({})}>Add Bar</button>
    {fields.map((name, index) => (
      <div key={index}>
        <Field name={`${name}.bar`} component='input' type='text' />
      </div>
    ))}
  </div>
)

EducationSubForm.propTypes = {

};

export default EducationSubForm;
