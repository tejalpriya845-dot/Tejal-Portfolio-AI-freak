function createSakura() {
    const petal = document.createElement('div');
    petal.classList.add('sakura');

    // 1. Randomize size (between 8px and 25px)
    const size = Math.random() * 17 + 8; 
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    // 2. Randomize spawn position across the screen width
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    // 3. Randomize fall speed (between 6 and 12 seconds for a gentle drift)
    const duration = Math.random() * 6 + 6; 
    petal.style.animationDuration = `${duration}s`;

    // 4. Randomize starting tilt
    const startingRotation = Math.random() * 360;
    
    // 5. DEPTH OF FIELD (BLUR) LOGIC:
    // If the petal is small (less than 14px), make it look like it's far away by blurring it
    if (size < 14) {
        petal.classList.add('blurred');
        petal.style.setProperty('--max-opacity', '0.5'); // Quieter in the background
        petal.style.zIndex = '1'; // Sits behind your main text/content
    } else {
        petal.style.setProperty('--max-opacity', '0.85');
        petal.style.zIndex = '9999'; // Foreground petals float above everything
    }

    petal.style.transform = `rotate(${startingRotation}deg)`;

    document.body.appendChild(petal);

    // Clean up to keep your browser running fast
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Spawn a new petal every 400ms (slightly slower so it doesn't clutter your site)
setInterval(createSakura, 400);