const hero = document.querySelector('.hero');
hero.style.top = '500px';
hero.style.left = '100px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

//Idea - make the hero move
document.addEventListener('keydown', (event)=>{
    //Idea - allow WSAD controls
    if(event.code === 'ArrowLeft' || event.code === 'KeyA') {
        //Idea - prevent leaving the map
        if ((parseInt(hero.style.left)) === 0) {
            hero.style.left;
        }
        else {
            hero.style.left = (parseInt(hero.style.left) - 100) + 'px';
        }
       
    }
    if(event.code === 'ArrowRight' || event.code === 'KeyD') {
        if ((parseInt(hero.style.left)) === 700) {
            hero.style.left;
        }
        else {
            hero.style.left = (parseInt(hero.style.left) + 100) + 'px';
        }
        
    }
    if(event.code === 'ArrowUp' || event.code === 'KeyW') {
        if ((parseInt(hero.style.top)) === 0) {
            hero.style.top;
        }
        else {
            hero.style.top = (parseInt(hero.style.top) - 100) + 'px';
        }
        
    }
    if(event.code === 'ArrowDown' || event.code === 'KeyS') {
        if ((parseInt(hero.style.top)) === 500) {
            hero.style.top;
        }
        else {
            hero.style.top = (parseInt(hero.style.top) + 100) + 'px';
        }
        
    }//Idea - victory condition
    if (hero.getBoundingClientRect().left === treasure.getBoundingClientRect().left && hero.getBoundingClientRect().top === treasure.getBoundingClientRect().top) {
        alert("Congratulations!")
    }//Idea - defeat condition
    if (hero.getBoundingClientRect().left === ghost.getBoundingClientRect().left && hero.getBoundingClientRect().top === ghost.getBoundingClientRect().top) {
        alert("GHOST!")
    }
});

