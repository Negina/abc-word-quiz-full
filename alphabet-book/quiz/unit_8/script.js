let songs = [
    {
        title: "window",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/w/win/windo/window_British_English_pronunciation.mp3",
        options: [
            {name: "window", src: "../../img/window.png", correct: true},
            {name: "worm", src: "../../img/worm.png", correct: false},
            {name: "fox", src: "../../img/fox.png", correct: false},
            {name: "zookeeper", src: "../../img/zookeeper.png", correct: false}
        ]
    },

    {
        title: "worm",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/w/wor/worm_/worm_British_English_pronunciation_106297.mp3",
        options: [
            {name: "window", src: "../../img/window.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: true},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "insect", src: "../../img/insect.png", correct: false}
        ]
    },
    {
        title: "fox",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/f/fox/fox_B/fox_British_English_pronunciation_78212.mp3",
        options: [
            {name: "fox", src: "../../img/fox.png", correct: true},
            {name: "box", src: "../../img/box.png", correct: false},
            {name: "zoo", src: "../../img/zoo.png", correct: false},
            {name: "tiger", src: "../../img/tiger.png", correct: false}
        ]
    },

    {
        title: "box",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/b/box/box_B/box_British_English_pronunciation_71822.mp3",
        options: [
            {name: "fox", src: "../../img/fox.png", correct: false},
            {name: "box", src: "../../img/box.png", correct: true},
            {name: "yoghurt", src: "../../img/yoghurt.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: false}
        ]
    },
    {
        title: "yellow",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/y/yel/yello/yellow_British_English_pronunciation_106515.mp3",
        options: [
            {name: "yellow", src: "../../img/yellow.png", correct: true},
            {name: "yoghurt", src: "../../img/yoghurt.png", correct: false},
            {name: "green", src: "../../img/green.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false}
        ]
    },
    {
        title: "yoghurt",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/y/yog/yoghu/yoghurt_British_English_pronunciation.mp3",
        options: [
            {name: "yellow", src: "../../img/yellow.png", correct: false},
            {name: "yoghurt", src: "../../img/yoghurt.png", correct: true},
            {name: "vase", src: "../../img/vase.png", correct: false},
            {name: "jug", src: "../../img/jug.png", correct: false}
        ]
    },
    {
        title: "zoo",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/z/zoo/zoo_B/zoo_British_English_pronunciation.mp3",
        options: [
            {name: "zoo", src: "../../img/zoo.png", correct: true},
            {name: "zookeeper", src: "../../img/zookeeper.png", correct: false},
            {name: "lion", src: "../../img/lion.png", correct: false},
            {name: "elephant", src: "../../img/elephant.png", correct: false}
        ]
    },
    {
        title: "zookeeper",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/z/zoo/zoo_k/zoo_keeper_British_English_pronunciation.mp3",
        options: [
            {name: "king", src: "../../img/king.png", correct: false},
            {name: "zookeeper", src: "../../img/zookeeper.png", correct: true},
            {name: "queen", src: "../../img/queen.png", correct: false},
            {name: "zoo", src: "../../img/zoo.png", correct: false}
        ]
    },
    {
        title: "doll",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/d/dol/doll_/doll_British_English_pronunciation_74445.mp3",
        options: [
            {name: "doll", src: "../../img/doll.png", correct: true},
            {name: "ball", src: "../../img/ball.png", correct: false},
            {name: "box", src: "../../img/box.png", correct: false},
            {name: "sun", src: "../../img/sun.png", correct: false}
        ]
    },
    {
        title: "van",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/v/van/van_B/van_British_English_pronunciation.mp3",
        options: [
            {name: "car", src: "../../img/car.png", correct: false},
            {name: "worm", src: "../../img/worm.png", correct: false},
            {name: "ant", src: "../../img/ant.png", correct: false},
            {name: "van", src: "../../img/van.png", correct: true}
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
