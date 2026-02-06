
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

// handle error display 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    error.innerText = message;
    inputControl.classList.add("errors");
    inputControl.classList.remove("Success");
};

// success display
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    error.innerText = "";
    inputControl.classList.add("Success");
    inputControl.classList.remove("errors");
};


// email validation
const isvalidemail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};

// main validation
const validateinput = () => {
    const fname = Firstname.value.trim();
    const lname = Lastname.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();
    const repass = repassword.value.trim();

    if (fname === "") {
        setError(Firstname, "First name is required");
    } else {
        setSuccess(Firstname);
    }

    if (lname === "") {
        setError(Lastname, "Last name is required");
    } else {
        setSuccess(Lastname);
    }

    if (mail === "") {
        setError(email, "Email is required");
    } else if (!isvalidemail(mail)) {
        setError(email, "Invalid email format");
    } else {
        setSuccess(email);
    }

    if (pass.length < 8) {
        setError(password, "Password must be at least 8 characters");
    } else {
        setSuccess(password);
    }

    if (repass !== pass) {
        setError(repassword, "Passwords do not match");
    } else {
        setSuccess(repassword);
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


