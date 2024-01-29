//global variables
let t1 = document.getElementById('t1','#hitbox');
let t2 = document.getElementById('t2','#hitbox3');
let t3 = document.getElementById('t3','#hitbox3');
let t4 = document.getElementById('t4','#hitbox4');
let t5 = document.getElementById('t5','#hitbox5');
let t6 = document.getElementById('t6','#hitbox6');
let x;
let y;
let score = document.getElementById('score');
let s = 0;
let sound;
let share = document.querySelectorAll('div');
let seconds = document.getElementById('seconds');
let sec = 60;
let decay;
let hitbox = document.querySelector('.hitbox');

/*
decay = setInterval(function() {

seconds.innerHTML = 'Seconds: ' + sec;
sec--;

if(sec == -1) {

    t1.remove();
    t2.remove();
    t3.remove();
    t4.remove();
    t5.remove();
    t6.remove();
    seconds.innerHTML = 'Game Over';
    clearInterval(decay);
}

}, 1000);
*/

t1.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;

t1.style.left = x + 'px';
t1.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();

});


t2.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
    
t2.style.left = x + 'px';
t2.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();
    
});


t3.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
        
t3.style.left = x + 'px';
t3.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();
        
});


t4.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
        
t4.style.left = x + 'px';
t4.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();
      
});

t5.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
        
t5.style.left = x + 'px';
t5.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();
       
});


t6.addEventListener('click', function() {

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
        
t6.style.left = x + 'px';
t6.style.top = y + 'px';

score.innerHTML = 'Score: ' + s++;

sound = new Audio();
sound.src = '8Bit2.ogg';
sound.play();
     
});

document.body.onload = refresh();

function refresh() { 

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;

x2 = (Math.random() * 260) + 1;
y2 = (Math.random() * 260) + 1;

x3 = (Math.random() * 270) + 1;
y3 = (Math.random() * 270) + 1;

x4 = (Math.random() * 280) + 1;
y4 = (Math.random() * 280) + 1;

x5 = (Math.random() * 280) + 1;
y5 = (Math.random() * 280) + 1;

x6 = (Math.random() * 280) + 1;
y6 = (Math.random() * 280) + 1;
    
t1.style.left = x + 'px';
t1.style.top = y + 'px';

t2.style.left = x6 + 'px';
t2.style.top = y6 + 'px';

t3.style.left = x2 + 'px';
t3.style.top = y2 + 'px';

t4.style.left = x3 + 'px';
t4.style.top = y3 + 'px';

t5.style.left = x4 + 'px';
t5.style.top = y4 + 'px';

t6.style.left = x5 + 'px';
t6.style.top = y5 + 'px';

hitbox.style.left = x + 'px';
hitbox.style.top = y + 'px';

}




