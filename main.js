const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/** 
 * @param {Date} date
*/

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
timeElement.textContent = day;

function formatDate(date) {
    const MONTHS = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const now = new Date();
dateElement.textContent = formatDate(now);

// If you click on any incomplete checkbox, it displays none and displays flex in the complete list and the number reduces
const incomplete = document.querySelector('#incomplete');
incomplete.textContent = 10
const complete = document.querySelector('#complete');
complete.textContent = 0
const check = document.querySelectorAll('#list1 input[type="checkbox"]');
console.log(check)
const checked = document.querySelector('#list2')
console.log(checked)
const undone = document.querySelector('#notDone')
console.log(undone)
const para1 = document.querySelector('#one')
console.log(para1)
const para2 = document.querySelector('#two')
console.log(para2)
const para3 = document.querySelector('#three')
console.log(para3)
const para4 = document.querySelector('#four')
console.log(para4)
const para5 = document.querySelector('#five')
console.log(para5)
const para6 = document.querySelector('#six')
console.log(para6)
const para7 = document.querySelector('#seven')
console.log(para7)
const para8 = document.querySelector('#eight')
console.log(para8)
const para9 = document.querySelector('#nine')
console.log(para9)
const para10 = document.querySelector('#ten')
console.log(para10)
const checkIds = Array.from(check).map(checkbox => checkbox.id);
console.log(checkIds);
const comp = []
const comp1 = document.querySelector('#comp1');
console.log(comp1)
const comp2 = document.querySelector('#comp2');
console.log(comp2)
const comp3 = document.querySelector('#comp3');
console.log(comp3)
const comp4 = document.querySelector('#comp4');
console.log(comp4)
const comp5 = document.querySelector('#comp5');
console.log(comp5)
const comp6 = document.querySelector('#comp6');
console.log(comp6)
const comp7 = document.querySelector('#comp7');
console.log(comp7)
const comp8 = document.querySelector('#comp8');
console.log(comp8)
const comp9 = document.querySelector('#comp9');
console.log(comp9)
const comp10 = document.querySelector('#comp10');
console.log(comp10)

const x = check
x.forEach(item => {
    item.addEventListener('click', (e) => {
      if(e.target.id == 'early rising') {
        para1.style.display = 'none';
        let d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp1.style.display = 'flex'
      }
      if (e.target.id == 'morning exercise') {
        para2.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp2.style.display = 'flex'
      }
      if (e.target.id == 'healthy eating') {
        para3.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp3.style.display = 'flex'
      }
      if (e.target.id == 'hydration') {
        para4.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp4.style.display = 'flex'
      }
      if (e.target.id == 'meditation') {
        para5.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp5.style.display = 'flex'
      }
      if (e.target.id == 'reading') {
        para6.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp6.style.display = 'flex'
      }
      if (e.target.id == 'goal setting') {
        para7.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp7.style.display = 'flex'
      }
      if (e.target.id == 'quality sleep') {
        para8.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp8.style.display = 'flex'
      }
      if (e.target.id == 'LST') {
        para9.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp9.style.display = 'flex'
      }
      if (e.target.id == 'LNH') {
        para10.style.display = 'none';
        d = checkIds.pop()
        incomplete.textContent = checkIds.length
        let w = comp.push(d)
        complete.textContent = w
        comp10.style.display = 'flex'
      }
      if (checkIds.length === 0) {
        undone.style.display = 'none';
      }
    })
  })