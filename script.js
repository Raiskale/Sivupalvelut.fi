const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll2');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add a class to trigger animation or make the element visible
      entry.target.classList.add('in-view');
      
      // Optionally stop observing after animation is triggered
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5, // The element will be considered "in view" when 50% of it is visible
});

// Observe each element
elementsToAnimate.forEach(element => {
  observer.observe(element);
});

// Select the elements to animate
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
const animateOnScroll2Elements = document.querySelectorAll('.animate-on-scroll2');

// First IntersectionObserver for '.animate-on-scroll' elements
const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});