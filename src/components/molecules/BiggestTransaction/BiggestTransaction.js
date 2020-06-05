import React from 'react';
import { connect } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import { calculateAmount } from 'utils/calculateAmount';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
  flex-direction: column;
`;

const BiggestTransaction = ({ transactions, exchangeRate }) => {
  const biggest = transactions.reduce(
    (max, current) => {
      return current.amount >= max.amount ? current : max;
    },
    { amount: 0 },
  );

  return (
    <Wrapper>
      <Paragraph>Biggest Transaction</Paragraph>
      <Paragraph>
        {biggest.name} {biggest.amount} {calculateAmount(biggest.amount, exchangeRate)}
      </Paragraph>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BiggestTransaction);
