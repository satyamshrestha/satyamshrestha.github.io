$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    const typed = new Typed(".typing", {
        strings: ["Front end developer", "Fresher", "Pythonista", "Content Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["Front end developer", "Fresher", "Pythonista", "Content Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // skils pie-chart
    var ctx = document.getElementById('piechart').getContext('2d');
    var piechart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['HTML', 'CSS', 'Javascript', 'Python', 'C', 'Content Writing'],
            datasets: [{
                label: 'Knowledge',
                data: [90, 77, 47, 56, 40, 70],
                backgroundColor: ['#00ccff', '#dc091b', '#d08637', '#12aa42', '#847e6b', '#ded813'],
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                }
            }
        }
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 5600,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});