


import {$, createElement} from "./utils.js";


const renderStudents =  $('.nav__list').addEventListener('click', (e) => {
    
    
    if(e.target.classList.contains('students')){
        $('.crud_body').innerHTML = "";
        const studentItem = createElement('div', 'p-[10px]', `
        <div class="students_header flex items-center justify-between">
            <h2 class="font-bold text-[22px] ">Students List</h2>
            <div class="flex items-center gap-x-[30px]">
                <img src="./assets/icons/sort.svg" alt="sort">
                <button class="add_student uppercase font-medium text-white py-[13px] px-[26px] bg-[#FEAF00] rounded">
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
            <li class="flex items-center justify-between px-[30px] py-[20px] border rounded-md">
                <div class="flex w-full">
                    <span class="w-[16%]">Karthi</span>
                    <span class="w-[20%]">karthi@gmmail.com</span>
                    <span class="w-[16%]">7305477760</span>
                    <span class="w-[22%]">1234567305477760</span>
                    <sapn class="w-[16%]">08-Dec, 2021</sapn>
                </div>
                <div class="flex gap-x-[30px] items-center cursor-pointer">
                    <img src="./assets/icons/pen.svg" alt="pen">
                    <img src="./assets/icons/trash.svg" alt="trash">
                </div>
            </li>
            
        </ul>
        </div>
       
        `)

        $('.crud_body').append(studentItem)
   
    }
})

export default renderStudents