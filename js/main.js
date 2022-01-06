let olarray = [
                {label: "Week 1", 
                 url: "week1/index.html"},

                {label: "Week 2",
                 url: "week2/index.html"}
                ];

let ol = document.querySelector("ol");
let index = 0;
olarray.forEach( () => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = olarray[index].label;
    link.href = olarray[index].url;
    li.appendChild(link);
    ol.appendChild(li);

    index += 1
});