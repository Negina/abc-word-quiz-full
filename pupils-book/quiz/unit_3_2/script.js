let songs = [
    {
        title: "backpack",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/bac/backp/backpack_British_English_pronunciation.mp3",
        options: [
            {name: "backpack", src: "../../img/backpack.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "book", src: "../../img/book.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },

    {
        title: "book",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/boo/book_/book_British_English_pronunciation_71629.mp3",
        options: [
            {name: "notebook", src: "../../img/notebook.png", correct: false},
            {name: "book", src: "../../img/book.png", correct: true},
            {name: "crayon", src: "../../img/crayon.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },
    {
        title: "crayon",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/c/cra/crayo/crayon_British_English_pronunciation_69566.mp3",
        options: [
            {name: "crayon", src: "../../img/crayon.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "pen", src: "../../img/pen.png", correct: false},
            {name: "pencil", src: "../../img/pencil.png", correct: false}
        ]
    },

    {
        title: "notebook",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/not/noteb/notebook_British_English_pronunciation.mp3",
        options: [
            {name: "book", src: "../../img/book.png", correct: false},
            {name: "notebook", src: "../../img/notebook.png", correct: true},
            {name: "rubber", src: "../../img/rubber.png", correct: false},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false}
        ]
    },
    {
        title: "pencil case",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/p/pen/penci/pencil_case_British_English_pronunciation_105890558.mp3",
        options: [
            {name: "pen", src: "../../img/pen.png", correct: false},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: true},
            {name: "pencil", src: "../../img/pencil.png", correct: false},
            {name: "rubber", src: "../../img/rubber.png", correct: false}
        ]
    },
    {
        title: "pen",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/p/pen/pen_B/pen_British_English_pronunciation_91037.mp3",
        options: [
            {name: "pencil", src: "../../img/pencil.png", correct: false},
            {name: "pen", src: "../../img/pen.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "crayon", src: "../../img/crayon.png", correct: false}
        ]
    },
    {
        title: "pencil",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/p/pen/penci/pencil_British_English_pronunciation_91054.mp3",
        options: [
            {name: "pencil", src: "../../img/pencil.png", correct: true},
            {name: "pencil case", src: "../../img/pencilcase.png", correct: false},
            {name: "pen", src: "../../img/pen.png", correct: false},
            {name: "crayon", src: "../../img/crayon.png", correct: false}
        ]
    },
    {
        title: "rubber",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/r/rub/rubbe/rubber_British_English_pronunciation.mp3",
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
