document.addEventListener('DOMContentLoaded', function() {
    // Define the options for the intersection observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function to be executed when the target element is in view
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animate class when the section is in view
                entry.target.classList.add('animate');
            } else {
                // Remove the animate class when the section is out of view (optional)
                entry.target.classList.remove('animate');
            }
        });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Target section to observe
    const section = document.querySelector('#language');
    
    if (section) {
        observer.observe(section);
    }
});

