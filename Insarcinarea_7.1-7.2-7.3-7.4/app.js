document.addEventListener("DOMContentLoaded", ()=>{
    document.body.style.backgroundColor ="Red"; /*7.1*/
   
    var div = document.getElementById('list');/*7.4*/
    var ul = document.createElement('ul');
    div.appendChild(ul);
    var data = "Elementul nr ";
       
    (function elemente  (n) {
        var div = document.getElementById('list');
        var ul = document.createElement('ul');
        div.appendChild(ul);
        var data = "Elementul nr ";
        if (n < 20) setTimeout(function () {  
                var li = document.createElement('li');
                li.innerHTML = data+n;
                ul.appendChild(li);
                var li = document.createElement('li');
                li.innerHTML = data+(n+1);
                ul.appendChild(li);
                n++
        elemente ( n ); 
        }, 2000);
             n++
    } (0));
    setTimeout(()=>{                              /*7.2*/
        document.body.style.backgroundColor ="Green";
    },3000);
})
document.getElementById("orange").addEventListener("click", ()=>{ /*7.3*/
    document.body.style.backgroundColor ="Orange";  
})

