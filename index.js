
let numberValue = document.querySelector("#number");
let metersContent = document.getElementById('length-content');
let volumeContent = document.getElementById('volume-content');
let massContent = document.getElementById('mass-content');



function changeListener(){
        numberValue.addEventListener('input', function(event){
            if (event.target.value >=1){
           let number = parseInt(event.target.value)
           console.log(number)
                converter(number); 
            } else if(event.target.value = NaN) {
                numberValue.textContent = 1
                let number = 1
                converter(number); 
            }else if(event.target.value = null) {
                numberValue.textContent = 1
                let number = 1
                converter(number); 
            }
            else{
                numberValue.textContent = 1
                let number = 1
                converter(number); 
            }
            
            
           
            
        })
        

}
changeListener();








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

