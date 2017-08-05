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


function SectionBox(props) {
  return (
    <Wrapper>
      <FontAwesome name={props.iconName} />
      <Label>{props.label}</Label>
    </Wrapper>
  );
}

SectionBox.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string,
};

export default SectionBox;
