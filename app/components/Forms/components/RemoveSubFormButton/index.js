/**
*
* RemoveSubFormButton
*
*/

import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Button from './Button';


function RemoveSubFormButton(props) {
  const { onClick } = props;
  return (
    <Button type="button" onClick={onClick} className="remove-button">
      <Icon name="remove" color="grey" />
    </Button>
  );
}

RemoveSubFormButton.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveSubFormButton;
