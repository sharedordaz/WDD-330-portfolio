import { nothing_screen } from "/TODO/utilities.js";
import { todo, toDoList, month } from "/TODO/ls.js";

let button = document.getElementById("add-button");
button.addEventListener("click", addbutton);
//console.log(todo)
print_todo()
function addbutton(){
    append_input()
    reset()
}
function append_input() {
    
    let date = new Date;
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let today = `Added ${month[mm]} ${dd}, ${yy} at ${hour}:${min}`;

    let new_task = document.getElementById("n_task").value;
    if (new_task == ""){
        alert("Please enter a value")
    }
    else{
    toDoList.push({id: today, content : `${new_task}`, completed : false})
    }
}

function reset(){
    let list = document.querySelector(".list");
    list.innerHTML = "";
    print_todo()
}


function print_todo() {
    if(toDoList.length == 1){
        //console.log("done")
        nothing_screen()
    }
    toDoList.forEach( element => {
        if (element.content != undefined){

            let list = document.querySelector(".list");
            
            let container = document.createElement("div");
            let task_p = document.createElement("h3");
            let id_p = document.createElement("p");
            
            let x = document.createElement("img");
            x.setAttribute("class", "x");
            x.setAttribute("src", "x.png");
            let index = toDoList.indexOf(element);
            x.addEventListener("click", () => {
                toDoList.pop(index);
                reset()
            })
            

            let isdone = document.createElement("input");
            isdone.setAttribute("type", "checkbox");
            isdone.checked = element.completed;
            //isdone.setAttribute("onchange", `if (this.checked == true){this.parentElement.firstChild.style.textDecoration = 'line-through'} else{this.parentElement.firstChild.style.textDecoration = 'initial'};`)
            
            isdone.addEventListener("change", () => {
                toDoList[index].completed = isdone.checked;
                //console.log(isdone.checked);
                reset()
            })
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
