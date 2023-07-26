


import {$, TO_JSON} from "./utils.js";


const baseURL = "https://api-yrsv.onrender.com";

function createPost(){
    const newPost={
        id: Date.now(),
        name: $("#name").value,
        email: $("#email").value,
        phone: $("#phone").value,
        number: $("#number").value,
        date: $("#date").value
    }

    
    fetch(`${baseURL}/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: TO_JSON(newPost)
    })
    

    
}



$('.crud_body').addEventListener('click', (e) => {
    if(e.target.classList.contains('add_student')){
      
        $("#post_student").addEventListener('submit', (e) => {
            e.preventDefault();
            createPost()
        })

    }
})




export default createPost