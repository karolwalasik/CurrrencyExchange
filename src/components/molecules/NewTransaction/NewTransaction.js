import React from 'react';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { calculateAmount } from 'utils/calculateAmount';
import { addTransaction as addTransactionAction } from 'actions/index';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

class NewTransaction extends React.Component {
  state = {
    transactionNameInput: '',
    transactionValue: '',
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clear = () => {
    this.setState({
      transactionNameInput: '',
      transactionValue: '',
    });
  };

  render() {
    const { transactionValue, transactionNameInput } = this.state;
    const { exchangeRate, addTransaction } = this.props;
    const calculated = calculateAmount(transactionValue, exchangeRate);

    return (
      <div>
        <Paragraph>Add New Transaction</Paragraph>
        <Input
          value={transactionNameInput}
          type="text"
          name="transactionNameInput"
          onChange={(e) => this.inputChange(e)}
          placeholder="name"
        />
        <Input
          value={transactionValue}
          type="text"
          name="transactionValue"
          onChange={(e) => this.inputChange(e)}
          placeholder="amount"
        />
        <Button
          onClick={() => {
            addTransaction(transactionNameInput, transactionValue, calculated);
            this.clear();
          }}
          addButton
        >
          +
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transactionName, transactionAmount, calculatedAmount) =>
    dispatch(addTransactionAction(transactionName, transactionAmount, calculatedAmount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
