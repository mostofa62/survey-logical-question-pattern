//library
import Link from "next/link"
import {Field, FieldArray ,useFormikContext} from 'formik';
import Checkbox from "../../../components/form/checkbox";
import SelectField from "../../../components/form/SelectField";

//Layout
import FormikLayout from "../../../layouts/dashboard/formik-layout";

//Data
import option_data from '../../../json/data.json';

//Logical On Off
import { disable_logic } from "../../../api/logic-checker";

const section2=()=>{

  const { isValid, isSubmitting,values,errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

    return(
        <>
        


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

{values.section1.gender == 1 &&

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

{errors.section2 &&
                                        
                                        errors.section2.food_choices &&
                                        touched.section2 &&
                                        
                                        touched.section2.food_choices && ( 
                                            <span>
                                                {errors.section2.food_choices}
                                            </span>   
                                        )}

</div>
</div>

}
<code>
    <pre>Values: {JSON.stringify(values, null, 2)}</pre>
    <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                    <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
</code>





                  
                  <Link href="/dashboard/squestion/section1" className="btn btn-secondary">
        section 1
      </Link>
      <Link href="/dashboard/squestion/section3" className="btn btn-secondary">
        section 3
      </Link>
                
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
      <FormikLayout>
        {page}
      </FormikLayout>
    )
  }
  
export default section2;