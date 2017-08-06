/**
*
* GenericInput
*
*/

import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';


function GenericInput(props) {
  return (
    <Form.Input
      label={props.label}
      type={props.type}
      value={props.input.value}
      onChange={(param, data) => props.input.onChange(data.value)}
      width={props.width}
    />
  );
}

GenericInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  onChange: PropTypes.function,
  width: PropTypes.number,
};

export default GenericInput;
