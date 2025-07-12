AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#10b3ea'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#10b3ea',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

$(document).ready(function () {
    // Preloader
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // Navbar scroll effect
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }



        // Scroll to top button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Smooth scrolling for navigation links
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");

        // Update active menu item
        $('.navbar .menu li a').removeClass('active');
        $(this).addClass('active');
    });

    // Mobile menu toggle
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.hamburger').toggleClass("active");
    });

    // Close mobile menu when clicking on a link
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.hamburger').removeClass("active");
    });

    // Scroll to top functionality
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Typing animations with proper typewriter backspace effect
    const typed = new Typed(".typing", {
        strings: ["an AI Engineer", "a Web Developer", "an Automation Specialist", "a Data Miner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        cursorChar: '|',
        fadeOut: false,
        backDelay: 1500,
        startDelay: 500
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["an AI Engineer", "a Web Developer", "an Automation Specialist", "a Data Miner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        cursorChar: '|',
        fadeOut: false,
        backDelay: 1500,
        startDelay: 500
    });

    // Skills pie chart with enhanced styling
    var ctx = document.getElementById('piechart').getContext('2d');
    var piechart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['AI & Intelligent Systems', 'Web & Mobile App Development', 'Automation & Web Scraping', 'Other Programming Languages'],
            datasets: [{
                label: 'Knowledge',
                data: [40, 30, 20, 10],
                backgroundColor: [
                    'rgba(16, 179, 234, 0.8)',
                    'rgba(220, 9, 27, 0.8)',
                    'rgba(208, 134, 55, 0.8)',
                    'rgba(222, 216, 19, 0.8)'
                ],
                borderColor: [
                    'rgba(16, 179, 234, 1)',
                    'rgba(220, 9, 27, 1)',
                    'rgba(208, 134, 55, 1)',
                    'rgba(222, 216, 19, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 12,
                            family: 'Poppins'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#10b3ea',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Enhanced Owl Carousel
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            600: {
                items: 2,
                margin: 25
            },
            1000: {
                items: 3,
                margin: 30
            }
        }
    });

    // Animated counter for stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // Trigger counter animation when stats come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Parallax effect for floating elements
    $(window).scroll(function () {
        const scrolled = $(window).scrollTop();
        $('.floating-element').each(function () {
            const speed = $(this).data('speed');
            const yPos = -(scrolled * speed);
            $(this).css('transform', `translateY(${yPos}px)`);
        });
    });

    // Enhanced form interactions
    $('.contact form input, .contact form textarea').focus(function () {
        $(this).parent().addClass('focused');
    }).blur(function () {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });

    // Smooth reveal animations for sections
    const revealElements = document.querySelectorAll('.about, .skills, .project, .contact');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(element);
    });

    // Enhanced button hover effects
    $('.primary-btn, .download-btn, .learn-more-btn, .submit-btn').hover(
        function () {
            $(this).find('.btn-glow').css('left', '100%');
        },
        function () {
            $(this).find('.btn-glow').css('left', '-100%');
        }
    );

    // Social media hover effects
    $('#media li').hover(
        function () {
            $(this).css('transform', 'scale(0.75) translateY(-10px)');
        },
        function () {
            $(this).css('transform', 'scale(1) translateY(0)');
        }
    );



    // Enhanced scroll animations
    $(window).scroll(function () {
        const scrolled = $(window).scrollTop();
        const parallax = scrolled * 0.5;

        // Parallax effect for background elements
        $('.home').css('transform', `translateY(${parallax * 0.1}px)`);

        // Fade in elements based on scroll position
        $('.about, .skills, .project, .contact').each(function () {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).height();
            const windowHeight = $(window).height();

            if (scrolled > elementTop - windowHeight + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Enhanced contact form validation and submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        if (!name || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Show loading state
        const submitBtn = $('.submit-btn');
        const originalText = submitBtn.find('span').text();
        submitBtn.find('span').text('Sending...');
        submitBtn.prop('disabled', true);

        // Simulate form submission
        setTimeout(() => {
            handleSubmit(e);
            submitBtn.find('span').text(originalText);
            submitBtn.prop('disabled', false);
            showNotification('Message sent successfully!', 'success');
        }, 2000);
    });

    // Notification system
    function showNotification(message, type) {
        const notification = $(`
        <div class="notification ${type}">
            <span>${message}</span>
            <button class="close-notification">&times;</button>
        </div>
    `);

        $('body').append(notification);

        setTimeout(() => {
            notification.addClass('show');
        }, 100);

        setTimeout(() => {
            notification.removeClass('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);

        notification.find('.close-notification').click(function () {
            notification.removeClass('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }

    // Enhanced image hover effects
    $('.image-container').hover(
        function () {
            $(this).find('.image-overlay').css('opacity', '1');
        },
        function () {
            $(this).find('.image-overlay').css('opacity', '0');
        }
    );

    // Keyboard navigation
    $(document).keydown(function (e) {
        if (e.keyCode === 38) { // Up arrow
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 800);
        }
    });

    // Enhanced mobile menu
    $(document).click(function (e) {
        if (!$(e.target).closest('.menu-btn, .navbar .menu').length) {
            $('.navbar .menu').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Scroll-based animations here
        ticking = false;
    }

    $(window).scroll(function () {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
});

// Contact Form Submission with enhanced functionality
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Enhanced validation
    if (!name.trim() || !subject.trim() || !message.trim()) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Encode the form data
    const encodedName = encodeURIComponent(name);
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Create the mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shresthasatyam7@gmail.com&tf=cm&su=${encodedSubject}&body=Hello,%0A%0AName: ${encodedName}%0A%0AMessage: ${encodedMessage}%0A%0AThanks,`;

    // Open Gmail compose page
    window.open(mailtoLink, '_blank');
}

// Add CSS for notifications
const notificationStyles = `
<style>
.notification {
position: fixed;
top: 20px;
right: 20px;
padding: 15px 20px;
border-radius: 8px;
color: white;
font-weight: 500;
z-index: 10000;
transform: translateX(100%);
transition: transform 0.3s ease;
max-width: 300px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.notification.show {
transform: translateX(0);
}

.notification.success {
background: linear-gradient(135deg, #28a745, #20c997);
}

.notification.error {
background: linear-gradient(135deg, #dc3545, #e74c3c);
}

.notification .close-notification {
background: none;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
margin-left: 10px;
opacity: 0.7;
transition: opacity 0.3s ease;
}

.notification .close-notification:hover {
opacity: 1;
}

.focused {
transform: translateY(-2px);
}

.fade-in {
opacity: 1 !important;
transform: translateY(0) !important;
}
</style>
`;

// Inject notification styles
$('head').append(notificationStyles);
