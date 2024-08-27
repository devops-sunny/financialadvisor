// i18n
import './locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store ,persistor } from './redux/store';

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// locales
import ThemeLocalization from './locales';
// components
import SnackbarProvider from './components/snackbar';
import { ThemeSettings, SettingsProvider } from './components/settings';
import { MotionLazyContainer } from './components/animate';
import ScrollToTop from './components/scroll-to-top';

import { AuthProvider } from './auth/JwtContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <MotionLazyContainer>
            <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeProvider>
                <ThemeSettings>
                  <ThemeLocalization>
                    <SnackbarProvider>
                      <Router />
                    </SnackbarProvider>
                  </ThemeLocalization>
                </ThemeSettings>
              </ThemeProvider>
              </PersistGate>
              </ReduxProvider>
            </MotionLazyContainer>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </AuthProvider>
  );
}
