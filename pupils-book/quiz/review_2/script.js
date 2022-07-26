let songs = [
    {
        title: "box",
        src: "../../audio/box.mp3",
        options: [
            {name: "box", src: "../../img/box.png", correct: true},
            {name: "ball", src: "../../img/ball.png", correct: false},
            {name: "fox", src: "../../img/fox.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: false}
        ]
    },

    {
        title: "egg",
        src: "../../audio/egg.mp3",
        options: [
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: true},
            {name: "bag", src: "../../img/bag.png", correct: false},
            {name: "box", src: "../../img/box.png", correct: false}
        ]
    },
    {
        title: "house",
        src: "../../audio/house.mp3",
        options: [
            {name: "house", src: "../../img/house.png", correct: true},
            {name: "window", src: "../../img/window.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false},
            {name: "van", src: "../../img/van.png", correct: false}
        ]
    },

    {
        title: "elephant",
        src: "../../audio/elephant.mp3",
        options: [
            {name: "fox", src: "../../img/fox.png", correct: false},
            {name: "elephant", src: "../../img/elephant.png", correct: true},
            {name: "lion", src: "../../img/lion.png", correct: false},
            {name: "goat", src: "../../img/goat.png", correct: false}
        ]
    },
    {
        title: "legs",
        src: "../../audio/legs.mp3",
        options: [
            {name: "legs", src: "../../img/legs.png", correct: true},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false},
            {name: "van", src: "../../img/van.png", correct: false},
            {name: "see", src: "../../img/see.png", correct: false}
        ]
    },
    {
        title: "mountain",
        src: "../../audio/mountain.mp3",
        options: [
            {name: "sun", src: "../../img/sun.png", correct: false},
            {name: "mountain", src: "../../img/mountain.png", correct: true},
            {name: "igloo", src: "../../img/igloo.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false}
        ]
    },
    {
        title: "octopus",
        src: "../../audio/octopus.mp3",
        options: [
            {name: "octopus", src: "../../img/octopus.png", correct: true},
            {name: "worm", src: "../../img/worm.png", correct: false},
            {name: "frog", src: "../../img/frog.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false}
        ]
    },
    {
        title: "zoo",
        src: "../../audio/zoo.mp3",
        options: [
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "zoo", src: "../../img/zoo.png", correct: true},
            {name: "zookeeper", src: "../../img/zookeeper.png", correct: false},
            {name: "vase", src: "../../img/vase.png", correct: false}
        ]
    },
    {
        title: "queen",
        src: "../../audio/queen.mp3",
        options: [
            {name: "queen", src: "../../img/queen.png", correct: true},
            {name: "doll", src: "../../img/doll.png", correct: false},
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "see", src: "../../img/see.png", correct: false}
        ]
    },
    {
        title: "bag",
        src: "../../audio/bag.mp3",
        options: [
            {name: "box", src: "../../img/box.png", correct: false},
            {name: "bag", src: "../../img/bag.png", correct: true},
            {name: "jug", src: "../../img/jug.png", correct: false},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false}
        ]
    },
    {
        title: "car",
        src: "../../audio/car.mp3",
        options: [
            {name: "car", src: "../../img/car.png", correct: true},
            {name: "van", src: "../../img/van.png", correct: false},
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "hat", src: "../../img/hat.png", correct: false}
        ]
    },
    {
        title: "umbrella",
        src: "../../audio/umbrella.mp3",
        options: [
            {name: "sun", src: "../../img/sun.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: false},
            {name: "umbrella", src: "../../img/umbrella.png", correct: true}
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
