/**
 * GALAXY GLOBAL - Interactions & Modal Logic
 * Description: Handles UI interactions including Payment Modals, Free Sample Modals, 
 * 3D Tilt Effects, and Entrance Animations.
 * Author: [ឈ្មោះរបស់អ្នក / Your GitHub Username]
 * * TABLE OF CONTENTS:
 * 1. Payment Modal Logic
 * 2. Free Sample Form Modal Logic
 * 3. 3D Tilt Effect & Animations
 */

// ==========================================
// 1. Payment Modal Logic
// ==========================================
const paymentModal = document.getElementById('payment-modal');
const modalPlanInfo = document.getElementById('modal-plan-info');

/**
 * Opens the payment modal and updates the plan information
 * @param {string} planName - The name of the selected plan
 * @param {number} price - The price of the selected plan
 */
function openPaymentModal(planName, price) {
    modalPlanInfo.innerHTML = `Plan: <strong>${planName}</strong> | Total: <strong>$${price}</strong>`;
    paymentModal.classList.add('active');
}

/**
 * Closes the payment modal
 */
function closePaymentModal() {
    paymentModal.classList.remove('active');
}

/**
 * Switches between Credit Card and QR payment methods
 * @param {string} method - 'card' or 'qr'
 */
function switchPaymentMethod(method) {
    // Reset tabs and content boxes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.payment-method-box').forEach(box => box.classList.remove('active'));

    // Activate the selected method
    if (method === 'card') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('method-card').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('method-qr').classList.add('active');
    }
}

/**
 * Simulates a payment processing action
 */
function processPayment() {
    alert("🎉 អបអរសាទរ! ការទូទាត់ប្រាក់របស់អ្នកទទួលបានជោគជ័យ។ ពួកយើងនឹងទាក់ទងទៅអ្នកក្នុងពេលឆាប់ៗនេះ។");
    closePaymentModal();
}

// ==========================================
// 2. Free Sample Form Modal Logic
// ==========================================
const sampleModal = document.getElementById('sample-modal');
const sampleForm = document.getElementById('sample-form');

/**
 * Opens the Free Sample request modal
 */
function openSampleModal() {
    sampleModal.classList.add('active');
}

/**
 * Closes the Free Sample request modal
 */
function closeSampleModal() {
    sampleModal.classList.remove('active');
}

/**
 * Handles the Free Sample form submission
 * @param {Event} event - The form submit event
 */
function submitSampleForm(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    alert("✅ បញ្ជូនជោគជ័យ! សូមរងចាំការឆ្លើយតបរបស់ខាងយើងខ្ញុំទៅកាន់ Gmail របស់អ្នក។");
    
    closeSampleModal();
    sampleForm.reset(); // Clears all inputs in the form
}

// ==========================================
// 3. 3D Tilt Effect & Animations
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.tilt-card');

    // Apply 3D effect only for desktop devices (devices with a fine pointer like a mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                // Scale up slightly more if it's the popular card
                const isPopular = card.classList.contains('popular');
                const scale = isPopular ? 1.07 : 1.02;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
                card.style.transition = `transform 0.1s ease`;
            });

            // Reset transform when mouse leaves
            card.addEventListener('mouseleave', () => {
                const isPopular = card.classList.contains('popular');
                const baseTransform = isPopular && window.innerWidth > 768 ? 'scale3d(1.05, 1.05, 1.05)' : 'scale3d(1, 1, 1)';
                
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) ${baseTransform}`;
                card.style.transition = `transform 0.5s ease`;
            });
        });
    }

    // Smooth Entrance Animation on Page Load
    const elementsToAnimate = document.querySelectorAll('.video-wrapper, .pricing-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'; 
        
        // Staggered entrance delay
        setTimeout(() => {
            el.style.opacity = '1';
            
            // Re-apply the scale for popular cards on larger screens
            if (el.classList.contains('popular') && window.innerWidth > 768) {
                el.style.transform = 'scale(1.05) translateY(0)';
            } else {
                el.style.transform = 'translateY(0)';
            }
        }, 150 * (index + 1));
    });
});
