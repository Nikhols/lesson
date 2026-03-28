import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/store-provider';
import { GlobalStyles } from './styles/global-styles';

export const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppRouter />
      </BrowserRouter>
    </StoreProvider>
  );
};
