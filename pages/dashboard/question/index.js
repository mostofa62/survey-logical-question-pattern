import Link from "next/link";
import DashboardLayout from "../../../layouts/dashboard/layout";
const Question = ()=>{
return(
    <>
    <div className="pagetitle">
      <h1>Question</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <section className="section dashboard">
    <div className="row">

      <div className="col-lg-8">
      <Link href="/dashboard/question/section1" className="btn btn-secondary">
        start
      </Link>
      </div>
      <div className="col-lg-8">
      <Link href="/dashboard/squestion/section1" className="btn btn-secondary">
        start squestion
      </Link>
      </div>
    </div>

    </section>
    </>
    
);
}

Question.getLayout = function getLayout(page) {
    return (
      <DashboardLayout>
        {page}
      </DashboardLayout>
    )
  }

  Question.getInitialProps = async (context, currentUser) => {

    return {
      cssFile:'style.css'
    };
  
  }
  

export default Question;