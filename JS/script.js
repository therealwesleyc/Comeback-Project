const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

btn.addEventListener('click', navToggle);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function countUp(){
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            //Get count target
            const target = +counter.getAttribute('data-target');
            //Get current counter value
            const c = +counter.innerText;

            //Create increment
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;
            }
        };
        updateCounter();
    });
}