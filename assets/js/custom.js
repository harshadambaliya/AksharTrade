$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $('body').toggleClass('at-menu-open');
    });
    $('.at-stock-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('input[name=callPutRadio]').change(function() {
        if (this.value == 'call') {
            $('.at-option-put-content').addClass('d-none');
            $('.at-option-call-content').removeClass('d-none');
        } else if (this.value == 'put') {
            $('.at-option-put-content').removeClass('d-none');
            $('.at-option-call-content').addClass('d-none');
        }
    });

    $('.at-stock-label').on('click', function() {
        $(this).next('.at-stock-content').toggleClass('d-none');
    });

    var myNiftyChart = document.getElementById("myNiftyChart");
    var myChart = new Chart(myNiftyChart, {
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
                borderColor: '#fff',
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

    var myNiftyChart1 = document.getElementById("myNiftyChart1");
    var myChart = new Chart(myNiftyChart1, {
        type: 'line',
        data: {
            labels: ["day", "month", "year", "years", "day", "month", "year", "years"],
            datasets: [{
                label: '',
                data: [100, 2500, 1524, 200, 1800, 5000, 524, 1000],
                fill: false,
                borderColor: '#092038',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#fff',
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

    var myNiftyChart2 = document.getElementById("myNiftyChart2");
    var myChart = new Chart(myNiftyChart2, {
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
                borderColor: '#fff',
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

    var myNiftyChart3 = document.getElementById("myNiftyChart3");
    var myChart = new Chart(myNiftyChart3, {
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
                borderColor: '#fff',
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

    var myNiftyChart4 = document.getElementById("myNiftyChart4");
    var myChart = new Chart(myNiftyChart4, {
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
                borderColor: '#fff',
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

    var myNiftyChart5 = document.getElementById("myNiftyChart5");
    var myChart = new Chart(myNiftyChart5, {
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
                borderColor: '#fff',
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