


import {$} from "./utils.js";
import renderAddForm from "./modalAdd.js";

const modalWindow = $('.crud_body').addEventListener('click', (e) => {
    if(e.target.classList.contains('add_student')){
        $(".modal-wrapper").classList.remove('hidden');
        renderAddForm()
    }
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
        $(".modal-wrapper").classList.add('hidden');
    }

})



export default modalWindow
