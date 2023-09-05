function add(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);

    document.getElementById("Get Value").innerHTML = a+b;
}
function sub(){
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

    document.getElementById("Get Value").innerHTML = a-b;
}
function mul(){
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

    document.getElementById("Get Value").innerHTML = a*b;
}
function div(){
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

    document.getElementById("Get Value").innerHTML = a/b;
}