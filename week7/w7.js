function test() {  
    console.log(this.name);
}
let object = {name : "mark"};

test.call(object);

let myfunct = function (){
    this.content = "Function to test the description of a function";
    console.log(this.content)  
    console.log(this)
};
myfunct()


function sayHello(name){
    console.log("hello " + name);
}

function callbacker(name, callback){
    let usedname = name
    callback(usedname);
}

callbacker("world",sayHello);