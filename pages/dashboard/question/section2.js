import DashboardLayout from "../../../layouts/dashboard/layout"
import ActiveSection from "../../../components/activesection"
import Link from "next/link"
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import option_data from '../../../json/data.json';
import {Formik, Form, Field, FieldArray} from 'formik';
import Checkbox from "../../../components/form/checkbox";
import { useRouter } from 'next/router';
import SelectField from "../../../components/form/SelectField";

const section2=()=>{
  const ctx = useContext(CartContext);
  const router = useRouter();

//console.log(ctx.data);
  let section2 ={
    found:[],
    food_choices:[]
    
  };
  if(ctx.data.section2){
    section2 = ctx.data.section2;
  }

    return(
        <>
        <div className="card">
            <div className="card-body">

              
            <ActiveSection activetab="s2"/>
              <div className="tab-content pt-2">
                <div className="tab-pane fade show active">

                <Formik
        /*initialValues={{ employees:[] }}*/
        initialValues={{ section2 }}
        /*validationSchema={EmployeeSchema}*/

        onSubmit={values =>
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //setData(values);
              ctx.setData(values)
              router.push('section3')
              
            }, 500)
        }
   
        render={({isValid, isSubmitting,values,errors, touched, setFieldValue, setFieldTouched})=>(
            <Form>



<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">How do you found us?</legend>
    <div className="col-sm-10">

    { option_data.found && option_data.found.map((v,i)=>(
        
        <div key={i} className="form-check">

        <Field
            label={v.label}
            type="checkbox"
            component={Checkbox}
            name="section2.found"
            checked={values.section2.found.includes(v.value)}
            inputClassName='form-check-input'
            labelClassName='form-check-label'
            onChange={(e) => {
              const {checked, name} = e.target;  
                  //console.log(checked,name)
                
                  if (checked) {
  
                      setFieldValue(
                          name,
                          [...values.section2.found, v.value]
                      );
                  }else{
  
                      setFieldValue(
                          name,
                          values.section2.found.filter((val) => val !== v.value)
                      );
  
                  }
              }}
          />




        
        </div>

    ))

    }

    
    </div>
</fieldset>
{ctx.data.section1 && ctx.data.section1.gender == 1 &&
<div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Food Choices</label>
                  <div className="col-sm-8">
<SelectField
placeholder="Select food choices"
isSearchable
                                 isMulti
                                 defaultValueArray={[]}
                                 isClearable
                                 name='section2.food_choices' options={option_data.food_choices} />  

</div>
</div>
}
<div className="row mb-3">
  <label className="col-sm-2 col-form-label"></label>
  <div className="col-sm-10">
    <button type="submit" className="btn btn-primary">Submit Form</button>
  </div>
</div>
<code>
    <pre>Values: {JSON.stringify(values, null, 2)}</pre>
</code>



            </Form>
        )}

        />


<code>
                        <pre>Option Values: {JSON.stringify(ctx.data, null, 2)}</pre>
                    </code>
                  
                  <Link href="/dashboard/question/section1" className="btn btn-secondary">
        section 1
      </Link>
      <Link href="/dashboard/question/section3" className="btn btn-secondary">
        section 3
      </Link>
                </div>
                
              </div>

            </div>
          </div>
        </>
    )

}

section2.getInitialProps = async (context, currentUser) => {

    return {
      cssFile:'style.css'
    };
  
  }
section2.getLayout = function getLayout(page) {
    return (
      <DashboardLayout>
        {page}
      </DashboardLayout>
    )
  }
  
export default section2;