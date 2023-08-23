import DIS_LOGIC from '../json/disablelogic.json';


const disable_logic=(name,value, setFieldValue,logic_option)=>{

        //console.log(name);
        if(DIS_LOGIC.hasOwnProperty(name)){

            var ds_logic_array = DIS_LOGIC[name];

            for (let i = 0; i < ds_logic_array.length; i++) {
                var element = ds_logic_array[i];
                //console.log(element[logic_option]);
                var first_key = Object.keys(ds_logic_array[i])[0];

                var found_key = logic_option.find((search)=>{
                    return search == first_key;
                });

                if(found_key == "not"){
                    var not = element[found_key];     
                    var fields = element["fields"];       
                    var found = not.find((search)=>{
                        return search == value? search:null;
                    });
                    //console.log(logic_option); 
                    found_disabled(found,fields,setFieldValue);
                    break;
                }

                if(found_key == "range"){
                    var gt_lt = element[found_key];
                    var fields = element["fields"];       
                    //console.log(gt_lt[0],gt_lt[1]);
                    if(value >= gt_lt[0] && value <=gt_lt[1]){
                        found_disabled(undefined, fields,setFieldValue);
                        //console.log(value,gt_lt);
                        break;
                    }                    
                                        
                }

                if(found_key == "lt"){
                    var lt = element[found_key];
                    var fields = element["fields"];
                    if(value < lt){
                        found_disabled(undefined, fields,setFieldValue);
                    }
                    break;
                }

                if(found_key == "gt"){
                    var gt = element[found_key];
                    var fields = element["fields"];
                    if(value > gt){
                        found_disabled(undefined, fields,setFieldValue);
                    }
                    break;
                }

            }
            
            
            
            
        }
}

function found_disabled(found, fields, setFieldValue){
    if( typeof found == 'undefined'){                
            
        for(const [key, value] of Object.entries(fields)){
            //console.log(key, value);
            setFieldValue(key,value);
        }
    }
}
export {
    disable_logic
}