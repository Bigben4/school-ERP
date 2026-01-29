
const register = document.getElementById('registerform');
const loginform = document.getElementById('loginform');
const register_btn = document.getElementById('register-btn')
const login_btn = document.getElementById('login-btn');

register_btn.addEventListener('click', () => {
    register.style.display = 'flex';
    loginform.style.display = 'none';
})

login_btn.addEventListener('click', () => {
       loginform.style.display = 'flex';
       register.style.display = 'none';
});