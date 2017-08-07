/**
*
* SideBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import SectionBox from './components/SectionBox';

class SideBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { activeForm } = this.props;
    return (
      <Panel>
        <SectionBox iconName="file-text" label="resume" active={activeForm === 1}></SectionBox>
        <SectionBox iconName="address-card" label="info" active={activeForm === 2}></SectionBox>
        <SectionBox iconName="briefcase" label="work" active={activeForm === 3}></SectionBox>
        <SectionBox iconName="graduation-cap" label="education" active={activeForm === 4}></SectionBox>
        <SectionBox iconName="ellipsis-h" label="additional"></SectionBox>
        <SectionBox iconName="users" label="references"></SectionBox>
        <SectionBox iconName="thumbs-up" label="review"></SectionBox>
      </Panel>
    );
  }
}

SideBar.propTypes = {
  activeForm: PropTypes.number,
};

export default SideBar;
