// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    autoRaf: true, // Uses requestAnimationFrame for smoother scroll
  });

  // DEBUG: Uncomment to see debug messages
// Optional: Listen to scroll events to check if Lenis is working
//   lenis.on('scroll', (e) => {
//     console.log('Scroll event:', e);
//   });

  // Use requestAnimationFrame loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
