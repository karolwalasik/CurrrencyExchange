import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { Provider } from 'react-redux';
import { theme } from 'theme/mainTheme';
import store from 'components/store/index';
import NewTransaction from 'components/molecules/NewTransaction/NewTransaction';
import TransactionList from 'components/molecules/TransactionList/TransactionList';
import ExchangeRate from 'components/molecules/ExchangeRate/ExchangeRate';
import BiggestTransaction from 'components/molecules/BiggestTransaction/BiggestTransaction';

const TransactionWrapper = styled.div`
  display: flex;
`;

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ExchangeRate />
        <NewTransaction />
        <TransactionWrapper>
          <TransactionList />
          <BiggestTransaction />
        </TransactionWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default Root;
