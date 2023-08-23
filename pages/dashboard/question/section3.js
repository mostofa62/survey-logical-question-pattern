import DashboardLayout from "../../../layouts/dashboard/layout"
import ActiveSection from "../../../components/activesection"
import Link from "next/link"

import { useContext } from "react";
import CartContext from "../../../store/cart-context";


const section3=()=>{

  const ctx = useContext(CartContext);
  //console.log(ctx.data);

    return(
        <>
        <div className="card">
            <div className="card-body">

              
            <ActiveSection activetab="s3"/>
              <div className="tab-content pt-2">
                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="profile-tab">
                <code>
                        <pre>Option Values: {JSON.stringify(ctx.data, null, 2)}</pre>
                    </code>
                  
                  <Link href="/dashboard/question/section2" className="btn btn-secondary">
        section 2
      </Link>
      
                </div>
                
              </div>

            </div>
          </div>
        </>
    )

}

section3.getInitialProps = async (context, currentUser) => {

    return {
      cssFile:'style.css'
    };
  
  }
section3.getLayout = function getLayout(page) {
    return (
      <DashboardLayout>
        {page}
      </DashboardLayout>
    )
  }
  
export default section3;