let songs = [
    {
        title: "panda",
        src: "../../audio/panda.mp3",
        options: [
            {name: "panda", src: "../../img/panda.png", correct: true},
            {name: "pink", src: "../../img/pink.png", correct: false},
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },

    {
        title: "pink",
        src: "../../audio/pink.mp3",
        options: [
            {name: "panda", src: "../../img/panda.png", correct: false},
            {name: "pink", src: "../../img/pink.png", correct: true},
            {name: "green", src: "../../img/green.png", correct: false},
            {name: "nine", src: "../../img/nine.png", correct: false}
        ]
    },
    {
        title: "queen",
        src: "../../audio/queen.mp3",
        options: [
            {name: "queen", src: "../../img/queen.png", correct: true},
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "question", src: "../../img/question.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },

    {
        title: "question",
        src: "../../audio/question.mp3",
        options: [
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "question", src: "../../img/question.png", correct: true},
            {name: "robot", src: "../../img/robot.png", correct: false},
            {name: "five", src: "../../img/five.png", correct: false}
        ]
    },
    {
        title: "robot",
        src: "../../audio/robot.mp3",
        options: [
            {name: "robot", src: "../../img/robot.png", correct: true},
            {name: "rubber", src: "../../img/rubber.png", correct: false},
            {name: "car", src: "../../img/car.png", correct: false},
            {name: "doll", src: "../../img/doll.png", correct: false}
        ]
    },
    {
        title: "bag",
        src: "../../audio/bag.mp3",
        options: [
            {name: "panda", src: "../../img/panda.png", correct: false},
            {name: "bag", src: "../../img/bag.png", correct: true},
            {name: "rubber", src: "../../img/rubber.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: false}
        ]
    },
    {
        title: "frog",
        src: "../../audio/frog.mp3",
        options: [
            {name: "frog", src: "../../img/frog.png", correct: true},
            {name: "jump", src: "../../img/jump.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false}
        ]
    },
    {
        title: "rubber",
        src: "../../audio/rubber.mp3",
        options: [
            {name: "robot", src: "../../img/robot.png", correct: false},
            {name: "doll", src: "../../img/doll.png", correct: false},
            {name: "frog", src: "../../img/frog.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: true}
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
