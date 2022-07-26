let songs = [
    {
        title: "jug",
        src: "../../audio/jug.mp3",
        options: [
            {name: "jug", src: "../../img/jug.png", correct: true},
            {name: "jump", src: "../../img/jump.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false},
            {name: "king", src: "../../img/king.png", correct: false}
        ]
    },

    {
        title: "jump",
        src: "../../audio/jump.mp3",
        options: [
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "jump", src: "../../img/jump.png", correct: true},
            {name: "jug", src: "../../img/jug.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: false}
        ]
    },
    {
        title: "kick",
        src: "../../audio/kick.mp3",
        options: [
            {name: "kick", src: "../../img/kick.png", correct: true},
            {name: "jump", src: "../../img/jump.png", correct: false},
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "ball", src: "../../img/ball.png", correct: false}
        ]
    },

    {
        title: "king",
        src: "../../audio/king.mp3",
        options: [
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "king", src: "../../img/king.png", correct: true},
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false}
        ]
    },
    {
        title: "legs",
        src: "../../audio/legs.mp3",
        options: [
            {name: "legs", src: "../../img/legs.png", correct: true},
            {name: "jump", src: "../../img/jump.png", correct: false},
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false}
        ]
    },
    {
        title: "house",
        src: "../../audio/house.mp3",
        options: [
            {name: "hat", src: "../../img/hat.png", correct: false},
            {name: "house", src: "../../img/house.png", correct: true},
            {name: "igloo", src: "../../img/igloo.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false}
        ]
    },
    {
        title: "elephant",
        src: "../../audio/elephant.mp3",
        options: [
            {name: "lion", src: "../../img/lion.png", correct: false},
            {name: "elephant", src: "../../img/elephant.png", correct: true},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false}
        ]
    },
    {
        title: "lion",
        src: "../../audio/lion.mp3",
        options: [
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false},
            {name: "tiger", src: "../../img/tiger.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: true}
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
