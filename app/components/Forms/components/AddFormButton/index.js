import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';


function AddFormButton(props) {
  const { onClick, content } = props;
  return (
    <Wrapper>
      <Button
        type="button"
        icon="add"
        content={content}
        basic
        fluid
        color="teal"
        className="add-form"
        onClick={onClick}
      />
    </Wrapper>
  );
}

AddFormButton.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddFormButton;
