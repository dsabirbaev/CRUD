

import {$} from "./utils.js";

const baseURL = "http://localhost:3000";

import renderDelete from "./modalDelete.js";

const del = $('.crud_body').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        $(".modal-wrapper").classList.remove('hidden');
        renderDelete()
    }
})


let id;

function deleteStudent(id){
    if(id){
        fetch(`${baseURL}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}

$(".crud_body").addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        id = e.target.getAttribute('data-del');
    }
})


$(".modal-content").addEventListener('click', (e) => {
    if(e.target.classList.contains('yes')){
        deleteStudent(id)
    }
    if(e.target.classList.contains('no')){
        $(".modal-wrapper").classList.add('hidden');
    }
        
    
})

export default deleteStudent
