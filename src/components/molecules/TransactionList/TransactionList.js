import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { removeTransaction as removeTransactionAction } from 'actions';
import { calculateAmount } from 'utils/calculateAmount';
import Heading from 'components/atoms/Heading/Heading';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionList = ({ exchangeRate, transactions, removeTransaction }) => {
  let sum = 0;
  return (
    <div>
      <Heading>Transaction List</Heading>
      {transactions.map(({ amount, name }) => {
        sum += Number(amount);
        return (
          <Wrapper key={name}>
            <Paragraph>
              {name} {amount} {calculateAmount(amount, exchangeRate)}
            </Paragraph>
            <Button onClick={() => removeTransaction(name)} removeButton>
              -
            </Button>
          </Wrapper>
        );
      })}
      <Paragraph bold>Transactions sum in EUR {sum}</Paragraph>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  removeTransaction: (transactionName) => dispatch(removeTransactionAction(transactionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
