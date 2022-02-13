import { nothing_screen, falsefilter, truefilter, clearinput } from "/TODO/utilities.js";
import { toDoList, month } from "/TODO/ls.js";

console.log("Code opened");
let button = document.getElementById("add-button");
button.addEventListener("click", addbutton);
//console.log(todo)
let all = document.querySelector(".all");
let active = document.querySelector(".active"); 
let completed = document.querySelector(".completed");

all.addEventListener("click", () => {
    reset();    
    resetdiv();
    all.style.border = "1px solid black";
});
active.addEventListener("click", () =>{

    let list = document.querySelector(".list");
    list.innerHTML = "";
    print_todo(filteredList(false));
    updateCounter();
    resetdiv();
    active.style.border = "1px solid black";
    //console.log(`Reset using ${true}`)
    //console.log(filteredList(true))
});
completed.addEventListener("click", () =>{
    
    let list = document.querySelector(".list");
    list.innerHTML = "";
    
    
    print_todo(filteredList(true));
    updateCounter();
    resetdiv();
    completed.style.border = "1px solid black";
    //console.log(`Reset using ${false}`)
});
reset();

function addbutton(){
    append_input();
    clearinput();
    reset();
}

function append_input() {
    
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let today = `Added ${month[mm]} ${dd}, ${yy} at ${hour}:${min}`;

    let new_task = document.getElementById("n_task").value;
    if (new_task == ""){
        alert("Please enter a value");
    }
    else{
    toDoList.push({id: today, content : `${new_task}`, completed : false});
    }
}

function reset(){
    let list = document.querySelector(".list");
    list.innerHTML = "";
    print_todo(toDoList);
    updateCounter();
    //console.log("reset")
}


function print_todo(lista) {
    if(lista.length == 0){
        //console.log(lista.length);
        nothing_screen();
    }
    lista.forEach( element => {
        if (element.content != undefined){

            let list = document.querySelector(".list");
            
            let container = document.createElement("div");
            let task_p = document.createElement("h3");
            let id_p = document.createElement("p");
            
            //*Erase a entry
            let x = document.createElement("img");
            x.setAttribute("class", "x");
            x.setAttribute("src", "x.png");
            let index = lista.indexOf(element);
            x.addEventListener("click", () => {
                lista.pop(index);
                reset();
            });
            
            //*What happens if you check the box
            let isdone = document.createElement("input");
            isdone.setAttribute("type", "checkbox");
            isdone.checked = element.completed;
            //isdone.setAttribute("onchange", `if (this.checked == true){this.parentElement.firstChild.style.textDecoration = 'line-through'} else{this.parentElement.firstChild.style.textDecoration = 'initial'};`)
            
            isdone.addEventListener("change", () => {
                lista[index].completed = isdone.checked;
                //console.log(isdone.checked);
                reset();
            });
            if (element.completed == true){task_p.style.textDecoration = 'line-through'; id_p.style.textDecoration = 'line-through';}
                else{task_p.style.textDecoration = 'initial'; id_p.style.textDecoration = 'initial'}

            task_p.textContent = element.content;
            id_p.textContent = element.id;

            container.appendChild(task_p);
            container.appendChild(id_p);
            container.appendChild(isdone);
            container.appendChild(x);
            list.appendChild(container);
        }
    });
}
function updateCounter() {
    let counter = document.getElementById("counter");
    let  len = toDoList.filter(falsefilter).length;
    //console.log(len);
    counter.innerHTML = `<p>${len} tasks left</p>`;
}



function filteredList(boolean){
    
    if (boolean == false){
        return toDoList.filter(falsefilter);
    }
    else{
        return toDoList.filter(truefilter);
    }
}
function resetdiv(){
    //console.log("reset div");
    let infodiv = document.querySelector(".info") ;
    for (let index = 0; index < infodiv.children.length; index++) {
        //console.log(infodiv.children[index]);    
        infodiv.children[index].style.border = "none";

    }
}