document.addEventListener("DOMContentLoaded", ()=>{
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let sal in salaries) {
    sum += salaries[sal];
  }
  alert(sum);
})


