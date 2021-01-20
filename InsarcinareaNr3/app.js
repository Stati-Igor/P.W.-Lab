document.addEventListener('DOMContentLoaded', () => {
    var muzica = ["Jazz", "Blues"];
    alert(muzica)
    var ciclu;
    var temp;
for(ciclu = 0; ciclu < 5; ciclu++){
switch(ciclu){
    case 0: 
        muzica.push("Rock-and-roll"); 
        alert(muzica);
        break;
    case 1: 
        muzica[muzica.length / 2 | 0] = "Clasica"; 
        alert(muzica);
        break;
    case 2: 
        temp = muzica[0]
        muzica.splice(0, 1);
        alert("Acest element: "+temp+" (primul)- a fost sters. Iata matricea obtinuta "+muzica);
        break;
    case 3: 
        muzica.splice(0, 0, "Rap", "Reggae"); 
        alert(muzica);
        break;
    default: 
        break;
}
}
});
