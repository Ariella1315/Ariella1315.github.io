"use strict";

let html = '<div class="box">';
html += 'WORDS';
html += '</div>';
html += '<button class="key">NEXT</button>';
document.getElementById("context").innerHTML=html;

let theBox=document.getElementsByClassName("box");
let theButton=document.getElementsByClassName("key");
let Dictionary=DICTIONARY.split("\n");
Dictionary.splice(0, 1);
Dictionary.splice(length-1, 1);
let i=0;
let theWords=Dictionary[i];
let MOD=13;
console.log(Dictionary[Dictionary.length-1]);
theButton[0].addEventListener('click', function(e){
	theWords=Dictionary[i];
	theBox[0].innerText=theWords;
	console.log(theBox[0].innerText);
	i=(i+MOD)%(Dictionary.length);
	if(i==0){
		MOD += 1;
	}
})
