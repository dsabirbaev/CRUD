

import {$} from "./utils.js";


$('.nav__list').addEventListener('click', (e) => {
    e.preventDefault()

    // $('.crud_body').innerHTML = "";
    if(e.target.classList.contains('payment')){
       localStorage.setItem('itemClicked', 'payment');
       showPayment()
    }
})

function showPayment(){
    $('.crud_body').innerHTML = "";
    $('.crud_body').innerHTML += `<div class="pt-[20px] flex items-center justify-center text-3xl text-red-700 uppercase font-bold">
    <h1>Data not found!</h1>
    
    </div>`;
    
}

if (localStorage.getItem('itemClicked') == 'payment') {
    showPayment()
 }

export default showPayment