import Head from 'next/head'
//import landing from './landing.module.css';
import Link from 'next/link';

const LandingLayout = ({children}) => {
    return(
    <>
    <Head>
      <title>Survey BOILERPlate</title>
    </Head>
<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
<header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">Survey Home</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
      <Link className='nav-link active' href="/">
                Home
        </Link>
        <Link className='nav-link' href="/dashboard">
                Dashboard
        </Link>
        
      </nav>
    </div>
  </header>
  

    {children}
    <footer className="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
  </footer>


</div>      

    </>);
};

export default LandingLayout