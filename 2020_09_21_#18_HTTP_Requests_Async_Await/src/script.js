const regBtn = document.querySelector('#regBtn');
const loginBtn = document.querySelector('#loginBtn');

regBtn.onclick = e => {
    e.preventDefault();
    const email = document.forms.auth.email.value;
    const password = document.forms.auth.password.value;
    Api.registration(email, password)
        .then(({ token }) => {
            localStorage.setItem("TOKEN", token);
            console.log(token);
        }).catch(error => {
            console.log(error);
        });
}

loginBtn.onclick = e => {
    e.preventDefault();
    const email = document.forms.auth.email.value;
    const password = document.forms.auth.password.value;
    Api.login(email, password)
        .then(({ token }) => {
            localStorage.setItem("TOKEN", token);
            console.log(token);
        }).catch(error => {
            console.log(error);
        });
}