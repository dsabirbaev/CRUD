
import {$, createElement} from "./utils.js"
import navlink from "./navlink.js";


function renderNav(data){
    if(data.length){
        data.forEach(item => {
            const listIem = createElement('li', 'p-3 rounded-md border bg-white', `
                  <a class="flex gap-x-[15px]" href="${item.link}"><img src="${item.icon}" alt="home">${item.title}</a>
            `)

            $('.nav__list').append(listIem);
        })
    }
}

renderNav(navlink)


export default renderNav