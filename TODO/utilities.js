export function nothing_screen() {
    let container = document.createElement("div");
    let no_content = document.createElement("i");
    no_content.innerHTML = "There is nothing to do yet! </br> </br> Type something to start";
    container.setAttribute("id", "no-content");
    container.appendChild(no_content);
    document.querySelector(".list").appendChild(container);
}
