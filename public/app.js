const buttonNumber=document.getElementById('button-number');
const buttonName=document.getElementById('button-name');
const roottag =document.getElementById("root");

buttonNumber.addEventListener('click',fnumber);

buttonName.addEventListener('click',fname);

function fnumber(){
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
roottag.innerHTML="My lucky number are"    + n1 +  "and" +   n2

}

function fname(){
roottag.innerHTML="My name is Sri Naveen Patibandla"
}