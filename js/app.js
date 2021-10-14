particlesJS.load('particles-js', 'js/particles.json', function(){
  console.log('particles.json loaded...');
});


let frontTitle = document.querySelector(".front-title");
let moreInfo = document.querySelector(".more-info");
let card = document.querySelector(".card");

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
