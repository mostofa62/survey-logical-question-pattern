//import Link from 'next/link';
import LandingLayout from "../layouts/landing";
const LandingPage = ({ currentUser }) => {
  

  return (
    <main className="px-3">
      <h1>SURVEY BOILER PLATE {currentUser}</h1>
      
    </main>
  );
};

LandingPage.getInitialProps = async (context, currentUser) => {
  //const { data } = await client.get('/api/tickets');
  console.log(currentUser);
  //return { tickets: data };
  return {
    bodyClass:'d-flex h-100 text-center text-white bg-dark',
    htmlClass:'h-100',
    cssFile:'cover.css'
  };
};

/*
export async function getServerSideProps(context) {
  return {
    props: {
      bodyClass:'d-flex h-100 text-center text-white bg-dark',
    htmlClass:'h-100',
    cssFile:'cover.css'
    }, // will be passed to the page component as props
  };
}*/
/*
export async function getStaticProps() {
  return { props: { bodyClass: '.body' } };
}*/


LandingPage.getLayout = function getLayout(page) {
  return (
    <LandingLayout>
      {page}
    </LandingLayout>
  )
}

export default LandingPage;
