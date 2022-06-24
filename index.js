let container = document.getElementById('container');
const count = 8;
for(let i=1; i<=count; i++){
    const slide = document.createElement('div');
    slide.classList.add('image');
    container.append(slide);
    function clickOn() {
      slide.style.width = '250px';
   };
    slide.addEventListener('click', clickOn);
    
    slide.addEventListener('mouseleave', () => {
        slide.style.width = '50px';
    } )
}

