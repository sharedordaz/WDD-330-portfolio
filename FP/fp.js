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

fetch("cart.json")
.then((response) => response.json())
.then(JSONObject => {
    
    // let cart = JSON.stringify(JSONObject);
    
    total_array.push(JSONObject);
})

if(window.localStorage.length != 0){
    if(window.confirm("There is information saved in your computer. Want to use it?")){
        console.log(localStorage.getItem("one"));
        console.log(total_array.length);
        total_array[0].desk_computer.number = localStorage.getItem("one");
        total_array[0].gaming_computer.number = localStorage.getItem("two");
        total_array[0].design_computer.number = localStorage.getItem("three");
        total_array[0].basic_server.number = localStorage.getItem("four");
        total_array[0].advanced_server.number = localStorage.getItem("five");
        
        }
    else{
        localStorage.clear();
    }

}
function add_cart_1(){
    let quantity = Number(document.querySelector(".desk_quantity").value); // Get the quantity

    total_array[0].desk_computer.number = total_array[0].desk_computer.number + quantity;

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }
    console.log(total_array)
}

function add_cart_2(){
    let quantity = Number(document.querySelector(".g_quantity").value); // Get the quantity

    total_array[0].gaming_computer.number = total_array[0].gaming_computer.number + quantity;

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

}
function add_cart_3(){
    let quantity = Number(document.querySelector(".dsn_quantity").value); // Get the quantity

    total_array[0].design_computer.number = total_array[0].design_computer.number + quantity;

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

}
function add_cart_4(){
    let quantity = Number(document.querySelector(".s_quantity").value); // Get the quantity

    total_array[0].basic_server.number = total_array[0].basic_server.number + quantity;

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

}
function add_cart_5(){
    let quantity = Number(document.querySelector(".as_quantity").value); // Get the quantity

    total_array[0].advanced_server.number = total_array[0].advanced_server.number + quantity;

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
    }

}


function append_cells(Name, price, quantity, a_total){
    let tr = document.createElement("tr"); //create trow

    let name_cell = document.createElement("td");
    name_cell.innerHTML = Name;

    let price_cell = document.createElement("td");
    price_cell.innerHTML = "$" + price;

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

function cart(){
    document.querySelector(".cart_div").innerHTML = `<h4 id='x' onclick="document.querySelector('.cart_div').style.visibility = 'hidden'; document.querySelector('.cart_div').style.animationName = 'none';">❌</h4><h2>Cart</h2><table class='cart'> <tr>   <th>Name</th>  <th>Price</th>   <th>Quantity</th>  <th>Total</th></tr></table>`;
    document.querySelector(".cart_div").style.animationName = "fadeshow";
    if (total_array[0].desk_computer.number != 0) {
        let price = total_array[0].desk_computer.price; //Get the price
        let quantity = total_array[0].desk_computer.number; //Get the price
        let total = price * quantity;
        append_cells("Desktop Computer", price, quantity, total)
    }
    if (total_array[0].gaming_computer.number != 0) {
        let price = total_array[0].gaming_computer.price; //Get the price
        let quantity = total_array[0].gaming_computer.number; //Get the price
        let total = price * quantity;
        append_cells("Gaming Computer", price, quantity, total)
    }
    if (total_array[0].design_computer.number != 0) {
        let price = total_array[0].design_computer.price; //Get the price
        let quantity = total_array[0].design_computer.number; //Get the price
        let total = price * quantity;
        append_cells("Design Computer", price, quantity, total)
    }
    if (total_array[0].basic_server.number != 0) {
        let price = total_array[0].basic_server.price; //Get the price
        let quantity = total_array[0].basic_server.number; //Get the price
        let total = price * quantity;
        append_cells("Basic Server", price, quantity, total)
    }
    if (total_array[0].advanced_server.number != 0) {
        let price = total_array[0].advanced_server.price; //Get the price
        let quantity = total_array[0].advanced_server.number; //Get the price
        let total = price * quantity;
        append_cells("Advanced Server", price, quantity, total)
    }
    get_total()
    document.querySelector(".cart_div").style.visibility = 'visible';
    save_info()
    
}

function save_info() {
    localStorage.setItem("one", total_array[0].desk_computer.number);
    localStorage.setItem("two", total_array[0].gaming_computer.number);
    localStorage.setItem("three", total_array[0].design_computer.number);
    localStorage.setItem("four", total_array[0].basic_server.number);
    localStorage.setItem("five", total_array[0].advanced_server.number);

}
function get_total(){
    
    absolute_total =  (total_array[0].desk_computer.price * total_array[0].desk_computer.number) + (total_array[0].gaming_computer.price * total_array[0].gaming_computer.number) +(total_array[0].design_computer.price* total_array[0].design_computer.number) + (total_array[0].basic_server.price * total_array[0].basic_server.number) + (total_array[0].advanced_server.price * total_array[0].advanced_server.number);
    let cart_div = document.querySelector(".cart_div");
    let text = document.createElement("b");
    text.textContent = `The total is: $${absolute_total}`
    text.setAttribute("id", "totaltext");
    cart_div.appendChild(text);
}



