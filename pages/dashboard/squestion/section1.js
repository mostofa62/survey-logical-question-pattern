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


//const fetcher = (url) => fetch(url).then((res) => res.json());
const section1=()=>{

  const { isValid, isSubmitting,values,errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

    return(
        <>
        
<div className="row mb-3">
    <label htmlFor="inputText" className="col-sm-2 col-form-label">name</label>
    <div className="col-sm-10">      
      <Field className='form-control' name="section1.name" placeholder="name of person" />
      {errors.section1 &&
                                        
                                        errors.section1.name &&
                                        touched.section1 &&
                                        
                                        touched.section1.name && ( 
                                            <span>
                                                {errors.section1.name}
                                            </span>   
                                        )}
    </div>
</div>


<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
    <div className="col-sm-10">

    { option_data.gender && option_data.gender.map((v,i)=>(
        
        <div key={i} className="form-check">

        <Field
            label={v.label}
            type="radio"
            component={Checkbox}
            name="section1.gender"
            checked={values.section1.gender === v.value}
            inputClassName='form-check-input'
            labelClassName='form-check-label'
            onChange={(e) => {
            const {checked, name} = e.target;  
                //console.log(checked,name)
                disable_logic(name,v.value, setFieldValue,["not"]);
                if (checked) {

                    setFieldValue(
                        name,
                        v.value
                    );
                }else{

                    setFieldValue(
                        name,
                        null
                    );

                }
                //console.log(values);
                //ctx.setData(values);
            }}
          />
        
        </div>

    ))

    }

    
    
    </div>
    {errors.section1 &&
                                        
                                        errors.section1.gender &&
                                        touched.section1 &&
                                        
                                        touched.section1.gender && ( 
                                            <span>
                                                {errors.section1.gender}
                                            </span>   
                                        )}
</fieldset>
{values.section1.gender && values.section1.gender == 1 && 

<div className="row mb-3">
    <label htmlFor="inputText" className="col-sm-2 col-form-label">Age</label>
    <div className="col-sm-10">      
      <Field 
      type='number' 
      className='form-control' 
      name="section1.age" 
      placeholder="age of person" 
      onChange={(e) => {
          const{name,value} = e.target;
          disable_logic(name,value,setFieldValue, ["range","lt"]);
          setFieldValue(
            name,
            value
        );
      }}
      />
    </div>
</div>
}
{(values.section1.age>=18 && values.section1.age<=35) &&

<div className="row mb6-3">
                  <label className="col-sm-2 col-form-label">Food Choices</label>
                  <div className="col-sm-8">

<SelectField 
                                 placeholder="Select food Taste"
                                 isSearchable
                                 isClearable
                                  name='section1.food_choices' options={option_data.food_choices} />

</div>
</div>
}
{(values.section1.age>=36 && values.section1.age<=45) &&

<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">How do you found us?</legend>
    <div className="col-sm-10">

    { option_data.found && option_data.found.map((v,i)=>(
        
        <div key={i} className="form-check">

        <Field
            label={v.label}
            type="checkbox"
            component={Checkbox}
            name="section1.found"
            checked={values.section1.found.includes(v.value)}
            inputClassName='form-check-input'
            labelClassName='form-check-label'
            onChange={(e) => {
              const {checked, name} = e.target;  
                  //console.log(checked,name)
                
                  if (checked) {
  
                      setFieldValue(
                          name,
                          [...values.section1.found, v.value]
                      );
                  }else{
  
                      setFieldValue(
                          name,
                          values.section1.found.filter((val) => val !== v.value)
                      );
  
                  }
              }}
          />




        
        </div>

    ))

    }

    
    </div>
</fieldset>
}

{(values.section1.age>=18) &&
        
<div className="row mb-3">
  <label className="col-sm-2 col-form-label">Dress Choices</label>
  <div className="col-sm-8">
  <SelectField
    placeholder="Select Dress choices"
      isSearchable
      isMulti
      defaultValueArray={[]}
      isClearable
      name='section1.dress_code' options={option_data.dress_codes} />  

</div>
</div>
}
<code>
                        <pre>Option Values: {JSON.stringify(values, null, 2)}</pre>
                        <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                    <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
                    </code>
                    <Link href="/dashboard/squestion/section2" className="btn btn-secondary">
        section 2
      </Link>
        </>
    )

}

section1.getInitialProps = async (context, currentUser) => {

    return {
      cssFile:'style.css',
      op_data:'gender'      
    };
  
  }
section1.getLayout = function getLayout(page) {
    return (
      <FormikLayout>
        {page}
      </FormikLayout>
    )
  }
  
export default section1;