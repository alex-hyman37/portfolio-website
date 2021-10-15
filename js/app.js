particlesJS.load('particles-js', 'js/particles.json', function(){
  console.log('particles.json loaded...');
});


// Hover card
let cards = document.querySelectorAll(".card");
let projects = document.querySelector(".projects");

cards.forEach(card => {

  let frontTitle = card.querySelector(".front-title");
  let moreInfo = card.querySelector(".more-info");
  
  card.addEventListener('mouseover', (event) => {
    setTimeout(() => {
      frontTitle.style.display = 'none';
      moreInfo.style.display = 'block';
    }, 200);
  });

  card.addEventListener('mouseout', (event) => {
    setTimeout(() => {
      frontTitle.style.display = 'block';
      moreInfo.style.display = 'none';
    }, 200);
  });

  moreInfo.addEventListener('click', (e) => {
    card.classList.toggle('is-flipped');
  });

});

// Flip card




