/**
*
* SideBar
*
*/

import React from 'react';

import Panel from './Panel';
import SectionBox from '../SectionBox';

class SideBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel>
        <SectionBox iconName="file-text" label="resume"></SectionBox>
        <SectionBox iconName="address-card" label="info"></SectionBox>
        <SectionBox iconName="briefcase" label="work"></SectionBox>
        <SectionBox iconName="graduation-cap" label="education"></SectionBox>
        <SectionBox iconName="ellipsis-h" label="additional"></SectionBox>
        <SectionBox iconName="users" label="references"></SectionBox>
        <SectionBox iconName="thumbs-up" label="review"></SectionBox>
      </Panel>
    );
  }
}

SideBar.propTypes = {

};

export default SideBar;
