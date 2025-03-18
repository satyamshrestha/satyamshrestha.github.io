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
        strings: ["GenAI Engineer", "Web Developer", "Automation Specialist", "Data Miner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["GenAI Engineer", "Web Developer", "Automation Specialist", "Data Miner"],
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

// Chatbot scripting
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const form = document.getElementById('chat-form');

async function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = '';
    console.log(userMessage)
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: userMessage }),
        });

        const data = await response.json();
        console.log(data)
        const botMessage = data.response;
        console.log(botMessage)
        // Add chat message to the chat history
        chatHistory.innerHTML += `<div class="user-message">${userMessage}</div>`;
        chatHistory.innerHTML += `<div class="bot-message">${botMessage}</div>`;

        // Scroll to the bottom of the chat history
        chatHistory.scrollTop = chatHistory.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    sendMessage().finally(() => {
        loader.style.display = 'none'; // Hide the loader after the message is sent
    });;
});

function toggleContainer() {
    const container = document.getElementById('chat-container');
    const icon = document.getElementById('icon');
    container.classList.toggle('show');
    if (icon.classList.contains('fa-robot')) {
        icon.classList.remove('fa-robot');
        icon.classList.add('fa-chevron-down');
    } else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-robot');
    }
}

// Contact Form Submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Encode the form data to make it URL-safe
    const encodedName = encodeURIComponent(name);
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Create the mailto link that directs to Gmail with pre-filled info
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shresthasatyam7@gmail.com&tf=cm&su=${encodedSubject}&body=Hello,%0A%0AName: ${encodedName}%0A %0AMessage: ${encodedMessage}%0A%0AThanks,`;

    // Open the Gmail compose page with pre-filled data
    window.location.href = mailtoLink;
}
