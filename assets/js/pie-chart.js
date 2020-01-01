var ctx = document.getElementById("pieChart").getContext("2d"); // this selects the pie chart id on reviews page and allows it to be displayed on the canvas
var labels = ["Recommend To A Friend", "Satisfactory", "Exceptional Service", "Unhappy"]; // labels for the chart and colours below
var colorBack = ["#51BAFA", "#EFCA08", "#129500", "#E30202"];

var pieChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [{
      data: [15, 20, 60, 5], // these are the values placed in the chart as percentages 
      backgroundColor: colorBack
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: { // this is the legend you select and where it is displayed on the chart 
      position: "bottom",
      color: "#ffffff"
    },
    plugins: {
      datalabels: {
        color: '#ffffff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %'; // this returns the value as a percentage
        }
      }
    }
  }
})