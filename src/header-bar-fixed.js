const $headerBarFixed = document.querySelector('.header-bar-fixed');
const $headerBar = document.querySelector('.header-bar');

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    if(scroll > 90) {
        $headerBarFixed.classList.add('-active');
        $headerBar.classList.add('-fixed')
    } else {
        $headerBarFixed.classList.remove('-active');
        $headerBar.classList.remove('-fixed');
    }
})