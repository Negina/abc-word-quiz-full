let songs = [
    {
        title: "mummy",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/m/mum/mummy/mummy_British_English_pronunciation.mp3",
        options: [
            {name: "mummy", src: "../../img/mummy.png", correct: true},
            {name: "daddy", src: "../../img/daddy.png", correct: false},
            {name: "sister", src: "../../img/sister.png", correct: false},
            {name: "grandma", src: "../../img/grandma.png", correct: false}
        ]
    },

    {
        title: "daddy",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/dad/daddy/daddy_British_English_pronunciation.mp3",
        options: [
            {name: "mummy", src: "../../img/mummy.png", correct: false},
            {name: "daddy", src: "../../img/daddy.png", correct: true},
            {name: "grandpa", src: "../../img/grandpa.png", correct: false},
            {name: "brother", src: "../../img/brother.png", correct: false}
        ]
    },
    {
        title: "sister",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/sis/siste/sister_British_English_pronunciation.mp3",
        options: [
            {name: "sister", src: "../../img/sister.png", correct: true},
            {name: "brother", src: "../../img/brother.png", correct: false},
            {name: "mummy", src: "../../img/mummy.png", correct: false},
            {name: "grandma", src: "../../img/grandma.png", correct: false}
        ]
    },

    {
        title: "brother",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/bro/broth/brother_British_English_pronunciation_72169.mp3",
        options: [
            {name: "sister", src: "../../img/sister.png", correct: false},
            {name: "brother", src: "../../img/brother.png", correct: true},
            {name: "daddy", src: "../../img/daddy.png", correct: false},
            {name: "grandpa", src: "../../img/grandpa.png", correct: false}
        ]
    },
    {
        title: "grandma",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gra/grand/grandma_British_English_pronunciation.mp3",
        options: [
            {name: "grandma", src: "../../img/grandma.png", correct: true},
            {name: "mummy", src: "../../img/mummy.png", correct: false},
            {name: "grandpa", src: "../../img/grandpa.png", correct: false},
            {name: "aunt", src: "../../img/daddy.png", correct: false}
        ]
    },
    {
        title: "grandpa",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gra/grand/grandpa_British_English_pronunciation.mp3",
        options: [
            {name: "grandma", src: "../../img/grandma.png", correct: false},
            {name: "grandpa", src: "../../img/grandpa.png", correct: true},
            {name: "mummy", src: "../../img/mummy.png", correct: false},
            {name: "uncle", src: "../../img/daddy.png", correct: false}
        ]
    },
    {
        title: "aunt",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gra/grand/grandma_British_English_pronunciation.mp3",
        options: [
            {name: "grandma", src: "../../img/grandma.png", correct: true},
            {name: "sister", src: "../../img/mummy.png", correct: false},
            {name: "uncle", src: "../../img/grandpa.png", correct: false},
            {name: "daddy", src: "../../img/daddy.png", correct: false}
        ]
    },
    {
        title: "uncle",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/g/gra/grand/grandpa_British_English_pronunciation.mp3",
        options: [
            {name: "grandma", src: "../../img/grandma.png", correct: false},
            {name: "brother", src: "../../img/grandpa.png", correct: true},
            {name: "aunt", src: "../../img/mummy.png", correct: false},
            {name: "sister", src: "../../img/sister.png", correct: false}
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
