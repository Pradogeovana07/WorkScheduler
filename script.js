 for(let i=9;i<18; i++){
   var text = localStorage.getItem(i)
   if(text){
      let row = document.getElementById(""+i)
      row.value = text
   }
 }

window.setInterval(function(){
   
   document.getElementById("currentDay").textContent= moment().format('dddd MMMM Do YYYY h:mm:ss a');

   let currentHour = moment().hours();
   let color;
   for(let i=9;i<18; i++){
      if(i < currentHour){
         color = "past"
         //grey
      }
      else if(i==currentHour){
         color = "present"
         //red
      }
      else{
         color= "future"
         //green
      }
     
      let row = document.getElementById(""+i)
      row.classList.add(color)
   }
}, 1000);

var elements = document.getElementsByClassName("saveBtn");

var myFunction = function() {
    var attribute = this.getAttribute("id");
    var hour = attribute.substring(1)
    var text=document.getElementById(hour).value
    localStorage.setItem(hour,text)
    alert(text);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

