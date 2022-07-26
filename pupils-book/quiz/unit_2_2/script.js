let songs = [
    {
        title: "angry",
        src: "/audio/angry.mp3",
        options: [
            {name: "angry", src: "../../img/angry.png", correct: true},
            {name: "scared", src: "../../img/scared.png", correct: false},
            {name: "tired", src: "../../img/tired.png", correct: false},
            {name: "hot", src: "../../img/hot.png", correct: false}
        ]
    },

    {
        title: "happy",
        src: "/audio/happy.mp3",
        options: [
            {name: "hot", src: "../../img/hot.png", correct: false},
            {name: "happy", src: "../../img/happy.png", correct: true},
            {name: "scared", src: "../../img/scared.png", correct: false},
            {name: "cold", src: "../../img/cold.png", correct: false}
        ]
    },
    {
        title: "sad",
        src: "/audio/sad.mp3",
        options: [
            {name: "sad", src: "../../img/sad.png", correct: true},
            {name: "scared", src: "../../img/scared.png", correct: false},
            {name: "sick", src: "../../img/sick.png", correct: false},
            {name: "cold", src: "../../img/cold.png", correct: false}
        ]
    },

    {
        title: "scared",
        src: "/audio/scared.mp3",
        options: [
            {name: "sick", src: "../../img/sick.png", correct: false},
            {name: "scared", src: "../../img/scared.png", correct: true},
            {name: "sad", src: "../../img/sad.png", correct: false},
            {name: "cold", src: "../../img/cold.png", correct: false}
        ]
    },
    {
        title: "sick",
        src: "/audio/sick.mp3",
        options: [
            {name: "sad", src: "../../img/sad.png", correct: false},
            {name: "sick", src: "../../img/sick.png", correct: true},
            {name: "scared", src: "../../img/scared.png", correct: false},
            {name: "hot", src: "../../img/hot.png", correct: false}
        ]
    },
    {
        title: "hot",
        src: "/audio/hot.mp3",
        options: [
            {name: "cold", src: "../../img/cold.png", correct: false},
            {name: "hot", src: "../../img/hot.png", correct: true},
            {name: "happy", src: "../../img/happy.png", correct: false},
            {name: "sick", src: "../../img/sick.png", correct: false}
        ]
    },
    {
        title: "cold",
        src: "/audio/cold.mp3",
        options: [
            {name: "hot", src: "../../img/hot.png", correct: false},
            {name: "sick", src: "../../img/sick.png", correct: false},
            {name: "scared", src: "../../img/scared.png", correct: false},
            {name: "cold", src: "../../img/cold.png", correct: true}
        ]
    },
    {
        title: "tired",
        src: "/audio/tired.mp3",
        options: [
            {name: "angry", src: "../../img/angry.png", correct: false},
            {name: "happy", src: "../../img/happy.png", correct: false},
            {name: "hot", src: "../../img/hot.png", correct: false},
            {name: "tired", src: "../../img/tired.png", correct: true}
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
