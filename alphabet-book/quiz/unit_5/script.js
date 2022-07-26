let songs = [
    {
        title: "mountain",
        src: "../../audio/mountain.mp3",
        options: [
            {name: "mountain", src: "../../img/mountain.png", correct: true},
            {name: "monkey", src: "../../img/monkey.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "octopus", src: "../../img/octopus.png", correct: false}
        ]
    },

    {
        title: "monkey",
        src: "../../audio/monkey.mp3",
        options: [
            {name: "mountain", src: "../../img/mountain.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: true},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false}
        ]
    },
    {
        title: "nine",
        src: "../../audio/nine.mp3",
        options: [
            {name: "nine", src: "../../img/nine.png", correct: true},
            {name: "five", src: "../../img/five.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false}
        ]
    },

    {
        title: "nut",
        src: "../../audio/nut.mp3",
        options: [
            {name: "nine", src: "../../img/nine.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: true},
            {name: "hat", src: "../../img/hat.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: false}
        ]
    },
    {
        title: "octopus",
        src: "../../audio/octopus.mp3",
        options: [
            {name: "octopus", src: "../../img/octopus.png", correct: true},
            {name: "insect", src: "../../img/insect.png", correct: false},
            {name: "mountain", src: "../../img/mountain.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false}
        ]
    },
    {
        title: "car",
        src: "../../audio/car.mp3",
        options: [
            {name: "car", src: "../../img/car.png", correct: true},
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: false}
        ]
    },
    {
        title: "jump",
        src: "../../audio/jump.mp3",
        options: [
            {name: "jump", src: "../../img/jump.png", correct: true},
            {name: "orange", src: "../../img/orange.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false},
            {name: "kick", src: "../../img/kick.png", correct: false}
        ]
    },
    {
        title: "orange",
        src: "../../audio/orange.mp3",
        options: [
            {name: "octopus", src: "../../img/octopus.png", correct: false},
            {name: "apple", src: "../../img/apple.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: true}
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
