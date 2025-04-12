// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const submitButton = document.getElementById('submitButton');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Check reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            displayMessage('Please verify that you are a human.', 'error');
            return;
        }

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const attachment = document.getElementById('attachment').files[0];  // Get the file

        // Simple form validation
        if (!name || !email || !message) {
            displayMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (you would normally send the data to your server here)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        if (attachment) formData.append("attachment", attachment);

        // Normally, you would use an AJAX request here to send the data to your server
        setTimeout(() => {
            displayMessage('Your message has been sent successfully!', 'success');
            contactForm.reset(); // Reset the form
        }, 1000);
    });

    // Display success or error message
    function displayMessage(message, type) {
        responseMessage.textContent = message;
        responseMessage.className = 'response-message ' + type;
    }

    // Validate Email function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});


// Function to rotate services automatically
let currentIndex = 0;
const serviceCards = document.querySelectorAll('.service-card');
const serviceContainer = document.getElementById('serviceCardsContainer');

// Function to update the visible service
function updateServices() {
    // Hide all cards
    serviceCards.forEach(card => card.style.display = 'none');

    // Show the current service
    serviceCards[currentIndex].style.display = 'block';

    // Move to the next service for the next cycle
    currentIndex = (currentIndex + 1) % serviceCards.length;
}

// Initialize the first service to be visible
updateServices();

// Set an interval to change the service every 3 seconds
setInterval(updateServices, 3000); // Change services every 3 seconds

// JavaScript to scroll portfolio items programmatically (optional)
const portfolioContainer = document.querySelector('.portfolio-container');

// Scroll left by 300px
function scrollLeft() {
    portfolioContainer.scrollBy({
        left: -300,  // Negative value to scroll left
        behavior: 'smooth'  // Smooth scroll effect
    });
}

// Scroll right by 300px
function scrollRight() {
    portfolioContainer.scrollBy({
        left: 300,  // Positive value to scroll right
        behavior: 'smooth'  // Smooth scroll effect
    });
}

// Open Search Interface when search bar is clicked
document.getElementById('searchBar').addEventListener('focus', function() {
    document.getElementById('searchInterface').style.display = 'flex';
});

// Close Search Interface when the close button is clicked
document.getElementById('closeSearchBtn').addEventListener('click', function() {
    document.getElementById('searchInterface').style.display = 'none';
});

// Handle search input
document.getElementById('searchInput').addEventListener('input', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    // Clear previous results
    searchResults.innerHTML = '';

    if (query.length > 0) {
        // Example of dynamically showing results
        const services = document.querySelectorAll('.service-card');
        services.forEach(service => {
            const serviceTitle = service.querySelector('h3').textContent.toLowerCase();
            const serviceDescription = service.querySelector('p').textContent.toLowerCase();

            if (serviceTitle.includes(query) || serviceDescription.includes(query)) {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.textContent = serviceTitle; // You can adjust the result display
                searchResults.appendChild(resultItem);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // Show the Back to Top button when scrolling down
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Scroll to top when the Back to Top button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle Newsletter Form Submission
    document.getElementById('newsletterForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('newsletterEmail').value;

        if (validateEmail(email)) {
            // Simulate form submission
            alert(`Thank you for subscribing with the email: ${email}`);
            document.getElementById('newsletterEmail').value = ''; // Reset the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // Show the Back to Top button when scrolling down
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Scroll to top when the Back to Top button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle Newsletter Form Submission
    document.getElementById('newsletterForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('newsletterEmail').value;

        if (validateEmail(email)) {
            // Simulate form submission
            alert(`Thank you for subscribing with the email: ${email}`);
            document.getElementById('newsletterEmail').value = ''; // Reset the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the page from reloading

    // Optional: show a success message
    alert("✅ Message sent successfully!");

    // Optional: clear the form
    this.reset();
  });




