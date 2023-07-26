
import {$, $$, createElement} from "./utils.js"
import navlink from "./navlink.js";


function renderNav(data){
    if(data.length){
        data.forEach(item => {
            const listIem = createElement('li', 'item_nav  rounded-md border bg-white', `
                  <a class="${item.class} flex gap-x-[15px] p-3" href="${item.link}"><img src="${item.icon}" alt="home">${item.title}</a>
            `)

            $('.nav__list').append(listIem);
        })
    }
}

renderNav(navlink)


// focus nav menu

function hideContent() {
    
    $$(".item_nav").forEach((item) => {
        item.classList.remove("active_nav");
    });
}

function showContent(index) {
    $$(".item_nav")[index].classList.add("active_nav");
}

$$(".item_nav").forEach((item, index) => {
    item.addEventListener("click", (e) => {
        hideContent();
        localStorage.setItem("active_index", index);
        showContent(index);
    });
});


hideContent();
showContent(localStorage.getItem("active_index") || 0);

export default renderNav