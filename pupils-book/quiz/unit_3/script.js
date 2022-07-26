let songs = [
    {
        title: "backpack",
        src: "/audio/backpack.mp3",
        options: [
            {name: "backpack", src: "../../img/backpack.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "book", src: "../../img/book.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },

    {
        title: "book",
        src: "/audio/book.mp3",
        options: [
            {name: "notebook", src: "../../img/notebook.png", correct: false},
            {name: "book", src: "../../img/book.png", correct: true},
            {name: "crayon", src: "../../img/crayon.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },
    {
        title: "crayon",
        src: "/audio/crayon.mp3",
        options: [
            {name: "crayon", src: "../../img/crayon.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "backpack", src: "../../img/sick.png", correct: false},
            {name: "notebook", src: "../../img/notebook.png", correct: false}
        ]
    },

    {
        title: "notebook",
        src: "/audio/notebook.mp3",
        options: [
            {name: "book", src: "../../img/book.png", correct: false},
            {name: "notebook", src: "../../img/notebook.png", correct: true},
            {name: "rubber", src: "../../img/rubber.png", correct: false},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false}
        ]
    },
    {
        title: "pencil case",
        src: "/audio/pencilcase.mp3",
        options: [
            {name: "crayon", src: "../../img/crayon.png", correct: false},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: true},
            {name: "book", src: "../../img/book.png", correct: false},
            {name: "notebook", src: "../../img/notebook.png", correct: false}
        ]
    },
    {
        title: "rubber",
        src: "/audio/rubber.mp3",
        options: [
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: true},
            {name: "backpack", src: "../../img/backpack.png", correct: false},
            {name: "crayon", src: "../../img/crayon.png", correct: false}
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
