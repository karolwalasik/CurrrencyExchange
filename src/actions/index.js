export const removeTransaction = (transactionName) => ({
  type: 'REMOVE_TRANSACTION',
  payload: {
    transactionName,
  },
});

export const addTransaction = (transactionName, transactionAmount, calculatedAmount) => ({
  type: 'ADD_TRANSACTION',
  payload: {
    transactionName,
    transactionAmount,
    calculatedAmount,
  },
});

export const changeRate = (newRate) => ({
  type: 'CHANGE_RATE',
  payload: {
    newRate,
  },
});
