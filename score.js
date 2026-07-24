let score = 0;
let highscore = localStorage.getItem("highscore") || 0;


const highscoreText = document.getElementById("highscore");
const scoreText = document.getElementById("score-text");
export function initScore(){
    console.log(score);
    console.log(highscore);
    scoreText.innerText = score;
    highscoreText.innerText = highscore;
}

export function incrementScore(increase = 1){
    score += increase;
    if(score>highscore){
        highscore = score;
        localStorage.setItem("highscore", highscore);
        highscoreText.innerText = highscore;
    }
    scoreText.innerText = score;
}
export function resetScore(){
    score = 0;
    scoreText.innerText = score;
}