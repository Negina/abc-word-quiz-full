let songs = [
    {
        title: "come in",
        src: "https://audio.jukehost.co.uk/YSoJlRzMGwFn8F2yslxfoZx4o9xd7LSA.mp3",
        options: [
            {name: "come in", src: "../../img/come.png", correct: true},
            {name: "sit down", src: "../../img/sit.png", correct: false},
            {name: "look", src: "../../img/look.png", correct: false},
            {name: "listen", src: "../../img/listen.png", correct: false}
        ]
    },

    {
        title: "close your book",
        src: "https://audio.jukehost.co.uk/krphrWm2PtPjApiv5RCczv8LbGgE7tx7.mp3",
        options: [
            {name: "open your book", src: "../../img/open.png", correct: false},
            {name: "close your book", src: "../../img/close.png", correct: true},
            {name: "sing", src: "../../img/sing.png", correct: false},
            {name: "stand up", src: "../../img/stand.png", correct: false}
        ]
    },
    {
        title: "open your book",
        src: "https://audio.jukehost.co.uk/2tyD4RSI8rpfiJlbfoCWIJnWuGykMFCQ.mp3",
        options: [
            {name: "open your book", src: "../../img/open.png", correct: true},
            {name: "close your book", src: "../../img/close.png", correct: false},
            {name: "listen", src: "../../img/listen.png", correct: false},
            {name: "come in", src: "../../img/come.png", correct: false}
        ]
    },

    {
        title: "listen",
        src: "https://audio.jukehost.co.uk/3n7xM2dgqqLubt4s5lVOfSIzszrp2UZu.mp3",
        options: [
            {name: "look", src: "../../img/look.png", correct: false},
            {name: "listen", src: "../../img/listen.png", correct: true},
            {name: "sing", src: "../../img/sing.png", correct: false},
            {name: "come in", src: "../../img/come.png", correct: false}
        ]
    },
    {
        title: "look",
        src: "https://audio.jukehost.co.uk/8e81z35pc0iuVcrhGxz5BT20awYmD2gw.mp3",
        options: [
            {name: "look", src: "../../img/look.png", correct: true},
            {name: "sing", src: "../../img/sing.png", correct: false},
            {name: "listen", src: "../../img/listen.png", correct: false},
            {name: "sit down", src: "../../img/sit.png", correct: false}
        ]
    },
    {
        title: "sit down",
        src: "https://audio.jukehost.co.uk/wtfiEjWvO73UPNYvgCYc1Mfr6lnawKE0.mp3",
        options: [
            {name: "stand up", src: "../../img/stand.png", correct: false},
            {name: "sit down", src: "../../img/sit.png", correct: true},
            {name: "close your book", src: "../../img/close.png", correct: false},
            {name: "open your book", src: "../../img/open.png", correct: false}
        ]
    },
    {
        title: "stand up",
        src: "https://audio.jukehost.co.uk/CIZuIw9gCsd3j5h8OMNnlsIdwtgAJvvg.mp3",
        options: [
            {name: "stand up", src: "../../img/stand.png", correct: true},
            {name: "sit down", src: "../../img/sit.png", correct: false},
            {name: "close your book", src: "../../img/close.png", correct: false},
            {name: "open your book", src: "../../img/open.png", correct: false}
        ]
    },
    {
        title: "sing",
        src: "https://audio.jukehost.co.uk/ZjjdFvrH6j70XuiFjHj2jpKAXq0rxONm.mp3",
        options: [
            {name: "look", src: "../../img/look.png", correct: false},
            {name: "sing", src: "../../img/sing.png", correct: true},
            {name: "listen", src: "../../img/listen.png", correct: false},
            {name: "stand up", src: "../../img/stand.png", correct: false}
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
