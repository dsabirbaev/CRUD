


import {$} from "./utils.js";


const modalWindow = $('.crud_body').addEventListener('click', (e) => {
    if(e.target.classList.contains('add_student')){
        $(".modal-wrapper").classList.remove('hidden');
    }
})



$("#close").addEventListener('click', () => {
    $(".modal-wrapper").classList.add('hidden');
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
        $(".modal-wrapper").classList.add('hidden');
    }

})



export default modalWindow
