  const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье"
  }
  const weekDays1 = {
    "Mo": "Luni",
    "Tu": "Marti",
    "We": "Miercuri",
    "Th": "Joi",
    "Fr": "Vineri",
    "Sa": "Simbata",
    "Su": "Duminica"
  }
  function translate(){
  var person = {
    "Mo": weekDays.Mo + "-" + weekDays1.Mo,
    "Tu": weekDays.Tu + "-" + weekDays1.Tu,
    "We":  weekDays.We + "-" + weekDays1.We,
    "Th": weekDays.Th + "-" + weekDays1.Th,
    "Fr": weekDays.Fr + "-" + weekDays1.Fr,
    "Sa":weekDays.Sa + "-" + weekDays1.Sa,
    "Su":weekDays.Mo + "-" + weekDays1.Mo
  };
  console.log(person)
}
translate()


