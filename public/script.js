// Create the funny cursor (orange ball)
const cursor = document.createElement('div');
cursor.classList.add('cursor');  // Apply the cursor style
document.body.appendChild(cursor);

// Function to display a funny message when clicking anywhere
const fetchMessage = (event) => {
    fetch('/api/data')  // Fetching data from the backend
        .then(response => response.json())
        .then(data => {
            const message = data.message;  // Get's the message from the backend
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message-container'); // Apply message style
            messageContainer.textContent = message;

            // Place the message relative to the cursor's position
            messageContainer.style.position = 'absolute';
            messageContainer.style.left = `${event.clientX + 30}px`;  
            messageContainer.style.top = `${event.clientY + 30}px`;   
            document.body.appendChild(messageContainer);

            // Remove the message after a few seconds (4 seconds here)
            setTimeout(() => {
                messageContainer.remove();
            }, 3000);  // Remove after 3 seconds
        })
        .catch(err => console.error('Error fetching message:', err));
};

// Show message when the user clicks anywhere on the page
document.addEventListener('click', fetchMessage);

// Initialize Particles.js with configuration (background effect)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});

// Track mouse movement to update the cursor position (the funny orange ball)
document.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.clientX + 10}px`;  
    cursor.style.top = `${event.clientY + 10}px`;   
});
