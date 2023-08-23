import Head from 'next/head'
import { useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'; // Add this line

//import landing from './landing.module.css';
import Link from 'next/link';
import Header from './header.js';
import Sidebar from './sidebar';
import Footer from './footer.js';
import {Formik, Form, yupToFormErrors, validateYupSchema, useFormikContext} from 'formik';

//validation
import ValidationSchema from '../../components/ValidationSchema.js';
import React from 'react';

const FormObserver =() => {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log("FormObserver::values", values);
  }, [values]);

  return null;
};


const FormikLayout = ({children}) => {



const initialFormValues ={

    section1 :{
        name:'',
        gender:'',
        age:0,
        food_choices:'',
        found:[],
        dress_code:[]

    },
    section2 :{
        found:[],
        food_choices:[]
        
    }

};

const handleFormSubmit =(values)=>{

    console.log(values);

    setTimeout(() => {
    }, 500)

}
  
  
    return(
    <>
    <Head>
      <title>Dashboard</title>

    </Head>

<Header/>
<Sidebar/>

<main id="main" className="main">
<Formik 
initialValues={initialFormValues} 
/*validationSchema={ValidationSchema}*/
validate={async (value) => {
  try {
    await validateYupSchema(value, ValidationSchema, false, {'gender':value.section1.gender});
  } catch (err) {
    return yupToFormErrors(err); //for rendering validation errors
  }

  return {};
}}
onSubmit={handleFormSubmit}>
<Form >
<FormObserver />
  {children}
</Form>
  </Formik>
</main>
<Footer/>
<Link href="#" className="back-to-top d-flex align-items-center justify-content-center">
  <i className="bi bi-arrow-up-short"></i>
  </Link>

  
  
    </>);
};

export default FormikLayout