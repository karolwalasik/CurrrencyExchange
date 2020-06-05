const initialState = {
  exchangeRate: 4.44,
  transactions: [{ name: 'transaction one', amount: 0 }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions.filter((item) => item.name !== action.payload.transactionName),
        ],
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            name: action.payload.transactionName,
            amount: action.payload.transactionAmount,
            calculatedAmount: action.payload.calculatedAmount,
          },
        ],
      };
    case 'CHANGE_RATE':
      return {
        ...state,
        exchangeRate: action.payload.newRate,
      };
    default:
      return state;
  }
};

export default rootReducer;
