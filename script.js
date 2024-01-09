// function plus
let plus = Array.from(document.getElementsByClassName('add'));
for (let i = 0; i <plus.length ; i++) {
    plus[i].addEventListener('click', function() {
  counter[i].innerHTML++
    })


  // fonction moins
  let minus = Array.from(document.getElementsByClassName('minus'));

  minus[i].addEventListener('click', function() {
    if(counter[i].innerHTML > 0) {
    counter[i].innerText--;
    }
  })
 
// we call our func here for heart change 
let heart = Array.from(document.getElementsByClassName('heart'))
heart[i].addEventListener('click', changeColor)

}