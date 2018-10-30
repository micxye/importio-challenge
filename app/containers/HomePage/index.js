import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';

import TopRow from './TopRow';

const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 800px;
  min-height: 100%;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TopRow/>
      </HomeWrapper>
    );
  }
}
