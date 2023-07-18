
var a11 = document.querySelector("#a11");
var a12 = document.querySelector("#a12");
var a21 = document.querySelector("#a21");
var a22 = document.querySelector("#a22");

var b11 = document.querySelector("#b11");
var b12 = document.querySelector("#b12");
var b21 = document.querySelector("#b21");
var b22 = document.querySelector("#b22");



var ai11 = document.querySelector("#ai11");
var ai12 = document.querySelector("#ai12");
var ai21 = document.querySelector("#ai21");
var ai22 = document.querySelector("#ai22");

var ai11 = document.querySelector("#ai11");
var ai12 = document.querySelector("#ai12");
var ai21 = document.querySelector("#ai21");
var ai22 = document.querySelector("#ai22");





function matOrder(){
  var a = document.querySelector('input[name="order"]:checked').value;
  var operation = operation = document.querySelector('input[name="operation"]:checked').value;

  if(a === "2x2" && operation === "multiply"){
    document.querySelector(".mat2x2").style.display = "block";
    document.querySelector("#mul2x2").style.display = "block";
    document.querySelector("#sub2x2").style.display = "none";
    document.querySelector("#add2x2").style.display = "none";
    document.querySelector(".op3x3").style.display = "none";
  }
  else if(a ==="2x2" && operation === "subtract"){
    document.querySelector(".mat2x2").style.display = "block";
    document.querySelector("#mul2x2").style.display = "none";
    document.querySelector("#sub2x2").style.display = "block";
    document.querySelector("#add2x2").style.display = "none";
    document.querySelector(".op3x3").style.display = "none";
  }
  else if(a === "2x2" && operation === "add"){
    document.querySelector(".mat2x2").style.display = "block";
    document.querySelector("#add2x2").style.display = "block";
    document.querySelector("#mul2x2").style.display = "none";
    document.querySelector("#sub2x2").style.display = "none";
    document.querySelector(".op3x3").style.display = "none";
  }
  else if(a === "2x2" && operation === "inverse"){
    document.querySelector(".inverse2x2").style.display = "block";
    document.querySelector("#mul2x2").style.display = "none";
    document.querySelector("#sub2x2").style.display = "none";
    document.querySelector("#add2x2").style.display = "none";
    document.querySelector(".mat2x2").style.display = "none";
    document.querySelector(".ans2x2").style.display = "none";
    document.querySelector(".op3x3").style.display = "none";
  }

  else if(a === "3x3"){
    document.querySelector(".op3x3").style.display = "block";
    document.querySelector("#mul2x2").style.display = "none";
    document.querySelector("#sub2x2").style.display = "none";
    document.querySelector("#add2x2").style.display = "none";
    document.querySelector(".mat2x2").style.display = "none";
    document.querySelector(".ans2x2").style.display = "none";
    document.querySelector(".inverse2x2").style.display = "none";
  }
}



function matMul() {
    
  document.querySelector(".ans2x2").style.display = "block";
   if (a11.value === "" || a12.value === "" || a21.value === "" || a22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix A";
    document.querySelector(".ans2x2").style.display = "block";
  }
  else if (b11.value === "" || b12.value === "" || b21.value === "" || b22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix B";
  }
  
  else {
    var p1 = a11.value * b11.value + a12.value * b21.value;
    var p2 = a11.value * b12.value + a12.value * b22.value;
    var p3 = a21.value * b11.value + a22.value * b21.value;
    var p4 = a21.value * b12.value + a22.value * b22.value;

    
    document.querySelector("#r11").innerHTML = p1;
    document.querySelector("#r12").innerText = p2;
    document.querySelector("#r21").innerHTML = p3;
    document.querySelector("#r22").innerHTML = p4;
  }

}



function matAdd() {
  document.querySelector(".ans2x2").style.display = "block";
  if (a11.value === "" || a12.value === "" || a21.value === "" || a22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix A";
 
  }
  else if (b11.value === "" || b12.value === "" || b21.value === "" || b22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix B";
  
  }
  
  else {

    var p1 = Number(a11.value) + Number(b11.value);
    var p2 = Number(a12.value) + Number(b12.value);
    var p3 = Number(a21.value) + Number(b21.value);
    var p4 = Number(a22.value) + Number(b22.value);

    
    document.querySelector("#r11").innerHTML = p1;
    document.querySelector("#r12").innerText = p2;
    document.querySelector("#r21").innerHTML = p3;
    document.querySelector("#r22").innerHTML = p4;
  }

}

function matSub() {
  document.querySelector(".ans2x2").style.display = "block";
  if (a11.value === "" || a12.value === "" || a21.value === "" || a22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix A";
   
  }
  else if (b11.value === "" || b12.value === "" || b21.value === "" || b22.value === "") {
    document.querySelector("#r11").innerText = "Please enter all entries in Matrix B";
  
  }
  
  else {
  
    var p1 = Number(a11.value) - Number(b11.value);
    var p2 = Number(a12.value) - Number(b12.value);
    var p3 = Number(a21.value) - Number(b21.value);
    var p4 = Number(a22.value) - Number(b22.value);

    
    document.querySelector("#r11").innerHTML = p1;
    document.querySelector("#r12").innerText = p2;
    document.querySelector("#r21").innerHTML = p3;
    document.querySelector("#r22").innerHTML = p4;
  }


}


function inverse_mat(){
  if (ai11.value === "" || ai12.value === "" || ai21.value === "" || ai22.value === "") {
    document.querySelector("#rs11").innerText = "Please enter all entries";
  }
  else{

    var det = ai11.value*ai22.value - ai21.value*ai12.value;
    document.querySelector("#one").innerText = "1";
    det = String(det);
    console.log(det);
    document.querySelector("#det").innerText = det;

    document.querySelector("#rs11").innerText = ai22.value;
    document.querySelector("#rs22").innerText = ai11.value;
    document.querySelector("#rs12").innerText = -ai12.value;
    document.querySelector("#rs21").innerText = -ai21.value;
  }

}

