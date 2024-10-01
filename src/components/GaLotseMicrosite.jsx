import React, { useState } from 'react';

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const emojis = ['0️⃣', '1️⃣']; // Array of emojis to use as confetti

  const fireConfetti = () => {
    setButtonVisible(false); // Start fading out the button
    const numberOfParticles = 500; // Increased number of particles

    for (let i = 0; i < numberOfParticles; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const span = document.createElement('span');
        span.innerText = emoji;
        span.style.position = 'absolute';
        span.style.left = `${x - 50}px`; // Center the emoji horizontally
        span.style.top = `0px`;
        span.style.fontSize = '24px';
        span.style.color = '#2196F3'; // Set emoji color
        span.style.pointerEvents = 'none';
        document.body.appendChild(span);
        
        // Animate the emoji falling down with a slower speed
        setTimeout(() => {
          span.style.transition = 'transform 2s ease-out'; // Slowed down to 2 seconds
          span.style.transform = `translateY(${window.innerHeight - 36}px)`;
        }, 10);

        // Remove the emoji after the animation
        setTimeout(() => {
          document.body.removeChild(span);
        }, 2000); // Match the removal time to the animation duration
      }, i * 20); // Reduced delay between each particle for a quicker burst effect
    }
  };

  return (
    <div style={styles.container}>
      {buttonVisible !== null && (
        <button
          onClick={fireConfetti}
          style={{ ...styles.button, opacity: buttonVisible ? 1 : 0 }}
          onTransitionEnd={() => {
            if (!buttonVisible) {
              setButtonVisible(null); // Remove button after transition
              window.location.href = 'https://frankfurt.ga-lotse.de/'; // Navigate to google.de
            }
          }}
        >
          Go Live!
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
  },
  button: {
    padding: '20px 40px',
    fontSize: '20px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'opacity 4s', // Add transition for opacity
  },
};

export default App;