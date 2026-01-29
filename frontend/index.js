const bcrypt = require('bcryptjs');
const register = document.getElementById('registerform');
const loginform = document.getElementById('loginform');
const register_btn = document.getElementById('register-btn')
const login_btn = document.getElementById('login-btn');

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
register.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Firstname = document.getElementById('reg-Firstname').value;
    const Lastname = document.getElementById('reg-Lastrname').value;
    const matricule = document.getElementById('Matricule').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('reg-password').value;
    const repassword = document.getElementById('reg-re-password').value;
    const error_message = document.getElementById('error');
     
    //check if first name and last name are not empty
    if(!Firstname.trim() || !Lastname.trim() || !matricule.trim() || !email.trim()){
        error_message.textContent = "Please fill in all fields";
        return false;
    }else{
        error_message.textContent ='';
    };
    
    
    if(password !== repassword){
         error_message.textContent = "Passwords do not match";
         password.style.borderColor = "red";
            return false;
    }else{
        error_message.style.display ='none';
        password.style.borderColor = "";
    };

    //checking if password and renterpassword match before submit
    if(repassword.value !== password.value){
         error_message.textContent = "Passwords do not match";
         repassword.style.borderColor = "red";
            return false;
    }else{
        error_message.style.display ='none';
        repassword.style.borderColor = "";
    };

     alert("Registration Successful");
     return true;

     
    // Send registration data to the server
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Firstname, Lastname,rePassword, password: hashedPassword })
    })
    .then(response => response.json())
});