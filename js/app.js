particlesJS.load('particles-js', 'js/particles.json', function(){
  console.log('particles.json loaded...');
});


//Hover card
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  let moreInfo = card.querySelector(".more-info");

  card.addEventListener('click', (event) => {
    if(event.target.classList == "more-info") {
      card.classList.remove('is-flipped');
      card.classList.add('is-flipped');
    }
  });
  
});





// let moreInfo = document.querySelector(".more-info");
// let card = document.querySelector(".card");

// moreInfo.addEventListener('click', (e) => {
//   card.classList.toggle('is-flipped');
// });
