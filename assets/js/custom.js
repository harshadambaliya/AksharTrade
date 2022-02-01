$(document).ready(function() {

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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    var myNiftyChart = document.getElementById("myNiftyChart");
    var myChart = new Chart(myNiftyChart, {
        type: 'line',
        data: {
            labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo", "New York", "Karachi", "Buenos Aires", "Delhi", "Moscow"],
            datasets: [{
                label: 'Series 1', // Name the series
                data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811], // Specify the data values array
                fill: false,
                borderColor: '#fff', // Add custom color border (Line)
                backgroundColor: '#000', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
        },
        options: {

        }
    });

});