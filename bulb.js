let bulb= document.querySelector("#bulb2");
let btn= document.querySelector("button");
let buttonsame=0 ;

btn.addEventListener("click",function(){
    if (buttonsame==0){
        // bulb.style.backgroundColor="yellow";
        bulb.src="./image/bulboff.avif";
        btn.innerHTML="ON";
        btn.style.color="blue";
        buttonsame = 1;
    }else{
        // bulb.style.backgroundColor="transparent";
        bulb.src="./image/bulbon.avif";
        btn.innerHTML="OFF";
        btn.style.color="red";
        buttonsame=0;
    }
  
});





