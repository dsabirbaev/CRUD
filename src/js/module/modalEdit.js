

import {$} from "./utils.js";
// let id;

const baseURL = "http://localhost:3000";

async function fetchPosts(id){
    try{
        const response = await fetch(`${baseURL}/posts/${id}`)
        const result = await response.json();
        console.log(result)
        renderEdit(result)
    }catch(err){
        console.log(err.message)
    }finally{
        console.log('success')
    }
}



$('.crud_body').addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('edit-btn')){
        $(".modal-wrapper").classList.remove('hidden');
        const id = e.target.getAttribute('data-edit');
        fetchPosts(id)
    }
})

function renderEdit(data){
    
   
            $('.modal-content').innerHTML = `
            <div class="modal-edit">
                        
                <img title="close" src="./assets/icons/close.svg" alt="close" class="close absolute top-2 right-2 cursor-pointer">
                <form id="edit_student" class="flex flex-col gap-y-2">
                    <input id="edit_name" type="text" placeholder="Name" class="border rounded p-2 w-full outline-none" value="${data.name}">
                    <input id="edit_email" type="email" placeholder="Email" class="border rounded p-2 w-full outline-none" value="${data.email}">
                    <input id="edit_phone"   type="tel" placeholder="Phone" class="border rounded p-2 w-full outline-none" value="${data.phone}">
                    <input id="edit_number" type="text" placeholder="Enroll number" class="border rounded p-2 w-full outline-none" value="${data.number}">
                    <input id="edit_date" type="date" placeholder="Date" class="border rounded p-2 w-full outline-none" value="${data.date}">
                    <button id="edit_btn" type="submit" class="edit_student bg-[#FEAF00] p-2 outline-none font-semibold text-[16px] rounded border transition hover:bg-white hover:border hover:border-[#FEAF00]">Edit</button>
                </form>
            </div>
            `
     
   
}


export default renderEdit