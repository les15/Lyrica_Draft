// Toggle "Show More" for lyrics
function toggleLyrics() {
    const lyrics = document.getElementById("lyricsText");
    const button = document.getElementById("showMoreBtn");

    if (lyrics.classList.contains("expanded")) {
        lyrics.style.maxHeight = "200px";
        button.innerText = "Show More";
    } else {
        lyrics.style.maxHeight = "none";
        button.innerText = "Show Less";
    }

    lyrics.classList.toggle("expanded");
}

// Back to Top button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleLyrics() {
    const hiddenLyrics = document.querySelector('.hidden-lyrics');
    const showMoreBtn = document.getElementById('showMoreBtn');
    
    if (hiddenLyrics.classList.contains('showing')) {
        // "Show Less"
        hiddenLyrics.classList.remove('showing');
        showMoreBtn.textContent = 'Show More';
        hiddenLyrics.style.maxHeight = '0'; // Collapse
    } else {
        // "Show More"
        hiddenLyrics.classList.add('showing');
        showMoreBtn.textContent = 'Show Less';

        hiddenLyrics.style.maxHeight = hiddenLyrics.scrollHeight + 'px'; // Expand to its full height
    }
}

window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    
    // Set the width of the progress bar based on scroll percentage
    progressBar.style.width = scrollPercentage + "%";
}

// Handle click on Contact link in footer
document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Fetch and insert the modal HTML into the page (if it's not already loaded)
    fetch("contactModal.html")
        .then(response => response.text())
        .then(data => {
            // Insert the modal into the page (if not already inserted)
            if (!document.getElementById("contactModal")) {
                document.getElementById("modal-container").innerHTML = data;
            }
            
            // Show the modal using Bootstrap
            var modal = new bootstrap.Modal(document.getElementById('contactModal'));
            modal.show();

            // Add event listener to the "Submit" button
            document.querySelector("#contactModal .btn-primary").addEventListener("click", function() {
                // Reset the form
                document.querySelector("#contactModal form").reset();
                
                // Optional: Hide the modal after submission
                modal.hide();
            });
        });
});



document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        modal.show();
        
        feedbackForm.reset();
    });
});
