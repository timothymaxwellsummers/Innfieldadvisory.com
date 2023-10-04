import '@/styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app';
import '@fontsource-variable/inter';
import '@fontsource-variable/noto-serif-georgian';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import theme from '../utils/theme';
import React, { useState } from 'react';

function InnerApp({ Component, pageProps }: AppProps) {

  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
    setMode('light');
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div style={{ 
      backgroundColor: theme.colorSchemes.light.palette.background.default,
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
    <CssVarsProvider theme={theme}>
      <InnerApp {...props} />
    </CssVarsProvider>
  );
}
