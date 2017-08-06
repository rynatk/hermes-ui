/**
*
* SectionBox
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Label from './Label';
import Badge from './Badge';


function SectionBox(props) {
  return (
    <Wrapper {...props}>
      {props.formModified &&
        <Badge valid={props.valid}><FontAwesome name={props.valid ? 'check' : 'exclamation'} /></Badge>
      }
      <FontAwesome name={props.iconName} />
      <Label formModified={props.formModified}>{props.label}</Label>
    </Wrapper>
  );
}

SectionBox.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  formModified: PropTypes.bool,
  valid: PropTypes.bool,
};

export default SectionBox;
