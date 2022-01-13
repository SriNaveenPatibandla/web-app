const buttonNumber=document.getElementById('button-number');
const buttonName=document.getElementById('button-name');

buttonNumber.addEventListener('click',fnumber)

buttonName.addEventListener('click',fname)

function fnumber(){
    console.log("Number Button is pressed");

}

function fname(){
console.log("Name button is clicked");
}