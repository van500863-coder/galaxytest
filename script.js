// Alert function for buttons
function handleAction(actionName) {
    alert(`⚡ ដំណើរការជោគជ័យ៖ អ្នកបានជ្រើសរើស ${actionName}`);
}

// 3D Tilt Effect & Animations
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.tilt-card');

    // Enable 3D tilt ONLY on devices with a mouse (Desktops/Laptops) for smooth mobile scrolling
    if (window.matchMedia("(pointer: fine)").matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                const isPopular = card.classList.contains('popular');
                const scale = isPopular ? 1.07 : 1.02;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
                card.style.transition = `transform 0.1s ease`;
            });

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
        
        setTimeout(() => {
            el.style.opacity = '1';
            
            // Maintain the slightly larger scale for the Popular card on desktop
            if(el.classList.contains('popular') && window.innerWidth > 768) {
                el.style.transform = 'scale(1.05) translateY(0)';
            } else {
                el.style.transform = 'translateY(0)';
            }
        }, 150 * (index + 1));
    });
});
// ==========================================
// 1. Payment Modal Logic
// ==========================================
const paymentModal = document.getElementById('payment-modal');
const modalPlanInfo = document.getElementById('modal-plan-info');

// Open Modal & Update Info
function openPaymentModal(planName, price) {
    modalPlanInfo.innerHTML = `Plan: <strong>${planName}</strong> | Total: <strong>$${price}</strong>`;
    paymentModal.classList.add('active');
}

// Close Modal
function closePaymentModal() {
    paymentModal.classList.remove('active');
}

// Switch between Card and QR Payment
function switchPaymentMethod(method) {
    // Tab Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Tab Content
    document.querySelectorAll('.payment-method-box').forEach(box => box.classList.remove('active'));

    if(method === 'card') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('method-card').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('method-qr').classList.add('active');
    }
}

// Fake Payment Processing
function processPayment() {
    alert("🎉 អបអរសាទរ! ការទូទាត់ប្រាក់របស់អ្នកទទួលបានជោគជ័យ។ ពួកយើងនឹងទាក់ទងទៅអ្នកក្នុងពេលឆាប់ៗនេះ។");
    closePaymentModal();
}

// ==========================================
// 2. 3D Tilt Effect & Animations
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.tilt-card');

    if (window.matchMedia("(pointer: fine)").matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                const isPopular = card.classList.contains('popular');
                const scale = isPopular ? 1.07 : 1.02;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
                card.style.transition = `transform 0.1s ease`;
            });

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
        
        setTimeout(() => {
            el.style.opacity = '1';
            if(el.classList.contains('popular') && window.innerWidth > 768) {
                el.style.transform = 'scale(1.05) translateY(0)';
            } else {
                el.style.transform = 'translateY(0)';
            }
        }, 150 * (index + 1));
    });
});
