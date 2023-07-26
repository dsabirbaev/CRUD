
import {$} from "./module/utils.js";

function auth() {

    const userLogin = {
        email: $("#email").value,
        password: $("#password").value,
    };

    fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLogin),
        })

        .then((res) => res.json())
        .then((data => {

            if (data.access_token && data.statusCode != 401) {
                localStorage.setItem("token", data?.access_token);
                localStorage.setItem('itemClicked', 'home');
                window.location.href = "./index.html";
            } else {
                alert("Error: " + data.message);
                localStorage.clear();
            }
        }))
}



$('.login_form').addEventListener('submit', (e) => {
    e.preventDefault()
    auth()
})