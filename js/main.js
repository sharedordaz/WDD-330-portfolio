'use strict';
let olarray = [ 
                {label: "TODO App", 
                 url: "TODO/todo.html"},
                {label: "Week 1", 
                 url: "week1/index1.html"},

                {label: "Week 2",
                 url: "week2/index2.html"},
                {label: "Week 3",
                 url: "week3/index3.html"},
                {label: "Week 4",
                 url: "week4/index4.htm"},
                {label: "Week 5",
                 url: "week5/index5.html"},    
                
                {label: "Week 7",
                url: "week7/index7.html"},
                {label: "Week 8",
                 url: "week8/index8.html"}
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

//throw new Error('Life is an error');