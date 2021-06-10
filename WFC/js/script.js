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
var modal = document.getElementById('log_in');
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
