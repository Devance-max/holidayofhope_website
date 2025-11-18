// Google Maps Configuration
// Replace with your actual address coordinates
const EVENT_LOCATION = {
    lat: 40.7128,  // Replace with your latitude
    lng: -74.0060, // Replace with your longitude
    address: 'addy here' // Replace with your address
};

let map;

// Initialize Google Maps
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: EVENT_LOCATION,
        zoom: 15,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: EVENT_LOCATION,
        map: map,
        title: 'Holiday Of Hope Event Location',
        animation: google.maps.Animation.DROP
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #c41e3a;">Holiday Of Hope</h3>
                <p style="margin: 0; color: #666;">${EVENT_LOCATION.address}</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // Update directions link
    const directionsLink = document.getElementById('directions-link');
    if (directionsLink) {
        const encodedAddress = encodeURIComponent(EVENT_LOCATION.address);
        directionsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    }
}

// Fallback if Google Maps fails to load
window.addEventListener('load', () => {
    if (typeof google === 'undefined' || !google.maps) {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #e0e0e0; color: #666;">
                    <div style="text-align: center; padding: 20px;">
                        <p style="margin-bottom: 10px;">Map loading failed. Please check your Google Maps API key.</p>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT_LOCATION.address)}" 
                           target="_blank" 
                           style="color: #c41e3a; text-decoration: none; font-weight: 600;">
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            `;
        }
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic content updates (you can modify these values)
function updateEventDetails() {
    // Update event date
    const eventDate = document.getElementById('event-date');
    if (eventDate) {
        // You can change this to your actual date
        // eventDate.textContent = 'December 25, 2024';
    }

    // Update event time
    const eventTime = document.getElementById('event-time');
    if (eventTime) {
        // You can change this to your actual time
        // eventTime.textContent = '10:00 AM - 6:00 PM';
    }

    // Update event location
    const eventLocation = document.getElementById('event-location');
    if (eventLocation) {
        // You can change this to your actual location
        // eventLocation.textContent = 'Community Center';
    }

    // Update event address
    const eventAddress = document.getElementById('event-address');
    if (eventAddress) {
        // You can change this to your actual address
        // eventAddress.textContent = '123 Hope Street, Your City';
    }

    // Update map address
    const mapAddress = document.getElementById('map-address');
    if (mapAddress) {
        mapAddress.textContent = EVENT_LOCATION.address;
    }

    // Update contact information
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        // You can change this to your actual email
        // contactEmail.textContent = 'info@holidayofhope.org';
    }

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) {
        // You can change this to your actual phone
        // contactPhone.textContent = '(555) 123-4567';
    }
}

// Image upload handler for gallery (optional - for future enhancement)
function handleImageUpload(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const galleryGrid = document.getElementById('gallery-grid');
                    const newItem = document.createElement('div');
                    newItem.className = 'gallery-item animate-on-scroll';
                    newItem.innerHTML = `<img src="${e.target.result}" alt="Gallery image">`;
                    galleryGrid.appendChild(newItem);
                    observer.observe(newItem);
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// QR Code upload handler (optional - for future enhancement)
function handleQRCodeUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const qrPlaceholder = document.getElementById('qr-code');
            qrPlaceholder.innerHTML = `<img src="${e.target.result}" alt="QR Code">`;
        };
        reader.readAsDataURL(file);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateEventDetails();
    
    // Add click handlers for gallery placeholders (optional)
    const galleryPlaceholders = document.querySelectorAll('.gallery-placeholder');
    galleryPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.multiple = true;
            input.addEventListener('change', handleImageUpload);
            input.click();
        });
    });

    // Add click handler for QR code placeholder (optional)
    const qrPlaceholder = document.getElementById('qr-code');
    if (qrPlaceholder) {
        qrPlaceholder.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.addEventListener('change', handleQRCodeUpload);
            input.click();
        });
    }
});

// Add some interactive hover effects
document.querySelectorAll('.detail-card, .contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Navbar on scroll (if you want to add one later)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // You can add navbar show/hide logic here if needed
    lastScroll = currentScroll;
});

