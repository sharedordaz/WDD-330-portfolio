let total_array = []
const desk_computer = {
    name: 'Desktop Computer',
    price: 1000
}
const gaming_computer = {
    name: 'Gaming Computer',
    price: 2000
}
const design_computer = {
    name: 'Design Computer',
    price: 1500
}
const basic_server = {
    name: 'Basic Server',
    price: 1000
}
const advanced_server = {
    name: 'Advanced Server',
    price: 2500
}


function add_cart_1(){
    let Name = document.querySelector(".h41").innerHTML; // Get the name
    
    let price = document.querySelector(".p1").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total
    total_array.push(total)
    let a_total = "$" + total

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = a_total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);

}
}

function add_cart_2(){
    let Name = document.querySelector(".h42").innerHTML; // Get the name
    
    let price = document.querySelector(".p2").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".g_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total
    total_array.push(total);
    let a_total = "$" + total;
    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = a_total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);
}
}

function add_cart_3(){
    let Name = document.querySelector(".h43").innerHTML; // Get the name
    
    let price = document.querySelector(".p3").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".dsn_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total
    total_array.push(total);
    let a_total = "$" + total;
    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = a_total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);
}
}
function add_cart_4(){
    let Name = document.querySelector(".h44").innerHTML; // Get the name
    
    let price = document.querySelector(".p4").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".s_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total
    total_array.push(total);
    let a_total = "$" + total;
    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = a_total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);
}
}
function add_cart_5(){
    let Name = document.querySelector(".h45").innerHTML; // Get the name
    
    let price = document.querySelector(".p5").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".as_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total
    total_array.push(total);
    let a_total = "$" + total;
    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = a_total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);
}
}

function get_total(){
    let a_total = total_array.reduce(sum);
    let msg = "The total is $" + a_total;
    function sum(num, num2){
        return num + num2;
    }

    alert(msg);
}

fetch('info.txt');

