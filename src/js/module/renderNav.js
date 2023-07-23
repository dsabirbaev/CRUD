
import {$, createElement} from "./utils.js"
import navlink from "./navlink.js";


function renderNav(data){
    if(data.length){
        data.forEach(item => {
            const listIem = createElement('li', 'item  rounded-md border bg-white', `
                  <a class="${item.class} flex gap-x-[15px] p-3" href="${item.link}"><img src="${item.icon}" alt="home">${item.title}</a>
            `)

            $('.nav__list').append(listIem);
        })
    }
}

renderNav(navlink)



export default renderNav