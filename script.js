
   let weigt_msg=document.getElementById('weigt_msg')
   let details=document.getElementById('details')
   let weight=document.querySelector('#weight')
   let height=document.querySelector('#height')

  let btn=document.getElementById('btn')
  btn.addEventListener('click',()=>{
    if(weight.value=="" ||isNaN(weight.value) || height.value=='' || isNaN(height.value)){
alert('enter valid number')
    }
   else {
    let Heigth_in_m=0.305*height.value;
   
    heights=Heigth_in_m*Heigth_in_m
 
   let bmi= weight.value/heights

let FinalBmir=Math.floor(bmi)
if( FinalBmir<18){
    weigt_msg.innerHTML=`your BMI weight is ${FinalBmir}`
    details.innerHTML="it falls within underweight"
}
else if(FinalBmir<24){
    weigt_msg.innerHTML=`your BMI weight is ${FinalBmir}`
    details.innerHTML="it falls within healthy weight"

}
else if(FinalBmir<30){
    weigt_msg.innerHTML=`your BMI weight is ${FinalBmir}`
    details.innerHTML="its falls withinn overweight"
}
else{
    weigt_msg.innerHTML=`your BMI weight is ${FinalBmir}`
    details.innerHTML="bese range"

}
   }
    weight.value=""
    height.value=""
  })
