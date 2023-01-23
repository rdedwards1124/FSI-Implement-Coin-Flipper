
let tailsCounter=0;
let headsCounter=0;
let tailsPercent=0;
let headsPercent=0;
let totalCounter = tailsCounter+headsCounter;


document.querySelector('#button2').addEventListener('click',function(){
    document.getElementById('img').src="https://via.placeholder.com/200";
    document.querySelector('#theFlip').textContent = 'Result:';
    document.querySelector('#heads').textContent = 0;
    document.querySelector('#tails').textContent = 0;
    document.querySelector('#heads-percent').textContent = 0+'%';
    document.querySelector('#tails-percent').textContent = 0+'%';
})

document.querySelector('#button1').addEventListener('click',function(){
    callFlip();
    totalCounter = tailsCounter+headsCounter;
    tailsPercent = tailsCounter/totalCounter * 100;
    headsPercent = headsCounter/totalCounter * 100;
    let h = headsPercent.toFixed();
    let t = tailsPercent.toFixed();

    document.querySelector('#heads-percent').textContent = h+'%';
    document.querySelector('#tails-percent').textContent = t+'%';
})


async function callFlip(){
    let flipResult = (Math.floor(Math.random() * 2));
    
    if (flipResult===1){
        //It's Tails!!!
        document.querySelector('#theFlip').textContent = 'It is Tails!!';
        document.getElementById('img').src="./assets/images/penny-tails.jpg";
        tailsCounter++;
        document.querySelector('#tails').textContent = tailsCounter;
    } else if (flipResult===0){
        //It's Heads!!!
        document.querySelector('#theFlip').textContent = 'It is Heads!!';
        document.getElementById('img').src="./assets/images/penny-heads.jpg";
        headsCounter++;
        document.querySelector('#heads').textContent = headsCounter;
    }

}

