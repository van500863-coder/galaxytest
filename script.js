/**
 * GALAXY GLOBAL - Interactions & Modal Logic
 */

const paymentModal = document.getElementById('payment-modal');
const modalPlanInfo = document.getElementById('modal-plan-info');

function openPaymentModal(planName, price) {
    modalPlanInfo.innerHTML = `Plan: <strong>${planName}</strong> | Total: <strong>$${price}</strong>`;
    paymentModal.classList.add('active');
}

function closePaymentModal() {
    paymentModal.classList.remove('active');
}

function switchPaymentMethod(method) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.payment-method-box').forEach(box => box.classList.remove('active'));

    if (method === 'card') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('method-card').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('method-qr').classList.add('active');
    }
}

function processPayment() {
    alert("🎉 អបអរសាទរ! ការទូទាត់ប្រាក់របស់អ្នកទទួលបានជោគជ័យ។ ពួកយើងនឹងទាក់ទងទៅអ្នកក្នុងពេលឆាប់ៗនេះ។");
    closePaymentModal();
}

const sampleModal = document.getElementById('sample-modal');
const sampleForm = document.getElementById('sample-form');

function openSampleModal() {
    sampleModal.classList.add('active');
}

function closeSampleModal() {
    sampleModal.classList.remove('active');
}

function submitSampleForm(event) {
    event.preventDefault(); 
    alert("✅ បញ្ជូនជោគជ័យ! សូមរងចាំការឆ្លើយតបរបស់ខាងយើងខ្ញុំទៅកាន់ Gmail របស់អ្នក។");
    closeSampleModal();
    sampleForm.reset(); 
}

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

    const elementsToAnimate = document.querySelectorAll('.video-wrapper, .pricing-card, .service-card, .workflow-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'; 
        
        // Use Intersection Observer for better performance on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        if (el.classList.contains('popular') && window.innerWidth > 768) {
                            el.style.transform = 'scale(1.05) translateY(0)';
                        } else {
                            el.style.transform = 'translateY(0)';
                        }
                    }, 100 * (index % 3)); // Stagger by row roughly
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(el);
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});
