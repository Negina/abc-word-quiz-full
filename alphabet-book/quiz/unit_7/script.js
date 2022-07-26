let songs = [
    {
        title: "see",
        src: "../../audio/see.mp3",
        options: [
            {name: "see", src: "../../img/see.png", correct: true},
            {name: "sun", src: "../../img/sun.png", correct: false},
            {name: "van", src: "../../img/van.png", correct: false},
            {name: "insect", src: "../../img/insect.png", correct: false}
        ]
    },

    {
        title: "sun",
        src: "../../audio/sun.mp3",
        options: [
            {name: "see", src: "../../img/see.png", correct: false},
            {name: "sun", src: "../../img/sun.png", correct: true},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false}
        ]
    },
    {
        title: "tired",
        src: "../../audio/tired.mp3",
        options: [
            {name: "tired", src: "../../img/tired.png", correct: true},
            {name: "tiger", src: "../../img/tiger.png", correct: false},
            {name: "vase", src: "../../img/vase.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false}
        ]
    },

    {
        title: "tiger",
        src: "../../audio/tiger.mp3",
        options: [
            {name: "tired", src: "../../img/tired.png", correct: false},
            {name: "tiger", src: "../../img/tiger.png", correct: true},
            {name: "lion", src: "../../img/lion.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false}
        ]
    },
    {
        title: "under",
        src: "../../audio/under.mp3",
        options: [
            {name: "under", src: "../../img/under.png", correct: true},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false},
            {name: "panda", src: "../../img/panda.png", correct: false},
            {name: "sun", src: "../../img/sun.png", correct: false}
        ]
    },
    {
        title: "umbrella",
        src: "../../audio/umbrella.mp3",
        options: [
            {name: "under", src: "../../img/under.png", correct: false},
            {name: "umbrella", src: "../../img/umbrella.png", correct: true},
            {name: "see", src: "../../img/see.png", correct: false},
            {name: "sun", src: "../../img/sun.png", correct: false}
        ]
    },
    {
        title: "van",
        src: "../../audio/van.mp3",
        options: [
            {name: "van", src: "../../img/van.png", correct: true},
            {name: "vase", src: "../../img/vase.png", correct: false},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false}
        ]
    },
    {
        title: "question",
        src: "../../audio/question.mp3",
        options: [
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "question", src: "../../img/question.png", correct: true},
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false}
        ]
    },
    {
        title: "mountain",
        src: "../../audio/mountain.mp3",
        options: [
            {name: "mountain", src: "../../img/mountain.png", correct: true},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false},
            {name: "house", src: "../../img/house.png", correct: false},
            {name: "sun", src: "../../img/sun.png", correct: false}
        ]
    },
    {
        title: "vase",
        src: "../../audio/vase.mp3",
        options: [
            {name: "van", src: "../../img/van.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "vase", src: "../../img/vase.png", correct: true}
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
