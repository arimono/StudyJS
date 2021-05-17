// countdwon-----------------------
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const theCoup = '31 Jan 2021';

function countdown(){
    const theCoupDate = new Date(theCoup);
    const currentDate = new Date();
    const totalSeconds = (currentDate-theCoupDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600) % 24;
    const minutes= Math.floor(totalSeconds/60)%60;
    const seconds= Math.floor(totalSeconds)%60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 100);

// flashcard--------------------------------------------
const flashCardData = [
    {
        question: "The one who doesn't care user data" ,
        a: 'TCP',
        b: 'UDP',
        c: 'ICMP',
        d: 'DHCP',
        correctAns: 'b'
    },{
        question: "The one who does care user data" ,
        a: 'TCP',
        b: 'UDP',
        c: 'ICMP',
        d: 'DHCP',
        correctAns: 'a'
    },{
        question: "The one who serve as Internet phone book" ,
        a: 'DNS',
        b: 'HTTP',
        c: 'HTTPS',
        d: 'PROXY',
        correctAns: 'a'
    }
]
const answerEle = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEle = document.getElementById('question_text');
const a_ans= document.getElementById('a_ans');
const b_ans= document.getElementById('b_ans');
const c_ans= document.getElementById('c_ans');
const d_ans= document.getElementById('d_ans');
const flashcard_btn= document.getElementById('flashcard_btn');

let currentQuestion = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAns();
    const currentQuizData = flashCardData[currentQuestion];
    questionEle.innerText = currentQuizData.question;
    a_ans.innerText = currentQuizData.a;
    b_ans.innerText = currentQuizData.b;
    c_ans.innerText = currentQuizData.c;
    d_ans.innerText = currentQuizData.d;

    
}

function getSelected(){
    // const answerEle = document.querySelectorAll('answer');
    // let answer = undefined;
    answerEle.forEach((answerEle) =>{
        if(answerEle.checked){
            answer = answerEle.id;
        }
    }
    );
    return answer;
}
function deselectAns(){
    answerEle.forEach((answerEle)=> {
        if (answerEle.checked){
            answerEle.checked=false;
        }
    });
}

flashcard_btn.addEventListener("click",()=>{
    // currentQuestion++;

    const answer = getSelected();
    if(answer){
        if(answer===flashCardData[currentQuestion].correctAns){
            score++;
        }
    
    currentQuestion++
    
    if(currentQuestion < flashCardData.length) {
         loadQuiz();
    }else {
        quiz.innerHTML= `<div class="scoreText">You answered ${score}/${flashCardData.length} questions correctly! </div>
        <button id="flashcard_btn" onclick="location.reload()">Restart</button>`;
    }
}
});