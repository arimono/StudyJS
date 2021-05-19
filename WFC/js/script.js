// countdown-----------------------
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
setInterval(countdown, 100);//countdwon finish


// googlechart for gender------------------------------------------------
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Ratio', 'Gender ratio'],
  ['Female', 6.2],
  ['Unidentified', 9.2],
  ['Male', 84.6],
]);

  // Optional; add a title and set the width and height of the chart
var options = {
    'title':'gender ratio',
    titleTextStyle: {color: '#fff', fontSize: 30},
    colors:['#D2042D','#ff6347','#eb081a'],
    backgroundColor: {fill: '#fff',fillOpacity: 0},
    pieHole: 0.4,
    chartArea:{left:0,top:50,width:'300%'},
    pieSliceBorderColor : "#5A5A5A",
    fontSize: 15,
    tooltip: {textStyle: {color: 'red'}},
    legend: {position: 'bottom',
    textStyle: {color: 'white',fontSize: 16}}
    };
    

  // Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.PieChart(document.getElementById('genderchart'));
  chart.draw(data, options);
};


$(window).resize(function(){
    drawChart();
  });//genderpie finish


//test

var modal = document.getElementById('deathPic');


var img = document.getElementById('deathimg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}

// // flashcard--------------------------------------------
// const flashCardData = [
//   {
//       question: "The one who doesn't care user data" ,
//       a: 'TCP',
//       b: 'UDP',
//       c: 'ICMP',
//       d: 'DHCP',
//       correctAns: 'b'
//   },{
//       question: "The one who does care user data" ,
//       a: 'TCP',
//       b: 'UDP',
//       c: 'ICMP',
//       d: 'DHCP',
//       correctAns: 'a'
//   },{
//       question: "The one who serve as Internet phone book" ,
//       a: 'DNS',
//       b: 'HTTP',
//       c: 'HTTPS',
//       d: 'PROXY',
//       correctAns: 'a'
//   }
// ]
// const answerEle = document.querySelectorAll('.answer');
// const quiz = document.getElementById('quiz');
// const questionEle = document.getElementById('question_text');
// const a_ans= document.getElementById('a_ans');
// const b_ans= document.getElementById('b_ans');
// const c_ans= document.getElementById('c_ans');
// const d_ans= document.getElementById('d_ans');
// const flashcard_btn= document.getElementById('flashcard_btn');

// let currentQuestion = 0;
// let answer = undefined;
// let score = 0;

// loadQuiz();

// function loadQuiz(){
//   deselectAns();
//   const currentQuizData = flashCardData[currentQuestion];
//   questionEle.innerText = currentQuizData.question;
//   a_ans.innerText = currentQuizData.a;
//   b_ans.innerText = currentQuizData.b;
//   c_ans.innerText = currentQuizData.c;
//   d_ans.innerText = currentQuizData.d;

  
// }

// function getSelected(){
//   // const answerEle = document.querySelectorAll('answer');
//   // let answer = undefined;
//   answerEle.forEach((answerEle) =>{
//       if(answerEle.checked){
//           answer = answerEle.id;
//       }
//   }
//   );
//   return answer;
// }
// function deselectAns(){
//   answerEle.forEach((answerEle)=> {
//       if (answerEle.checked){
//           answerEle.checked=false;
//       }
//   });
// }

// flashcard_btn.addEventListener("click",()=>{
//   // currentQuestion++;

//   const answer = getSelected();
//   if(answer){
//       if(answer===flashCardData[currentQuestion].correctAns){
//           score++;
//       }
  
//   currentQuestion++
  
//   if(currentQuestion < flashCardData.length) {
//        loadQuiz();
//   }else {
//       quiz.innerHTML= `<div class="scoreText">You answered ${score}/${flashCardData.length} questions correctly! </div>
//       <button id="flashcard_btn" onclick="location.reload()">Restart</button>`;
//   }
// }
// });