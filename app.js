let gethour = document.querySelector('.hour');
let getmin = document.querySelector('.min');
let getsec = document.querySelector('.sec');

setInterval(function(){
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


gethour.innerHTML = hour;
getmin.innerHTML = min;
getsec.innerHTML = sec;

},1000);