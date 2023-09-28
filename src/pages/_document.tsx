// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getInitColorSchemeScript } from '@mui/joy/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html data-color-scheme="light">
        <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
