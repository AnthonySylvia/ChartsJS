let labels1 = ['YES', 'YES BUT IN GREEN'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myChart1 = document.getElementById('myChart').getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        },
        responsive: 0
    }
});

let labels2 = ['American Airlines', 'Ryanair', 'China SOuthern Airlines', 'Lufthansa Group'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById('myChart2').getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        responsive: 0,
        legend: {
            display: 0
        }
    }
});

let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart3 = document.getElementById('myChart3').getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [ 
            {
                label: 'Messi',
                fill: true,
                backgroundColor: 'rgba(179, 181, 198, 0.2)',
                borderColor: 'rgba(179, 181, 198, 1)',
                pointBorderColor: '#fff',
                pointBackgroundColod: 'rgba(179, 181, 198, 1)',
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'Ronaldo',
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointBackgroundColod: 'rgba(255, 99, 132, 1)',
                data: [51, 10, 32, 20, 44]
            }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        },
        responsive: 0,
        legend: {
            display: 1
        }
    }
});

let labels4 = ['85746', '85711', '85704', '85705', '85713', '85716'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById('myChart4').getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Click through rate by Postal Code",
            display: true
        },
        responsive: 0,
        legend: {
            display: 1
        }
    }
});

let labels5 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart5 = document.getElementById('myChart5').getContext('2d');

let chart5 = new Chart(myChart5, {
    type: 'line',
    data: {
        labels: labels5,
        datasets: [ 
            {
                label: 'Andrew Wilson',
                fill: true,
                backgroundColor: 'rgba(179, 181, 198, 0.2)',
                borderColor: 'rgba(179, 181, 198, 1)',
                pointBorderColor: '#fff',
                pointBackgroundColod: 'rgba(179, 181, 198, 1)',
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'Jeff Goatman',
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointBackgroundColod: 'rgba(255, 99, 132, 1)',
                data: [51, 10, 32, 20, 44]
            }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        },
        responsive: 0,
        legend: {
            display: 1
        }
    }
});