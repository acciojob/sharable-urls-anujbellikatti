// your code here

let name = document.getElementById("name");
let year = document.getElementById("year");
let btn = document.getElementById("button");
let url = document.getElementById("url");



// btn.addEventListner("click",f());

function f(){
	let name1=name.value;
	let year1 = year.value;
	if(name1!==""&&year1!==""){
	url.innerHTML="https://localhost:8080/?name="+name1+"&year="+year1;
	}
	else if(name1===""&&year1!==""){
	url.innerHTML="https://localhost:8080/?year="+year1;
	}else if(name1!==""&&year1===""){
	url.innerHTML="https://localhost:8080/?name="+name1;
	}
	
}
