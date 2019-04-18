function square(){
    var number = document.getElementById('square-input').value
        alert("The result of squaring the number " + number+ " is "+number**2)
}


function halfnumber(){
     var number2 = document.getElementById('half-input').value
        alert("Half of "+number2+" is "+number2/2)
}

function Percent(){
    var number3 = document.getElementById('percent1-input').value
    var number4 = document.getElementById('percent2-input').value
    var percentage= (number3/number4)*100
        alert(number3+" is "+percentage+"% of"+number4)
}
function area(){
   var number5 = document.getElementById('area-input').value
   var result= Math.PI*(number5**2)
        alert("the are of a circle with radius"+number5+" is "+result)
   }