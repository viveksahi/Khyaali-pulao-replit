function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateGradient() {
  const colors = [
      "#ff0000", // Red
      "#ff7f00", // Orange
      "#ffff00", // Yellow
      "#00ff00", // Green
      "#0000ff", // Blue
      "#800080", // Purple
      "#00ffff", // Cyan
      "#008080", // Teal
      "#000000", // Black
      "#ffffff", // White
  ];

  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  // Update the background style of the `body` element
  document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

// Add event listener to the button
document.getElementById('colorButton').addEventListener('click', updateGradient);

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
setInterval(updateGradient, 60000); // Update gradient every minute
updateGradient(); // Initial call to set the gradient