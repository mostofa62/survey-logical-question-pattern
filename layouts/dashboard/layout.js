import Head from 'next/head'
import { useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'; // Add this line

//import landing from './landing.module.css';
import Link from 'next/link';
import Header from './header.js';
import Sidebar from './sidebar';
import Footer from './footer.js';

const DashboardLayout = ({children}) => {
  /*
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);*/
    return(
    <>
    <Head>
      <title>Dashboard</title>

    </Head>

<Header/>
<Sidebar/>

<main id="main" className="main">
  {children}
</main>
<Footer/>
<Link href="#" className="back-to-top d-flex align-items-center justify-content-center">
  <i className="bi bi-arrow-up-short"></i>
  </Link>

  
  
    </>);
};

export default DashboardLayout