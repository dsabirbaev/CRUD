

import {$} from "./utils.js";

function renderAddForm(){
    $('.modal-content').innerHTML = `
    <div class="modal-body">
        <img title="close" src="./assets/icons/close.svg" alt="close" class="close absolute top-2 right-2 cursor-pointer">
        <form id="post_student" class="flex flex-col gap-y-2">
            <input id="name" type="text" placeholder="Name" class="border rounded p-2 w-full outline-none" required>
            <input id="email" type="email" placeholder="Email" class="border rounded p-2 w-full outline-none" required>
            <input id="phone"   type="tel" placeholder="Phone" class="border rounded p-2 w-full outline-none" required>
            <input id="number" type="text" placeholder="Enroll number" class="border rounded p-2 w-full outline-none" required>
            <input id="date" type="date" placeholder="Date" class="border rounded p-2 w-full outline-none required" required>
            <button type="submit" class="bg-[#FEAF00] p-2 outline-none font-semibold text-[16px] rounded border transition hover:bg-white hover:border hover:border-[#FEAF00]">Add student</button>
        </form>
    </div>
    
    `
}

$('.modal-content').addEventListener('click', (e) => {
    
    if(e.target.classList.contains('close')){
        $(".modal-wrapper").classList.add('hidden');
    }
})

export default renderAddForm