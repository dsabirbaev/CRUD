


import {$, createElement} from "./utils.js";


///////////////  GET posts /////////////////////////

const baseURL = "http://localhost:3000";

async function getPosts(){
    try{
        const response = await fetch(`${baseURL}/posts`)
        const result = await response.json();
   
        renderStudents(result)
    }catch(err){
        console.log(err.message)
    }finally{
        console.log('success')
    }
}

/////////////////////////////////////////////



$('.nav__list').addEventListener('click', (e) => {
    if(e.target.classList.contains('students')){
        $('.crud_body').innerHTML = "";
        setHTML()
        getPosts()
        
    }
})


function setHTML(){
    $('.crud_body').innerHTML = `
    <div class="p-[10px]">
        <div class="students_header flex items-center justify-between">
            <h2 class="font-bold text-[22px] ">Students List</h2>
            <div class="flex items-center gap-x-[30px]">
                <img src="./assets/icons/sort.svg" alt="sort">
                <button class="add_student uppercase font-medium text-white py-[13px] px-[26px] bg-[#FEAF00] rounded transition hover:shadow-md hover:bg-white hover:text-black border hover:border">
                    Add new students
                </button>
            </div>
        </div>
        <div class="students_body">
            <ul class="text-[#ACACAC] text-[12px] font-semibold flex items-center px-[30px] py-[20px]">
                <li class="w-[15%]">Name</li>
                <li class="w-[19%]">Email</li>
                <li class="w-[15%]">Phone</li>
                <li class="w-[20%]">Enroll Number</li>
                <li class="w-[16%]">Date of admission</li>
            </ul>
            <ul class="students_body--content flex flex-col gap-y-2">

            <ul>
        </div>
    </div>
    `
}

function renderStudents(data){
    if(data.length){
        data.forEach(item => {
            const studentItem = createElement('li', 'flex items-center justify-between px-[30px] py-[20px] border rounded-md', `  
                <div class="flex w-full">
                    <span class="w-[16%]">${item.name}</span>
                    <span class="w-[20%]">${item.email}</span>
                    <span class="w-[16%]">${item.phone}</span>
                    <span class="w-[22%]">${item.number}</span>
                    <sapn class="w-[16%]">${item.date}</sapn>
                </div>
                <div class="flex gap-x-[30px] items-center cursor-pointer">
                    <img src="./assets/icons/pen.svg" alt="pen" data-edit="${item.id}" class="edit-btn">
                    <img src="./assets/icons/trash.svg" alt="trash" data-del="${item.id}" class="delete-btn">
                </div>
            `)

            $('.students_body--content').append(studentItem)
        })

    }
}



export default renderStudents