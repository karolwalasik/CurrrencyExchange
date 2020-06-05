import React from 'react';

import { connect } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { changeRate as changeRateAction } from 'actions';
import Input from 'components/atoms/Input/Input';

class ExchangeRate extends React.Component {
  state = {
    inputValue: '',
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    const { changeRate, exchangeRate } = this.props;

    return (
      <div>
        <Paragraph>Current Rate {exchangeRate}</Paragraph>
        <Paragraph>Change Rate</Paragraph>
        <Input
          value={inputValue}
          type="text"
          name="inputValue"
          onChange={(e) => this.inputChange(e)}
        />
        <Button onClick={() => changeRate(this.state.inputValue)}>OK</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  changeRate: (newRate) => dispatch(changeRateAction(newRate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);
