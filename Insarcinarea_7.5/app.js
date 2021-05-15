document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("input").disabled = true;    
})
var num =parseInt(document.getElementById("input").value);
document.getElementById("-").addEventListener("click", ()=>{ 
    var num =parseInt(document.getElementById("input").value);
    if(num>1 & num<10){
        document.getElementById("input").stepDown(1);
        document.getElementById("+").disabled = false;
    }else if(num == 1){
        document.getElementById("input").stepDown(1);
        document.getElementById("-").disabled = true;
    }
    
})
document.getElementById("+").addEventListener("click", ()=>{ 
    var num =parseInt(document.getElementById("input").value);
    if(num>-1 & num<8){
        document.getElementById("input").stepUp(1);
        document.getElementById("-").disabled = false;
    }else if(num == 8){
        document.getElementById("input").stepUp(1);
        document.getElementById("+").disabled = true;
    }
})

