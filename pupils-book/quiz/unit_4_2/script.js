let songs = [
    {
        title: "red",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/r/red/red_B/red_British_English_pronunciation_94339.mp3",
        options: [
            {name: "red", src: "../../img/red.png", correct: true},
            {name: "brown", src: "../../img/brown.png", correct: false},
            {name: "pink", src: "../../img/pink.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: false}
        ]
    },

    {
        title: "brown",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/bro/brown/brown_British_English_pronunciation_72181.mp3",
        options: [
            {name: "orange", src: "../../img/orange.png", correct: false},
            {name: "brown", src: "../../img/brown.png", correct: true},
            {name: "red", src: "../../img/red.png", correct: false},
            {name: "yellow", src: "../../img/yellow.png", correct: false}
        ]
    },
    {
        title: "yellow",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/y/yel/yello/yellow_British_English_pronunciation_106515.mp3",
        options: [
            {name: "yellow", src: "../../img/yellow.png", correct: true},
            {name: "orange", src: "../../img/orange.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: false},
            {name: "blue", src: "../../img/blue.png", correct: false}
        ]
    },

    {
        title: "blue",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/blu/blue_/blue_British_English_pronunciation_71384.mp3",
        options: [
            {name: "pink", src: "../../img/pink.png", correct: false},
            {name: "blue", src: "../../img/blue.png", correct: true},
            {name: "purple", src: "../../img/purple.png", correct: false},
            {name: "red", src: "../../img/red.png", correct: false}
        ]
    },
    {
        title: "green",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gre/green/green_British_English_pronunciation_79868.mp3",
        options: [
            {name: "orange", src: "../../img/orange.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: true},
            {name: "brown", src: "../../img/brown.png", correct: false},
            {name: "yellow", src: "../../img/yellow.png", correct: false}
        ]
    },
    {
        title: "orange",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/o/ora/orang/orange_British_English_pronunciation_89665.mp3",
        options: [
            {name: "yellow", src: "../../img/yellow.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: true},
            {name: "brown", src: "../../img/brown.png", correct: false},
            {name: "red", src: "../../img/red.png", correct: false}
        ]
    },
    {
        title: "purple",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/p/pur/purpl/purple_British_English_pronunciation_93697.mp3",
        options: [
            {name: "pink", src: "../../img/pink.png", correct: false},
            {name: "purple", src: "../../img/purple.png", correct: true},
            {name: "blue", src: "../../img/blue.png", correct: false},
            {name: "red", src: "../../img/red.png", correct: false}
        ]
    },
    {
        title: "pink",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/p/pin/pink_/pink_British_English_pronunciation_91701.mp3",
        options: [
            {name: "purple", src: "../../img/purple.png", correct: false},
            {name: "pink", src: "../../img/pink.png", correct: true},
            {name: "brown", src: "../../img/brown.png", correct: false},
            {name: "red", src: "../../img/red.png", correct: false}
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
