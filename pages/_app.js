//import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import CartProvider from '../store/CardProvider';
//import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
  <CartProvider>  
  <Component {...pageProps} />
  </CartProvider>
  );

};

AppComponent.getInitialProps = async (appContext) => {
  
  const client = buildClient(appContext.ctx);
  //const { data } = await client.get('/api/users/currentuser');
  //*/
  let pageProps = {};
  
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      //data.currentUser
    );
  }
  
  return {
    pageProps,
    //...data,
    //currentUser:'Mostofa'
  };
};

export default AppComponent;
