var ctx = document.getElementById("pieChart").getContext("2d");
var labels = ["Recommend To A Friend", "Satisfactory", "Exceptional Service", "Unhappy"];
var colorBack = ["#51BAFA", "#EFCA08", "#129500", "#E30202"];

var pieChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [{
      data: [15, 20, 60, 5],
      backgroundColor: colorBack
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
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
          return value + ' %';
        }
      }
    }
  }
})