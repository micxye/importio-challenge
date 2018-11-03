import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';

import NewItemButton from './NewItemButton';
import Item from './Item';
import reducer from './reducer';
import TopRow from './TopRow';
import RowWrapper from './RowWrapper';
import Totals from './Totals';
import { addItem } from './actions';
import {
  makeSelectItems
} from './selectors';

const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 800px;
  min-height: 100%;
  flex-direction: column;
`;

class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TopRow/>
        {this.props.items.map((item, i) => {
          console.log(item)
          return <Item key={i} item={item} index={i}/>
        })}
        <RowWrapper>
          <NewItemButton onClick={this.props.onAddItem}>New Item</NewItemButton>
        </RowWrapper>
        <Totals/>
      </HomeWrapper>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onAddItem: () => {
      const newItem = {
        name: '',
        qty: 1,
        price: 0,
        total: 0,
      };
      dispatch(addItem(newItem))
    },
    onSubmitForm: e => {
      e.preventDefault();
    },
  };
}

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
