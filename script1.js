// Select cursor and content elements
const cursor = document.querySelector('.cursor');

// Add event listener for cursor movement
document.addEventListener('mousemove', (e) => {
  // Update cursor position
  const x = e.clientX;
  const y = e.clientY;

  // Apply the cursor position to the cursor element
  gsap.to(cursor, { duration: 0.3, x, y });
});
