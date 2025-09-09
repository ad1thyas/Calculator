function show(v)
{
document.getElementById("disp").value+= v;
}

function clearDisp() {
document.getElementById("disp").value="";
}

function calculate() {
var exp=document.getElementById("disp").value;
var result=eval(exp);
document.getElementById("disp").value=result;
}


