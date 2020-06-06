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

class BiggestTransaction extends React.Component {
  state = {
    biggest: {},
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.transactions !== this.props.transactions ||
      prevProps.exchangeRate !== this.props.exchangeRate
    ) {
      let biggest = this.biggest(this.props.transactions);
      this.setState({
        biggest,
      });
    }
  }

  biggest = (transactions) => {
    return transactions.reduce(
      (max, current) => {
        return current.amount >= max.amount ? current : max;
      },
      { amount: 0 },
    );
  };

  render() {
    const { biggest } = this.state;
    return (
      <Wrapper>
        <Paragraph>Biggest Transaction{this.biggest.name}</Paragraph>
        {biggest.amount && (
          <Paragraph>
            {`${biggest.name} ${biggest.amount} ${calculateAmount(
              biggest.amount,
              Number(this.props.exchangeRate),
            )}`}
          </Paragraph>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BiggestTransaction);


