window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#606bd3',
        '#60c2d3'
    ]

    console.log(sounds);
    
    //lets get sound here
    pads.forEach( (pad, index) =>{
        pad.addEventListener('click', function(){
            // console.log(sounds);
            sounds[index].currentTime = 0;  // it resets the current time of audio to zero
            sounds[index].play()
            
            createBubble(index)
        })
    })

    //Create a function that makes bubbles bubbles
    const createBubble = (index) =>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend',  function(){
            visual.removeChild(this);
        })
    }
})