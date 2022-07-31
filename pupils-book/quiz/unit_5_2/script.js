let songs = [
    {
        title: "dress",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/dre/dress/dress_British_English_pronunciation.mp3",
        options: [
            {name: "dress", src: "../../img/dress.png", correct: true},
            {name: "jumper", src: "../../img/jumper.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: false},
            {name: "T-shirt", src: "../../img/tshirt.png", correct: false}
        ]
    },

    {
        title: "jumper",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/j/jum/jumpe/jumper_British_English_pronunciation.mp3",
        options: [
            {name: "shirt", src: "../../img/shirt.png", correct: false},
            {name: "jumper", src: "../../img/jumper.png", correct: true},
            {name: "T-shirt", src: "../../img/tshirt.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: false}
        ]
    },
    {
        title: "shoes",
        src: "https://d1qx7pbj0dvboc.cloudfront.net/shoes.mp3",
        options: [
            {name: "shoes", src: "../../img/shoes.png", correct: true},
            {name: "trousers", src: "../../img/trousers.png", correct: false},
            {name: "socks", src: "../../img/socks.png", correct: false},
            {name: "shirt", src: "../../img/shirt.png", correct: false}
        ]
    },

    {
        title: "skirt",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/ski/skirt/skirt_British_English_pronunciation_98261.mp3",
        options: [
            {name: "shoes", src: "../../img/shoes.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: true},
            {name: "shirt", src: "../../img/shirt.png", correct: false},
            {name: "socks", src: "../../img/socks.png", correct: false}
        ]
    },
    {
        title: "trousers",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/t/tro/trous/trousers_British_English_pronunciation.mp3",
        options: [
            {name: "trousers", src: "../../img/trousers.png", correct: true},
            {name: "socks", src: "../../img/socks.png", correct: false},
            {name: "jumper", src: "../../img/jumper.png", correct: false},
            {name: "shoes", src: "../../img/shoes.png", correct: false}
        ]
    },
    {
        title: "T-shirt",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/T/T_s/T_shi/T_shirt_British_English_pronunciation.mp3",
        options: [
            {name: "T-shirt", src: "../../img/tshirt.png", correct: true},
            {name: "shoes", src: "../../img/shoes.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: false},
            {name: "shirt", src: "../../img/shirt.png", correct: false}
        ]
    },
    {
        title: "socks",
        src: "https://d1qx7pbj0dvboc.cloudfront.net/socks.mp3",
        options: [
            {name: "socks", src: "../../img/socks.png", correct: true},
            {name: "shoes", src: "../../img/shoes.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: false},
            {name: "trousers", src: "../../img/trousers.png", correct: false}
        ]
    },
    {
        title: "shirt",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/shi/shirt/shirt_British_English_pronunciation.mp3",
        options: [
            {name: "T-shirt", src: "../../img/tshirt.png", correct: false},
            {name: "shoes", src: "../../img/shoes.png", correct: false},
            {name: "skirt", src: "../../img/skirt.png", correct: false},
            {name: "shirt", src: "../../img/shirt.png", correct: true}
        ]
    }
];
let playerContainer = document.querySelector(".playerContainer"),
    player = document.querySelector(".player"),
    grid = document.querySelector(".grid"),
    next = document.querySelector(".next"),
    finalPage = document.querySelector(".finish");
    rightCount = document.querySelector("#rightCount");

    let rightAnswers = 0;
    let wrongAnswers = 0;

let shuffledSongs = shuffle(songs);
    currentIndex = 0;

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function start(){
        player.src = shuffledSongs[0].src;
        player.play();
    }

function showOptions(){
    shuffle(shuffledSongs[currentIndex].options).forEach((option) => {
        const image = new Image(100, 100);
        image.classList.add("img");
        image.src = option.src;
//        const button = document.createElement("button");
//        button.style.backgroundImage = "url(option.src)";
//        button.innerHTML = '<img width="100" height="100" src=' + option.src + '>' + option.name;
        if(option.correct){
            image.dataset.correct = true;

        }
        image.addEventListener("click", selectAnswer);

        grid.appendChild(image);
    });
}

function eraseData(){
    grid.innerHTML = "";
    next.classList.add("hide");
}
function disableButtons(buttons){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
function selectAnswer(e){
    let button = e.target;
    if(button.dataset.correct){
        rightAnswers ++;
        currentIndex ++;
        next.classList.remove("hide");
        disableButtons(grid.children);
        button.classList.add("correct");
    } else{
        wrongAnswers ++;
        currentIndex ++;
        next.classList.remove("hide");
        disableButtons(grid.children);
        button.classList.add("incorrect");
    }
}
function nextSong(){
    if(shuffledSongs.length > currentIndex){
        eraseData();
        player.src = shuffledSongs[currentIndex].src;
        showOptions();
    } else {
        finish();
    }
}

function finish(){
    rightCount.innerText = rightAnswers + " out of " + songs.length;
//    player.src = "../../audio/andantino.mp3";
    playerContainer.classList.add("hide");
    eraseData();
    finalPage.classList.remove("hide");
}
window.onload = start;
showOptions();
next.addEventListener("click", nextSong);
