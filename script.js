document.addEventListener('DOMContentLoaded', () => {
    let images = document.querySelectorAll('.gallery-img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function navigate(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        else if (currentIndex >= images.length) currentIndex = 0;
        showImage(currentIndex);
    }

    document.getElementById('prev').addEventListener('click', () => navigate(-1));
    document.getElementById('next').addEventListener('click', () => navigate(1));

    // Additional click events for sides of the gallery
    document.getElementById('prev').addEventListener('click', (e) => e.stopPropagation());
    document.getElementById('next').addEventListener('click', (e) => e.stopPropagation());

    document.body.addEventListener('click', (e) => {
        let rect = document.body.getBoundingClientRect();
        let x = e.clientX - rect.left;

        if (x < window.innerWidth / 2) navigate(-1);
        else navigate(1);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing script code...
    
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    document.body.addEventListener('mousemove', (e) => {
        const threshold = 100; // Distance from edge in pixels to trigger button hover effect
        const windowWidth = window.innerWidth;
        
        if (e.clientX < threshold) {
            // Mouse is near the left edge
            prevButton.classList.add('active');
        } else {
            prevButton.classList.remove('active');
        }
        
        if (windowWidth - e.clientX < threshold) {
            // Mouse is near the right edge
            nextButton.classList.add('active');
        } else {
            nextButton.classList.remove('active');
        }
    });
});

