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
        // If already showing, hide it
        hiddenLyrics.classList.remove('showing');
        showMoreBtn.textContent = 'Show More';
        hiddenLyrics.style.maxHeight = '0'; // Collapse
    } else {
        // If not showing, reveal it
        hiddenLyrics.classList.add('showing');
        showMoreBtn.textContent = 'Show Less';

        // Set maxHeight dynamically
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

