const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll2');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe each element
elementsToAnimate.forEach(element => {
  observer.observe(element);
});
