import DashboardLayout from "../../layouts/dashboard/layout";
const DashboardPage = ({ currentUser }) => {

    return (
        <div>
          <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
          
        </div>
      );

};

DashboardPage.getInitialProps = async (context, currentUser) => {

  return {
    cssFile:'style.css'
  };

}

/*
export async function getServerSideProps(context) {
  return {
    props:{
      cssFile:'style.css'
    }
  };
}
*/
DashboardPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default DashboardPage;
