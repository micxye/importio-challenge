import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import TotalsLineWrapper from './TotalsLineWrapper';
import PercentSign from './PercentSign';
import PercentInput from './PercentInput';
import GrandTotalWrapper from './GrandTotalWrapper';
import { changeTax } from './actions';
import {
  makeSelectSubtotal,
  makeSelectTaxpercent,
  makeSelectTaxtotal,
  makeSelectGrandtotal,
} from './selectors';

const TotalsWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 105px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px dotted black;
  border-bottom: 1px dotted black;
  flex-direction: column;
  float: right;
  align-self: flex-end;
`;

class Totals extends React.PureComponent {
  render() {
    const { subtotal, taxpercent, taxtotal, grandtotal, onChangeTax } = this.props;
    return (
      <TotalsWrapper>
        <TotalsLineWrapper>
            <div>Subtotal</div>
            <div>${subtotal}</div>
        </TotalsLineWrapper>
        <TotalsLineWrapper>
            <div>Tax
              <PercentSign>
                <PercentInput
                  value={taxpercent}
                  onChange={onChangeTax}
                  type="number"
                />%
              </PercentSign>
            </div>
            <div>${taxtotal}</div>
        </TotalsLineWrapper>
        <GrandTotalWrapper>
            <div>Total</div>
            <div>${grandtotal}</div>
        </GrandTotalWrapper>
      </TotalsWrapper>
    );
  }
}

Totals.propTypes = {
  onChangeTax: PropTypes.func,
  items: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTax: e => {
      dispatch(changeTax(e.target.value))
    },
  };
}

const mapStateToProps = createStructuredSelector({
  subtotal: makeSelectSubtotal(),
  taxpercent: makeSelectTaxpercent(),
  taxtotal: makeSelectTaxtotal(),
  grandtotal: makeSelectGrandtotal(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Totals);
