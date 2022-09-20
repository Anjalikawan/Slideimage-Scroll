const slider = document.querySelectorAll('.picturein');
function checkSlide() {
    slider.forEach(slider => {
        const slideimage = (window.scrollY + window.innerHeight) - slider.height/2;
        const bottomimg = slider.offsetTop + slider.height;
        const halfimage = slideimage > slider.offsetTop;
        const scrollnot = window.scrollY < bottomimg;
        if (halfimage && scrollnot) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');
        }
       
    });  
   //console.log('hi')
}
window.addEventListener('scroll', checkSlide);