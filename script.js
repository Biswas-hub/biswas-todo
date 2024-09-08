const fm=document.querySelector('form');
const todoin=document.getElementById('task-in');
const todoliul=document.getElementById('to-do');
const addbtn=document.getElementById('btn-add');


let todoarr=gettodos();
updatetodoli()

fm.addEventListener('submit',function(e){
    e.preventDefault();
    addtodo();
});


function addtodo(){
    const todoval=todoin.value;
    todoarr.push(todoval);
    updatetodoli();
    savetodos();
    todoin.value="";
    
    
}

function updatetodoli(){
    todoliul.innerHTML="";
    todoarr.forEach((todovalue,todokey)=>{
        const todoitem=createtodo(todovalue,todokey);
        todoliul.append(todoitem);
        
    })
}

function createtodo(value,key){
    const todoid="todo-"+key
    const todoli=document.createElement("li");
    todoli.className="task-1";
    todoli.innerHTML=`
            <input type="checkbox" name="done" id="${todoid}" class="cb">
            <label for="${todoid}" class="check-icon">
                <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>
            <label for="${todoid}" class="todo-text">
                ${value}
            </label>
            
            <button class="delete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>

    `

    

    return todoli;
}


function savetodos(){
    todosjson=JSON.stringify(todoarr);
    localStorage.setItem("todos",todosjson);
}

function gettodos(){
    
    const todos=localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}




