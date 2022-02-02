$(document).ready(function() {


    var OrderONGCChart = document.getElementById("OrderONGCChart");
    var myChart = new Chart(OrderONGCChart, {
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

    var OrderTCSChart = document.getElementById("OrderTCSChart");
    var myChart = new Chart(OrderTCSChart, {
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

    var OrderHDFCBANKChart = document.getElementById("OrderHDFCBANKChart");
    var myChart = new Chart(OrderHDFCBANKChart, {
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

    var OrderONGCChart1 = document.getElementById("OrderONGCChart1");
    var myChart = new Chart(OrderONGCChart1, {
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

    var OrderTCSChart1 = document.getElementById("OrderTCSChart1");
    var myChart = new Chart(OrderTCSChart1, {
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

    var OrderHDFCBANKChart1 = document.getElementById("OrderHDFCBANKChart1");
    var myChart = new Chart(OrderHDFCBANKChart1, {
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