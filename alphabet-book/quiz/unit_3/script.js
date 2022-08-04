let songs = [
    {
        title: "goat",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/goa/goat_/goat_British_English_pronunciation.mp3",
        options: [
            {name: "goat", src: "../../img/goat.png", correct: true},
            {name: "elephant", src: "../../img/elephant.png", correct: false},
            {name: "igloo", src: "../../img/igloo.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: false}
        ]
    },

    {
        title: "green",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gre/green/green_British_English_pronunciation_79868.mp3",
        options: [
            {name: "egg", src: "../../img/egg.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: true},
            {name: "house", src: "../../img/house.png", correct: false},
            {name: "frog", src: "../../img/frog.png", correct: false}
        ]
    },
    {
        title: "hat",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hat/hat_B/hat_British_English_pronunciation.mp3",
        options: [
            {name: "hat", src: "../../img/hat.png", correct: true},
            {name: "house", src: "../../img/house.png", correct: false},
            {name: "insect", src: "../../img/insect.png", correct: false},
            {name: "bag", src: "../../img/bag.png", correct: false}
        ]
    },

    {
        title: "house",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hou/house/house_British_English_pronunciation_81907.mp3",
        options: [
            {name: "hat", src: "../../img/hat.png", correct: false},
            {name: "house", src: "../../img/house.png", correct: true},
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "dress", src: "../../img/dress.png", correct: false}
        ]
    },
    {
        title: "insect",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/i/ins/insec/insect_British_English_pronunciation.mp3",
        options: [
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "insect", src: "../../img/insect.png", correct: true},
            {name: "goat", src: "../../img/goat.png", correct: false},
            {name: "igloo", src: "../../img/igloo.png", correct: false}
        ]
    },
    {
        title: "ant",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/a/ant/ant_B/ant_British_English_pronunciation.mp3",
        options: [
            {name: "ant", src: "../../img/ant.png", correct: true},
            {name: "insect", src: "../../img/insect.png", correct: false},
            {name: "goat", src: "../../img/goat.png", correct: false},
            {name: "elephant", src: "../../img/elephant.png", correct: false}
        ]
    },
    {
        title: "igloo",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/i/igl/igloo/igloo_British_English_pronunciation.mp3",
        options: [
            {name: "house", src: "../../img/house.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: false},
            {name: "doll", src: "../../img/doll.png", correct: false},
            {name: "igloo", src: "../../img/igloo.png", correct: true}
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
