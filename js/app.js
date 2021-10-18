particlesJS.load('particles-js', 'js/particles.json', function(){
  console.log('particles.json loaded...');
});


//Hover card
let cards = document.querySelectorAll(".card");


cards.forEach(card => {
  let moreInfo = card.querySelector(".more-info");

  card.addEventListener('click', (event) => {
    if(event.target.classList == "more-info") {
      card.classList.toggle('is-flipped');
    }
  });

  window.addEventListener('click', event => {
    if (!event.target.classList.contains('more-info')) {
        card.classList.remove('is-flipped');
    }
  });
});


// window.addEventListener('click', event => {
//   if (!event.target.classList.contains('more-info')) {
//     cards.forEach(card => {
//       card.classList.remove('is-flipped');
//     });
//   }
// });





// let moreInfo = document.querySelector(".more-info");
// let card = document.querySelector(".card");

// moreInfo.addEventListener('click', (e) => {
//   card.classList.toggle('is-flipped');
// });
