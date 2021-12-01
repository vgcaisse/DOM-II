import './less/index.less'

// Your code goes here!

// -------------------------One-----------------------------
window.addEventListener('load', event => {
    console.log(`${event.type} happened`);
});
// -------------------------Two-----------------------------
window.addEventListener('scroll', event => {
    console.log(`${event.type} happened`);
});

// -------------------------Three-----------------------------
const button = document.querySelectorAll('.btn'); 
// button.addEventListener('mouseover', event => {
//     console.log(`${event.type} happened`);
// });

button.forEach(button => {
    button.addEventListener('mouseover', function(event) {
        console.log(`${event.type} happened`);
    });
});

// -------------------------Four-----------------------------
window.addEventListener('keydown', event => {
    console.log(`${event.type} happened`);
});

// -------------------------Five-----------------------------
button.forEach(button => {
    button.addEventListener('dblclick', function(event) {
        console.log(`event passing through ${event.currentTarget.nodeName}`);
    });
});

// -------------------------Six-----------------------------
window.addEventListener('select', event => {
    console.log(`${event.currentTarget} was selected`);
});

// -------------------------Seven-----------------------------
const navItems = document.querySelectorAll('a')

navItems.forEach(navItems => {
    navItems.addEventListener("click", function(event) {
      event.preventDefault();
      console.log(`The ${event.target.textContent} link is broken!`);
    })
  })

// -------------------------Eight-----------------------------
// const h1Color = querySelectorAll('h1');

// h1Color.forEach(h1Color => {
//     h1Color.addEventListener("click", function(event) {
//       event.preventDefault();
//       console.log(`The ${event.target.textContent} link is broken!`);
//     })
//   })
// document.querySelectorAll('h1').style.color = 'teal';

// document.getElementsByClassName('h1.logo-heading').style.color = 'teal';

// -------------------------Nine-----------------------------
// const biggerP = document.querySelectorAll('p').style.fontSize = '40px';

// biggerP.addEventListener('40px', )

// -------------------------Ten-----------------------------


