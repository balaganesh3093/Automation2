const imoney= 100;
var shop="open";
chocolate ="yes";
icecream="yes";
const munch=5;
const fivestar=10;
const vennila=40;
munchi=10;
fivestari=2;
vennilai=2;

if(shop==="open"){
  if(chocolate==="yes")
  {
    a=((imoney)-((munch*munchi)+(fivestar*fivestari)))
    if(a>0){
  console.log("completed purchasing munch and fivestar ,My remaining money is " + a)  
    }
    else{ 
      console.log("I dont have sufficient money to buy chocolate")
  }}
  else if(icecream==="yes") {
    vennilar=vennila*vennilai;
    console.log("Completed purchasing icecream, My remianing money is " + (imoney-vennilar))
}
}
else{
console.log("shop is closed")
}