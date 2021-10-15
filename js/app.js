particlesJS.load('particles-js', 'js/particles.json', function(){
  console.log('particles.json loaded...');
});


let frontTitle = document.querySelector(".front-title");
let moreInfo = document.querySelector(".more-info");
let card = document.querySelector(".card");
let projects = document.querySelector(".projects");


  projects.addEventListener('mouseover', (event) => {
    if(event.target.className === 'card') {
      setTimeout(() => {
        frontTitle.style.display = 'none';
        moreInfo.style.display = 'block';
      }, 200);

      if(event.target.className !== 'card') {
        setTimeout(() => {
          frontTitle.style.display = 'block';
          moreInfo.style.display = 'none';
        }, 200);
      }
    } else {
      return;
    }
  });
  
  // card.addEventListener('mouseout', (event) => {
  //   if(event.target.matches('.card'))
  //   setTimeout(() => {
  //     frontTitle.style.display = 'block';
  //     moreInfo.style.display = 'none';
  //   }, 200);
    
  // });

