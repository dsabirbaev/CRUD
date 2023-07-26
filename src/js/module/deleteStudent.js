

import {$} from "./utils.js";

const baseURL = "https://api-yrsv.onrender.com";



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
