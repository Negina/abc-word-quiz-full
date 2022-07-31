let songs = [
    {
        title: "dress",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/dre/dress/dress_British_English_pronunciation.mp3",
        options: [
            {name: "dress", src: "../../img/dress.png", correct: true},
            {name: "see", src: "../../img/see.png", correct: false},
            {name: "vase", src: "../../img/vase.png", correct: false},
            {name: "queen", src: "../../img/queen.png", correct: false}
        ]
    },

    {
        title: "fox",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/f/fox/fox_B/fox_British_English_pronunciation_78212.mp3",
        options: [
            {name: "box", src: "../../img/box.png", correct: false},
            {name: "fox", src: "../../img/fox.png", correct: true},
            {name: "under", src: "../../img/under.png", correct: false},
            {name: "tiger", src: "../../img/tiger.png", correct: false}
        ]
    },
    {
        title: "insect",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/i/ins/insec/insect_British_English_pronunciation.mp3",
        options: [
            {name: "insect", src: "../../img/insect.png", correct: true},
            {name: "sun", src: "../../img/sun.png", correct: false},
            {name: "question", src: "../../img/question.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: false}
        ]
    },

    {
        title: "jump",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/j/jum/jump_/jump_British_English_pronunciation_82508.mp3",
        options: [
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "jump", src: "../../img/jump.png", correct: true},
            {name: "legs", src: "../../img/legs.png", correct: false},
            {name: "see", src: "../../img/see.png", correct: false}
        ]
    },
    {
        title: "kick",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/k/kic/kick_/kick_British_English_pronunciation_84231.mp3",
        options: [
            {name: "kick", src: "../../img/kick.png", correct: true},
            {name: "legs", src: "../../img/legs.png", correct: false},
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "zookeeper", src: "../../img/zookeeper.png", correct: false}
        ]
    },
    {
        title: "nut",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/nut/nut_B/nut_British_English_pronunciation_89061.mp3",
        options: [
            {name: "apple", src: "../../img/apple.png", correct: false},
            {name: "nut", src: "../../img/nut.png", correct: true},
            {name: "yoghurt", src: "../../img/yoghurt.png", correct: false},
            {name: "orange", src: "../../img/orange.png", correct: false}
        ]
    },
    {
        title: "orange",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/o/ora/orang/orange_British_English_pronunciation_89665.mp3",
        options: [
            {name: "orange", src: "../../img/orange.png", correct: true},
            {name: "apple", src: "../../img/apple.png", correct: false},
            {name: "pink", src: "../../img/pink.png", correct: false},
            {name: "egg", src: "../../img/egg.png", correct: false}
        ]
    },
    {
        title: "question",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/q/que/quest/question_British_English_pronunciation_95965.mp3",
        options: [
            {name: "nine", src: "../../img/nine.png", correct: false},
            {name: "question", src: "../../img/question.png", correct: true},
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "mountain", src: "../../img/mountain.png", correct: false}
        ]
    },
    {
        title: "see",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/see/see_B/see_British_English_pronunciation_96983.mp3",
        options: [
            {name: "see", src: "../../img/see.png", correct: true},
            {name: "sun", src: "../../img/sun.png", correct: false},
            {name: "kick", src: "../../img/kick.png", correct: false},
            {name: "jump", src: "../../img/jump.png", correct: false}
        ]
    },
    {
        title: "hat",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hat/hat_B/hat_British_English_pronunciation.mp3",
        options: [
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "hat", src: "../../img/hat.png", correct: true},
            {name: "bag", src: "../../img/bag.png", correct: false},
            {name: "ant", src: "../../img/ant.png", correct: false}
        ]
    },
    {
        title: "window",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/w/win/windo/window_British_English_pronunciation.mp3",
        options: [
            {name: "window", src: "../../img/window.png", correct: true},
            {name: "under", src: "../../img/under.png", correct: false},
            {name: "tired", src: "../../img/tired.png", correct: false},
            {name: "umbrella", src: "../../img/umbrella.png", correct: false}
        ]
    },
    {
        title: "under",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/u/und/under/under_British_English_pronunciation_103709.mp3",
        options: [
            {name: "cat", src: "../../img/cat.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: false},
            {name: "under", src: "../../img/under.png", correct: true}
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
