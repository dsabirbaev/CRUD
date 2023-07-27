


import {$, TO_JSON} from "./utils.js";
import {setHTML, getPosts} from "./renderStudents.js"

const baseURL = "https://api-yrsv.onrender.com";

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
    .then((res) => res.json())
    .then( ()=> {
      
        setHTML();
        getPosts();
    })
    
   
}


$(".crud_body").addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('edit-btn')){
        id = e.target.getAttribute('data-edit');
        console.log("dddd")
    }
})


$(".modal-content").addEventListener('click', (e) => {

    if(e.target.classList.contains('edit-student')){

        $("#edit_student").addEventListener('submit', (e) => {
            e.preventDefault();
            updateStudent(id)
            $(".modal-wrapper").classList.add('hidden');
        })
        
    }    
})




export default updateStudent