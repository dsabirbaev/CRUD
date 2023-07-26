






import {$} from "./utils.js";


$('.nav__list').addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('setting')){
        $('.crud_body').innerHTML = "";
       localStorage.setItem('itemClicked', 'setting');
       showSetting()
    }
})

function showSetting(){
    $('.crud_body').innerHTML = "";
    $('.crud_body').innerHTML += `<div class="pt-[20px] flex items-center justify-center text-3xl text-red-700 uppercase font-bold">
    <h1>Data not found!</h1>
    
    </div>`;
    
}

if (localStorage.getItem('itemClicked') == 'setting') {
    showSetting()
 }

export default showSetting