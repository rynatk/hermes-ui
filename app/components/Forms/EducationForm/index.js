/**
*
* EducationForm
*
*/

import React from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import { H1 } from '../components';


class EducationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { prevPage } = this.props;
    return (
      <Wrapper>
        <H1>Education</H1>
        <Divider />
        Build me plz.
        <Form onSubmit={this.props.onSubmit}>
          <Button size="big" type="button" onClick={prevPage}>Previous</Button>
          <Button size="big" type="submit" primary>Next</Button>
        </Form>
      </Wrapper>
    );
  }
}

EducationForm.propTypes = {
  onSubmit: PropTypes.func,
  prevPage: PropTypes.func,
};

export default EducationForm;
