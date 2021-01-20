function sumPar (){
var n1=parseInt(document.getElementById("n1").value);
var n2=parseInt(document.getElementById("n2").value);
var s=0;
var i;
if(n1<n2){
for(var i = n1; i<=n2; i++){
   if(i%2==0){
   s+=i;
   }
}
alert("Suma numerelor pare din intervalul ales este: "+s);
}else if(n1>n2){
    for(var i = n2; i<=n1; i++){
       if(i%2==0){
      s+=i;
       }
    }
alert("Suma numerelor pare din intervalul ales este: "+s);
}else if(n1==n2){
    alert("Alegeti un interval corect");
}
}