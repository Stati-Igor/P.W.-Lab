    area.value = localStorage.getItem('area'); //citeste din localStorage
        area.oninput = () => {                 //daca se fac schimbari
          localStorage.setItem('area', area.value) //se salveaza
        };
