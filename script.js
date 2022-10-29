function bmi( weight,heigh){
    let result= weight/(heigh*heigh);
    return result;
}
console.log(bmi(80,1.8));
function status (bodymass){
    if(bodymass < 18.5){
        return "لديك نقص في الوزن"
    } else if(bodymass>=18.5, bodymass<25){
        return "وزنك صحي"
    }

     else if (bodymass>=25){
        return "لديك زيادة في الوزن"
     }
}

function calculate(){
   let weight=document.getElementById("weight").value


let heigh=document.getElementById("height").value
let bmi_value = bmi(weight,heigh);
let desc = status (bmi_value);

let box = document.getElementById('result');
 box.innerText = bmi_value + " == " + desc
}


