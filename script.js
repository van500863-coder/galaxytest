// Function for button clicks
function handleAction(actionName) {
    alert(`⚡ ដំណើរការជោគជ័យ៖ ${actionName} \n(Interactive logic will be placed here)`);
}

// Modern 3D Tilt Effect for Cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse X position inside card
            const y = e.clientY - rect.top;  // Mouse Y position inside card
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 15 degrees)
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = `transform 0.1s ease`;
        });

        // Reset to normal when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = `transform 0.5s ease`;
        });
    });

    // Fade-in animation on load
    const elementsToAnimate = document.querySelectorAll('.video-box, .pricing-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'; // Smooth easing
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});