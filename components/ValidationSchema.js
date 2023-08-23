import { object, array, string, number } from "yup";
export default object().shape({
    section1: object().shape({
        
            name: string()
            .ensure()
              .required("Name is required"),

            gender:string()
            .ensure()
            .required("Select Gender")
        
    }),

    section2: object().shape({
        
        food_choices: array().
        /*
        min(1, "Need at least 1 Choice Required!!")
        .of( 
        
          object().shape({
            value: string().required(),
            label: string().required()
          })

        )*/
        when('$gender', (gender, schema) => {

          //console.log(gender);
          
          //if(found[0].length>0){
          if(parseInt(gender) === 1)
            //console.log(found);
            return schema.min(1, "Need at least 1 Choice Required!!").of( 
        
              object().shape({
                value: string().required(),
                label: string().required()
              })
    
            )

          })
      
       
               
    
    })
});