


import {$, TO_JSON} from "./utils.js";

const baseURL = "http://localhost:3000";

let id;

function updateStudent(id){
    const newStudent={
        id: Date.now(),
        name: $("#edit_name").value,
        email: $("#edit_email").value,
        phone: $("#edit_phone").value,
        number: $("#edit_number").value,
        date: $("#edit_date").value
    }

  
    fetch(`${baseURL}/posts/${id}`, {
        method: 'PUT',                           //// PATCH
        headers: {
            "Content-Type": "application/json",
        },
        body: TO_JSON(newStudent)
    })
    
}


$(".crud_body").addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('edit-btn')){
        id = e.target.getAttribute('data-edit');
    }
})


$(".modal-content").addEventListener('click', (e) => {
    if(e.target.classList.contains('edit_student')){
        updateStudent(id)
    }    
})




export default updateStudent