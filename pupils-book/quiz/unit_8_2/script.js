let songs = [
    {
        title: "cow",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/c/cow/cow_B/cow_British_English_pronunciation_69465.mp3",
        options: [
            {name: "cow", src: "../../img/cow.png", correct: true},
            {name: "sheep", src: "../../img/sheep.png", correct: false},
            {name: "horse", src: "../../img/horse.png", correct: false},
            {name: "donkey", src: "../../img/donkey.png", correct: false}
        ]
    },

    {
        title: "goat",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/goa/goat_/goat_British_English_pronunciation.mp3",
        options: [
            {name: "cow", src: "../../img/cow.png", correct: false},
            {name: "goat", src: "../../img/goat.png", correct: true},
            {name: "horse", src: "../../img/horse.png", correct: false},
            {name: "sheep", src: "../../img/sheep.png", correct: false}
        ]
    },
    {
        title: "horse",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hor/horse/horse_British_English_pronunciation_81813.mp3",
        options: [
            {name: "horse", src: "../../img/horse.png", correct: true},
            {name: "goat", src: "../../img/goat.png", correct: false},
            {name: "donkey", src: "../../img/donkey.png", correct: false},
            {name: "sheep", src: "../../img/sheep.png", correct: false}
        ]
    },

    {
        title: "donkey",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/don/donke/donkey_British_English_pronunciation.mp3",
        options: [
            {name: "duck", src: "../../img/duck.png", correct: false},
            {name: "donkey", src: "../../img/donkey.png", correct: true},
            {name: "horse", src: "../../img/horse.png", correct: false},
            {name: "cow", src: "../../img/cow.png", correct: false}
        ]
    },
    {
        title: "rooster",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/r/roo/roost/rooster_British_English_pronunciation.mp3",
        options: [
            {name: "rooster", src: "../../img/rooster.png", correct: true},
            {name: "duck", src: "../../img/duck.png", correct: false},
            {name: "horse", src: "../../img/horse.png", correct: false},
            {name: "rabbit", src: "../../img/rabbit.png", correct: false}
        ]
    },
    {
        title: "duck",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/duc/duck_/duck_British_English_pronunciation_75001.mp3",
        options: [
            {name: "donkey", src: "../../img/donkey.png", correct: false},
            {name: "duck", src: "../../img/duck.png", correct: true},
            {name: "rooster", src: "../../img/rooster.png", correct: false},
            {name: "rabbit", src: "../../img/rabbit.png", correct: false}
        ]
    },
    {
        title: "rabbit",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/r/rab/rabbi/rabbit_British_English_pronunciation_93787.mp3",
        options: [
            {name: "rabbit", src: "../../img/rabbit.png", correct: true},
            {name: "duck", src: "../../img/duck.png", correct: false},
            {name: "sheep", src: "../../img/sheep.png", correct: false},
            {name: "rooster", src: "../../img/rooster.png", correct: false}
        ]
    },
    {
        title: "sheep",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/she/sheep/sheep_British_English_pronunciation.mp3",
        options: [
            {name: "rabbit", src: "../../img/rabbit.png", correct: false},
            {name: "sheep", src: "../../img/sheep.png", correct: true},
            {name: "cow", src: "../../img/cow.png", correct: false},
            {name: "horse", src: "../../img/horse.png", correct: false}
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
