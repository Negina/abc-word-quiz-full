let songs = [
    {
        title: "mountain",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/m/mou/mount/mountain_British_English_pronunciation.mp3",
        options: [
            {name: "mountain", src: "../../img/mountain.png", correct: true},
            {name: "monkey", src: "../../img/monkey.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "octopus", src: "../../img/octopus.png", correct: false}
        ]
    },

    {
        title: "monkey",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/m/mon/monke/monkey_British_English_pronunciation_87486.mp3",
        options: [
            {name: "mountain", src: "../../img/mountain.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: true},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "legs", src: "../../img/legs.png", correct: false}
        ]
    },
    {
        title: "nine",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/nin/nine_/nine_British_English_pronunciation.mp3",
        options: [
            {name: "nine", src: "../../img/nine.png", correct: true},
            {name: "five", src: "../../img/five.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false}
        ]
    },

    {
        title: "nut",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/nut/nut_B/nut_British_English_pronunciation_89061.mp3",
        options: [
            {name: "nine", src: "../../img/nine.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: true},
            {name: "hat", src: "../../img/hat.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: false}
        ]
    },
    {
        title: "octopus",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/o/oct/octop/octopus_British_English_pronunciation_89244.mp3",
        options: [
            {name: "octopus", src: "../../img/octopus.png", correct: true},
            {name: "insect", src: "../../img/insect.png", correct: false},
            {name: "mountain", src: "../../img/mountain.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false}
        ]
    },
    {
        title: "car",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/c/car/car_B/car_British_English_pronunciation.mp3",
        options: [
            {name: "car", src: "../../img/car.png", correct: true},
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "monkey", src: "../../img/monkey.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: false}
        ]
    },
    {
        title: "jump",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/j/jum/jump_/jump_British_English_pronunciation_82508.mp3",
        options: [
            {name: "jump", src: "../../img/jump.png", correct: true},
            {name: "orange", src: "../../img/orange.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false},
            {name: "kick", src: "../../img/kick.png", correct: false}
        ]
    },
    {
        title: "orange",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/o/ora/orang/orange_British_English_pronunciation_89665.mp3",
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
