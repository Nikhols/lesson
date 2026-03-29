import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/store-provider';
import { AppThemeProvider } from './providers/theme-provider';
import { GlobalStyles } from './styles/global-styles';

export const App = () => {
  return (
    <StoreProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppRouter />
        </BrowserRouter>
      </AppThemeProvider>
    </StoreProvider>
  );
};
