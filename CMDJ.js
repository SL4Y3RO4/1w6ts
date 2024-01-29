document.addEventListener('keydown', (ev) => {

if(ev.key == 'r' || ev.key == ' ') {

window.location.reload();

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

if(ev.key == 's') {

score.style.display = 'none';
seconds.style.display = 'none';

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

}

if(ev.key == 'c') {

t1.style.width = '21px';
t1.style.height = '21px';
    
t2.style.width = '21px';
t2.style.height = '21px';

t3.style.width = '21px';
t3.style.height = '21px';

t4.style.width = '21px';
t4.style.height = '21px';

t4.style.width = '21px';
t4.style.height = '21px';

t5.style.width = '21px';
t5.style.height = '21px';

t6.style.width = '21px';
t6.style.height = '21px';

}
})