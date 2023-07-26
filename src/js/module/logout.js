
import {$} from "./utils.js";

$('.log_out').addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "./login.html";
    localStorage.clear();
})


function logOut() {
    let token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "./login.html";
        localStorage.clear();
    }
    return 
}


logOut()


export default logOut;