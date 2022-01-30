let olarray = [
                {label: "Week 1", 
                 url: "week1/index1.html"},

                {label: "Week 2",
                 url: "week2/index2.html"},
                {label: "Week 3",
                 url: "week3/index3.html"},
                {label: "Week 4",
                 url: "week4/index4.htm"},
                
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

