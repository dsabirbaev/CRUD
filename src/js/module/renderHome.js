

import {$, createElement} from "./utils.js";




const homeRender =  $('.nav__list').addEventListener('click', (e) => {
    e.preventDefault()

    // $('.crud_body').innerHTML = "";
    if(e.target.classList.contains('home')){
       localStorage.setItem('itemClicked', 'home');
       showHome()
    }
})

function showHome(){
    $('.crud_body').innerHTML = "";
    const homeItem = createElement('div', 'home-wrapper flex items-center justify-between p-[10px] gap-x-[20px]', `

    <div class="bg-[#F0F9FF] w-[255px] rounded-[8px] p-5">
        <div><img class="mb-[15px]" src="./assets/icons/home/graduation.svg" alt="graduation"> <span class="font-medium text-[#6C6C6C]">Students</span></div>
        <p class="font-bold text-[30px] mt-[10px] text-right">243</p>
    </div>

    <div class="bg-[#FEF6FB] w-[255px] rounded-[8px] p-5">
        <div><img class="mb-[15px]" src="./assets/icons/home/bookmark.svg" alt="bookmark"> <span class="font-medium text-[#6C6C6C]">Course</span></div>
        <p class="font-bold text-[30px] mt-[10px] text-right">13</p>
    </div>

    <div class="bg-[#FEFBEC] w-[255px] rounded-[8px] p-5">
        <div><img class="mb-[15px]" src="./assets/icons/home/usd-square.svg" alt="bookmark"> <span class="font-medium text-[#6C6C6C]">Payments</span></div>
        <p class="font-bold text-[30px] mt-[10px] text-right"><span class="text-[18px]">INR</span> 556,000</p>
    </div>

    <div class="bg-[#FEFBEC] w-[255px] rounded-[8px] p-5 bg_card">
        <div><img class="mb-[15px]" src="./assets/icons/home/vector.svg" alt="bookmark"> <span class="font-medium text-[#6C6C6C]">Users</span></div>
        <p class="font-bold text-[30px] mt-[10px] text-right">3</p>
    </div>
    `)

    $('.crud_body').append(homeItem)
}



if (localStorage.getItem('itemClicked') == 'home') {
   showHome()
}






// $('.home').click()


export default homeRender

