function sum (obj)
{var n=obj.num1.value;
 var n1=obj.num2.value;
var s=0
if(n<n1 && n>=0){
for(var i = n; i<=n1; i++){
   if(i>0 && i%2==0){
 s+=i;
  }
    obj.res.value=s;

}
}
else{
  obj.res.value='Eroare de introducere';
}
n=null;
n1=null;
}