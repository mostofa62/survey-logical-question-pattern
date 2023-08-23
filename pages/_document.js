import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document(props) {
  const pageProps = props?.__NEXT_DATA__?.props?.pageProps;
//console.log(pageProps);
  return (
    <Html className={pageProps?.htmlClass}>
      <Head>
      <link href="/img/favicon.png" rel="icon" />
  <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
  <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css"  />
<link rel="stylesheet" href="/vendor/bootstrap-icons/bootstrap-icons.css"  />
<link rel="stylesheet" href="/vendor/boxicons/css/boxicons.min.css"  />
<link rel="stylesheet" href="/vendor/remixicon/remixicon.css"  />
<link rel="stylesheet" href={`/css/${pageProps.cssFile}`}  />



      </Head>
      <body className={pageProps?.bodyClass}>
        <Main />
        <NextScript />
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/js/main.js"></script>

      </body>
    </Html>
  );
}
