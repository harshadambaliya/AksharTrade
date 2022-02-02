$(document).ready(function() {

    var NSEChart = document.getElementById("NSEChart");
    var myChart = new Chart(NSEChart, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [1500, 50, 2424, 1000, 1500, 50, 2424, 1000],
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

    var TCSChart = document.getElementById("TCSChart");
    var myChart = new Chart(TCSChart, {
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

    var HDFCBANKChart = document.getElementById("HDFCBANKChart");
    var myChart = new Chart(HDFCBANKChart, {
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

    var ONGCChart = document.getElementById("ONGCChart");
    var myChart = new Chart(ONGCChart, {
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

    var NSEChart1 = document.getElementById("NSEChart1");
    var myChart = new Chart(NSEChart1, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [1500, 50, 2424, 1000, 1500, 50, 2424, 1000],
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

    var TCSChart1 = document.getElementById("TCSChart1");
    var myChart = new Chart(TCSChart1, {
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

    var HDFCBANKChart1 = document.getElementById("HDFCBANKChart1");
    var myChart = new Chart(HDFCBANKChart1, {
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

    var ONGCChart1 = document.getElementById("ONGCChart1");
    var myChart = new Chart(ONGCChart1, {
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

    var NSEChart2 = document.getElementById("NSEChart2");
    var myChart = new Chart(NSEChart2, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [1500, 50, 2424, 1000, 1500, 50, 2424, 1000],
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

    var TCSChart2 = document.getElementById("TCSChart2");
    var myChart = new Chart(TCSChart2, {
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

    var HDFCBANKChart2 = document.getElementById("HDFCBANKChart2");
    var myChart = new Chart(HDFCBANKChart2, {
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

    var ONGCChart2 = document.getElementById("ONGCChart2");
    var myChart = new Chart(ONGCChart2, {
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

    var NSEChart3 = document.getElementById("NSEChart3");
    var myChart = new Chart(NSEChart3, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [1500, 50, 2424, 1000, 1500, 50, 2424, 1000],
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

    var TCSChart3 = document.getElementById("TCSChart3");
    var myChart = new Chart(TCSChart3, {
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

    var HDFCBANKChart3 = document.getElementById("HDFCBANKChart3");
    var myChart = new Chart(HDFCBANKChart3, {
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

    var ONGCChart3 = document.getElementById("ONGCChart3");
    var myChart = new Chart(ONGCChart3, {
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
})