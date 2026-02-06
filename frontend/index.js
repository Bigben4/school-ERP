
const register = document.getElementById('registerform');
const Firstname = document.getElementById('reg-Firstname');
const Lastname = document.getElementById('reg-Lastrname');
const matricule = document.getElementById('Matricule');
const email = document.getElementById('Email');
const password = document.getElementById('reg-password');
const repassword = document.getElementById('reg-re-password');
const register_btn = document.getElementById("register-btn");
const loginform = document.getElementById("loginform");
const login_btn = document.getElementById("login-btn");
const error = document.getElementById('Error');
const errorLast = document.getElementById('Error-last');
const errorEmail = document.getElementById("Error-emai");
const matriculation = document.getElementById("Error-matricule");
const passError = document.getElementById("Error-password");
const repassError = document.getElementById("Error-re-password");

// Toggle between login and register forms
register_btn.addEventListener('click', () => {
    register.style.display = 'flex';
    loginform.style.display = 'none';
})

login_btn.addEventListener('click', () => {
       loginform.style.display = 'flex';
       register.style.display = 'none';
});



// Handle registration form submission
register.addEventListener('submit', (e) => {
    e.preventDefault();
    validateinput();
});

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

// email validation
const isvalidemail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};






// main validation
const validateinput = () => {
    const fname = Firstname.value.trim();
    const lname = Lastname.value.trim();
    const matric = matricule.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();
    const repass = repassword.value.trim();
   

    if (fname === "") {
        error.innerText = "First name is required";
        Firstname.classList.add('error')
    } else {
        error.innerText = "";
        Firstname.classList.add('valid');
    }

    if (lname === "") {
          errorLast.innerHTML ="Last name is required";
          Lastname.classList.add('error')
    } else {
        errorLast.innerText = "";
        Lastname.classList.add('valid');
    }
    

    if(matric === ""){
          matriculation.innerHTML = "Matricule is required";
          matricule.classList.add('error');
    }else{
          matriculation.innerHTML = "";
          matricule.classList.add('valid');  
    };
    
     if(pass === "" ){
         passError.innerHTML = "Password is required";
          password.classList.add('error')
     }else if (pass.length < 8) {
        passError.innerHTML = "Password must be at least 8 characters";
        password.classList.add('error');
    } else {
        passError.innerHTML = "";
         password.classList.add('valid');
    }

    if(repass === "" ){
            repassError.innerHTML = "Please confirm your password";
            repassword.classList.add('error')
    } else if (pass !== repass) {
      repassError.innerHTML =  "Passwords do not match";
      repassword.classList.add('error')

    } else {
        repassError.innerHTML =  "";
         repassword.classList.add('valid');
    }



    //  Send registration data to the server
    //  fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         fname,
    //         lname,
    //         matricule,
    //          mail,
    //         pass,
    //         repass,
    //     })
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));


};


