let songs = [
    {
        title: "eye",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/e/eye/eye_B/eye_British_English_pronunciation_76544.mp3",
        options: [
            {name: "eye", src: "../../img/eye.png", correct: true},
            {name: "ear", src: "../../img/ear.png", correct: false},
            {name: "hair", src: "../../img/hair.png", correct: false},
            {name: "head", src: "../../img/head.png", correct: false}
        ]
    },

    {
        title: "ear",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/e/ear/ear_B/ear_British_English_pronunciation.mp3",
        options: [
            {name: "eye", src: "../../img/eye.png", correct: false},
            {name: "ear", src: "../../img/ear.png", correct: true},
            {name: "mouth", src: "../../img/mouth.png", correct: false},
            {name: "teeth", src: "../../img/teeth.png", correct: false}
        ]
    },
    {
        title: "hair",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hai/hair_/hair_British_English_pronunciation.mp3",
        options: [
            {name: "hair", src: "../../img/hair.png", correct: true},
            {name: "head", src: "../../img/head.png", correct: false},
            {name: "ear", src: "../../img/ear.png", correct: false},
            {name: "nose", src: "../../img/nose.png", correct: false}
        ]
    },

    {
        title: "head",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/hea/head_/head_British_English_pronunciation_81036.mp3",
        options: [
            {name: "hair", src: "../../img/hair.png", correct: false},
            {name: "head", src: "../../img/head.png", correct: true},
            {name: "mouth", src: "../../img/mouth.png", correct: false},
            {name: "nose", src: "../../img/nose.png", correct: false}
        ]
    },
    {
        title: "mouth",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/m/mou/mouth/mouth_British_English_pronunciation_87751.mp3",
        options: [
            {name: "mouth", src: "../../img/mouth.png", correct: true},
            {name: "teeth", src: "../../img/teeth.png", correct: false},
            {name: "eye", src: "../../img/eye.png", correct: false},
            {name: "nose", src: "../../img/nose.png", correct: false}
        ]
    },
    {
        title: "nose",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/nos/nose_/nose_British_English_pronunciation_88901.mp3",
        options: [
            {name: "nose", src: "../../img/nose.png", correct: true},
            {name: "eye", src: "../../img/eye.png", correct: false},
            {name: "mouth", src: "../../img/mouth.png", correct: false},
            {name: "ear", src: "../../img/ear.png", correct: false}
        ]
    },
    {
        title: "teeth",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/t/tee/teeth/teeth_British_English_pronunciation.mp3",
        options: [
            {name: "teeth", src: "../../img/teeth.png", correct: true},
            {name: "mouth", src: "../../img/mouth.png", correct: false},
            {name: "head", src: "../../img/head.png", correct: false},
            {name: "hair", src: "../../img/hair.png", correct: false}
        ]
    },
    {
        title: "leg",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/l/leg/leg_B/leg_British_English_pronunciation_84911.mp3",
        options: [
            {name: "leg", src: "../../img/leg.png", correct: true},
            {name: "hand", src: "../../img/hand.png", correct: false},
            {name: "finger", src: "../../img/finger.png", correct: false},
            {name: "head", src: "../../img/head.png", correct: false}
        ]
    },

    {
        title: "hand",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/h/han/hand_/hand_British_English_pronunciation_80751.mp3",
        options: [
            {name: "finger", src: "../../img/finger.png", correct: false},
            {name: "hand", src: "../../img/hand.png", correct: true},
            {name: "head", src: "../../img/head.png", correct: false},
            {name: "hair", src: "../../img/hair.png", correct: false}
        ]
    },
    {
        title: "finger",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/f/fin/finge/finger_British_English_pronunciation_77291.mp3",
        options: [
            {name: "finger", src: "../../img/finger.png", correct: true},
            {name: "hand", src: "../../img/hand.png", correct: false},
            {name: "leg", src: "../../img/leg.png", correct: false},
            {name: "hair", src: "../../img/hair.png", correct: false}
        ]
    },
    {
        title: "black",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/bla/black/black_British_English_pronunciation_71120.mp3",
        options: [
            {name: "black", src: "../../img/black.png", correct: true},
            {name: "white", src: "../../img/white.png", correct: false},
            {name: "brown", src: "../../img/brown.png", correct: false},
            {name: "blue", src: "../../img/blue.png", correct: false}
        ]
    },
    {
        title: "white",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/w/whi/white/white_British_English_pronunciation_105798.mp3",
        options: [
            {name: "white", src: "../../img/white.png", correct: true},
            {name: "black", src: "../../img/black.png", correct: false},
            {name: "yellow", src: "../../img/yellow.png", correct: false},
            {name: "purple", src: "../../img/purple.png", correct: false}
        ]
    },
    {
        title: "brown",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/bro/brown/brown_British_English_pronunciation_72181.mp3",
        options: [
            {name: "brown", src: "../../img/brown.png", correct: true},
            {name: "white", src: "../../img/white.png", correct: false},
            {name: "black", src: "../../img/black.png", correct: false},
            {name: "pink", src: "../../img/pink.png", correct: false}
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
