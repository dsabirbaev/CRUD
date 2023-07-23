


import {$} from "./utils.js";

function renderDelete(){
 
    $('.modal-content').innerHTML = `
        <h2 class="text-center font-bold text-[20px] mb-5">Are you sure?</h2>
        <div class="flex justify-center gap-x-4">
            <button title="yes" class="yes w-[150px] py-4 bg-green-500 rounded-md text-[16px] font-semibold">Yes</button>
            <button title="no" class="no w-[150px] py-4 bg-red-500 rounded-md text-[16px] font-semibold">No</button>
        </div>
    `
}

export default renderDelete