'use strict'

/* let option = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: "16px",
        color: "red"
    }
};

console.log(JSON.stringify(option));
console.log(JSON.parse(JSON.stringify(option))); */

let uah = document.getElementById("uah"),
    usd = document.getElementById("usd");

     uah.addEventListener("input", () => {
       let request = new XMLHttpRequest();
         
       request.open('GET', 'js/current.json');
       request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
       request.send();


       request.addEventListener("readystatechange", function(){
         if (request.readyState === 4 && request.status == 200){
             let data  = JSON.parse(request.response);
             usd.value = (uah.value / data.usd).toFixed(3);
         }else{
             usd.value = "Error";
         }
       });
       
     });

     usd.addEventListener('input', () => {
         let request = new XMLHttpRequest();
         request.open('GET', 'js/current.json');
         request.setRequestHeader('Content-type', 'apication/jsom; charset=utf-8');
         request.send();

         request.addEventListener('readystatechange', function(){
             if(request.readyState === 4 && request.status == 200){
                 let data = JSON.parse(request.response);
                 uah.value = (usd.value * data.usd).toFixed(3);
             }else{
                 uah.value = "Error";
             }

         });

     });


