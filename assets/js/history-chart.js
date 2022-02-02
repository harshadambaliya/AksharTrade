$(document).ready(function() {
    var historyONGCChart = document.getElementById("historyONGCChart");
    var myChart = new Chart(historyONGCChart, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 5000, 2424, 2700, 100, 1500, 1024, 500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#DC4F50',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    var historyTCSChart = document.getElementById("historyTCSChart");
    var myChart = new Chart(historyTCSChart, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 5000, 2424, 2700, 100, 1500, 1024, 500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#DC4F50',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    var historyHDFCBANKChart = document.getElementById("historyHDFCBANKChart");
    var myChart = new Chart(historyHDFCBANKChart, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 1500, 1324, 5000, 100, 1500, 1024, 1500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#58B182',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    var historyONGCChart1 = document.getElementById("historyONGCChart1");
    var myChart = new Chart(historyONGCChart1, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 5000, 2424, 2700, 100, 1500, 1024, 500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#DC4F50',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    var historyTCSChart1 = document.getElementById("historyTCSChart1");
    var myChart = new Chart(historyTCSChart1, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 5000, 2424, 2700, 100, 1500, 1024, 500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#DC4F50',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    var historyHDFCBANKChart1 = document.getElementById("historyHDFCBANKChart1");
    var myChart = new Chart(historyHDFCBANKChart1, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 1500, 1324, 5000, 100, 1500, 1024, 1500],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#58B182',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });
});