/**
*
* WorkForm
*
*/

import React from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import { H1 } from '../components';

class WorkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { prevPage } = this.props;
    return (
      <Wrapper>
        <H1>Work History</H1>
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

WorkForm.propTypes = {
  onSubmit: PropTypes.function,
  prevPage: PropTypes.function,
};

export default WorkForm;
