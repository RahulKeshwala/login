const inpt = document.querySelectorAll("input");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const namel= document.getElementById("#username");
const psdl=document.getElementById("#password");
const names=document.querySelectorAll("#name");
const psds=document.getElementById("#Password2");
const email=document.getElementById("#email");
const check =document.getElementById("#t&c2");
const p = document.querySelectorAll("p");
// const signup = document.querySelectorAll("signup");

inpt.forEach(inp => {
    inp.addEventListener("focus" ,() => {

        inp.classList.add("active");
    });

    inp.addEventListener("blur" , () => {
        if (inp.value !="") return;
        inp.classList.remove("active")
    });
});

    toggle_btn.forEach( btn => {

        btn.addEventListener("click" ,()=> {
            main.classList.toggle("mode");
        });
    }); 

    // form.addEventListener("submit" ,e  => {
    //     e.preventDeault();
    //     validate(); 

    // } );

    function validate() {
        var name =
           namel;
        var email =email;
       
        var name2 =names;
        var password =
           psdl;
        var Password2 =psds;
            
        var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
        // var regPhone=/^\d{10}$/;                                        
        var name = /\d+$/g;                                    

        if (name == "" || namel.test(name)) {
            window.alert("Please enter your name properly.");
            name.focus();
            return false;
        }
        if (name2 == "" || names.test(name)) {
           document.getElementsById("error").innerHTML="Please enter your name properly.";
            name2.focus();
            return false;
        }

       
         
        // if (email == "" || email.test(email)) {
        //     document.getElementsById("error").innerHTML="Please enter your name properly.";
        //     email.focus();
        //     return false;
        // }
          
        // if (password == "") {
        //     document.getElementsById("error").innerHTML="Please enter your name properly.";
        //     password.focus();
        //     return false;
        // }
        // if (Password2 == "") {
        //     document.getElementsById("error").innerHTML="Please enter your name properly.";
        //     Password2.focus();
        //     return false;
        // }

        // if(Password2.length <6){
        //     document.getElementsById("error").innerHTML="Please enter your name properly.";
        //     Password2.focus();
        //     return false;

        // }
       

      

        return true;
    }












    

       
        
    // const setError = (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');
    
    //     errorDisplay.innerText = message;
    //     inputControl.classList.add('error');
    //     inputControl.classList.remove('success')
    // }
    
    // const setSuccess = element => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');
    
    //     errorDisplay.innerText = '';
    //     inputControl.classList.add('success');
    //     inputControl.classList.remove('error');
    // };
    
    // const isValidEmail = email => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }
    
    // const validate = () => {
    //     const namel2 = namel.value.trim();
    //     const names2 = names.value.trim();
    //     const email2 = email.value.trim();
    //     const psdl2 = psdl.value.trim();
    //     const psds2 = psds.value.trim();
       
    
    //     if(namel2 === '') {
    //         setError(namel2, 'Username is required');
    //     } else {
    //         setSuccess(namel2);
    //     }
    //     if(names2 === '') {
    //         setError(names2, 'Username is required');
    //     } else {
    //         setSuccess(names2);
    //     }
    
    //     if(email2 === '') {
    //         setError(email2, 'Email is required');
    //     } else if (!isValidEmail(emailValue)) {
    //         setError(email2, 'Provide a valid email address');
    //     } else {
    //         setSuccess(email2);
    //     }
    
    //     if(psdl2 === '') {
    //         setError(psdl2, 'Password is required');
    //     } else if (psdl2.value.length < 8 ) {
    //         setError(psdl2, 'Password must be at least 8 character.')
    //     } else {
    //         setSuccess(psdl2);
    //     }
    
    //     if(psds2 === '') {
    //         setError(psds2, 'Please confirm your password');
    //     } else if (psds2.value !== psds.Value) {
    //         setError(psds2, "Passwords doesn't match");
    //     } else {
    //         setSuccess(psds2);
    //     }
    
    // };
    
   
   
   