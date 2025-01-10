//callback 

function submitForm(submit,isformValid){
    if(isformValid)
    {
        console.log("Feilds Validated Sucessfully");
        console.log(submit);
    }
    else{
        console.log("Form Validation Fail");
        console.log("Form submission Unsucessfull");
    }

}
function formValidation(){
    email="sece@sece.ac.in"
    password="12345678"
    if (email=="sece@sece.ac.in"&& password){
        return true
    }
    else{
        return false
    }
}
submitForm("Form Submitted Successfull",formValidation)