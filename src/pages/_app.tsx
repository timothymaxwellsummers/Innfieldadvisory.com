import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource-variable/inter';
import '@fontsource-variable/noto-serif-georgian';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import theme from '../utils/theme';

function InnerApp({ Component, pageProps }: AppProps) {
  const { mode, systemMode } = useColorScheme();

  const currentMode = mode === 'system' ? systemMode : mode;

  return (
    <div style={{ 
      backgroundColor: currentMode === 'light' ? theme.colorSchemes.light.palette.background.default : theme.colorSchemes.dark.palette.background.default,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto'  // this is to ensure content can scroll if it's taller than the viewport
    }}>
      <Component {...pageProps} />
    </div>
  );
}

export default function App(props: AppProps) {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <InnerApp {...props} />
    </CssVarsProvider>
  );
}
