
export function nothing_screen() {
    let container = document.createElement("div");
    let no_content = document.createElement("i");
    no_content.innerHTML = "There is nothing yet! </br> </br> Type something to start";
    container.setAttribute("id", "no-content");
    container.appendChild(no_content);
    document.querySelector(".list").appendChild(container);
}


//?Active = False  Completed = True
export function falsefilter(entry){
    //console.log("False filter")
    return entry.completed == false;
}
    
export function truefilter(entry){
    //console.log("True filter")
    return entry.completed == true;
}

export function clearinput(){
    let input_task = document.getElementById("n_task");
    input_task.value = "";
}