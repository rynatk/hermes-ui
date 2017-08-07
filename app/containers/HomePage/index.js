/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import SideBar from 'components/SideBar';
import { InfoForm, WorkForm, EducationForm } from 'components/Forms';
import FormWrapper from './FormWrapper';
import Container from './Container';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.state = {
      page: 2,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  prevPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <Container>
        <SideBar activeForm={page}></SideBar>
        <FormWrapper>
          {page === 2 && <InfoForm onSubmit={this.nextPage} />}
          {page === 3 && <WorkForm onSubmit={this.nextPage} prevPage={this.prevPage} />}
          {page === 4 && <EducationForm onSubmit={this.nextPage} prevPage={this.prevPage} />}
        </FormWrapper>
      </Container>
    );
  }
}
