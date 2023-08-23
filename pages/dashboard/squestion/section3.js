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

const section3=()=>{

  const { isValid, isSubmitting,values,errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

    return(
        <>
        

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Submit Form</button>
          </div>
        </div>

        <code>
            <pre>Values: {JSON.stringify(values, null, 2)}</pre>
            <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                    <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
        </code>
        <Link href="/dashboard/squestion/section1" className="btn btn-secondary">
        section 1
      </Link>
        <Link href="/dashboard/squestion/section2" className="btn btn-secondary">
        section 2
      </Link>
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
      <FormikLayout>
        {page}
      </FormikLayout>
    )
  }
  
export default section3;