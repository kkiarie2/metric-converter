
let numberx = document.querySelector("#number");
//let value = document.querySelector("#number").value|1;
let metersContent = document.getElementById('length-content');
let volumeContent = document.getElementById('volume-content');
let massContent = document.getElementById('mass-content');

numberx.addEventListener('change', function(event){
    let number = parseInt(event.target.value)
    converter(number);
})



function converter(number){
   let metersAns = (number*3.28084).toFixed(3)
   let feetAns = (number/3.28084).toFixed(3)
   let kgAns = (number*2.20462).toFixed(3)
   let lbAns =(number/2.20462).toFixed(3)
   let litersAns = (number*0.264172).toFixed(3)
   let gallonsAns =(number/0.264172).toFixed(3)
   let metersKey = number + "meters" + " " + "=" + " " + metersAns +  "feet" + " "
   let feetKey = number + "feet" + " " + "=" + " " + feetAns + "meters" + " "
    metersContent.innerText = metersKey + " " + "|" + " " + feetKey 

    let kgKey = number + "kg" + " " + "=" + " " + kgAns +  "lbs" + " "
    let lbKey = number + "lbs" + " " + "=" + " " + lbAns + "kg" + " "
    massContent.innerText = kgKey + " " + "|" + " " + lbKey

    let litersKey = number + "liters" + " " + "=" + " " + litersAns +  "gallons" + " "
    let gallonsKey = number + "gallons" + " " + "=" + " " + gallonsAns + "liters" + " "
    volumeContent.innerText = litersKey + " " + "|" + " " + gallonsKey 

}

