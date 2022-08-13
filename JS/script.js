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

function countUp() {
    counters.forEach((counter) =>{
        counter.innerText = '0';

        const updateCounter = () =>{
            const target = +counter.getAttribute('data-target');
            //Get current counter value
            const c = +counter.innerText;
            //Create Increment
            const increment = target / 100;
            //Add increment
            if(c < target){
                //Set Counter Value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            }

        };
        updateCounter();
    });
}