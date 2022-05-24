
var xValues = ["red", "green", "blue"];
var yValues = [75, 10, 15];
var barColors = [
  "#4FADEA",
  "#BC5FE3",
  "#BFD40C"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
   
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  }
});



$(function(){

  $(".mobile_toggle").click(function(){
    $(".navigate").toggleClass("left_right");
  });

});