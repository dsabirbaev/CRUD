


import {$, TO_JSON} from "./utils.js";


const baseURL = "http://localhost:3000";

function createPost(){
    const newPost={
        id: Date.now(),
        name: $("#name").value,
        email: $("#email").value,
        phone: $("#phone").value,
        number: $("#number").value,
        date: $("#date").value
    }

    if(!newPost.name.trim().length){
        alert('Please enter the text!')
    }else{
        fetch(`${baseURL}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: TO_JSON(newPost)
        })
    }

    
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