
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const showImageText = document.getElementById('1');
const imageToShow = document.getElementById('s1');

const c1 = document.getElementById('2');
const sh1 = document.getElementById('s2');

const c2 = document.getElementById('3');
const sh2 = document.getElementById('s3');


const c3 = document.getElementById('4');
const sh3 = document.getElementById('s4');


const c4 = document.getElementById('5');
const sh4 = document.getElementById('s5');


const c5 = document.getElementById('6');
const sh5 = document.getElementById('s6');


const c6 = document.getElementById('7');
const sh6 = document.getElementById('s7');


const c7 = document.getElementById('8');
const sh7 = document.getElementById('s8');


const c8 = document.getElementById('9');
const sh8 = document.getElementById('s9');




showImageText.addEventListener('click', function() {
    
    imageToShow.classList.toggle('hidden');

    
});

c1.addEventListener('click', function() {
    
    sh1.classList.toggle('hidden');

    
});

c2.addEventListener('click', function() {
    
    sh2.classList.toggle('hidden');

    
});

c3.addEventListener('click', function() {
    
    sh3.classList.toggle('hidden');

    
});

c4.addEventListener('click', function() {
    
    sh4.classList.toggle('hidden');

    
});

c5.addEventListener('click', function() {
    
    sh5.classList.toggle('hidden');

    
});

c6.addEventListener('click', function() {
    
    sh6.classList.toggle('hidden');

    
});

c7.addEventListener('click', function() {
    
    sh7.classList.toggle('hidden');

    
});

c8.addEventListener('click', function() {
    
    sh8.classList.toggle('hidden');

    
});

c9.addEventListener('click', function() {
    
    sh9.classList.toggle('hidden');

    
});