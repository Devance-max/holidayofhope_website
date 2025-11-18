# Holiday Of Hope - Christmas Donation Drive Website

A beautiful, modern, and fluid website for the Holiday Of Hope Christmas donation drive. Features smooth animations, Google Maps integration, image galleries, QR code support, and a fully responsive design.

## Features

- 🎨 **Modern & Fluid Design** - Beautiful gradient hero section with smooth animations
- 📍 **Google Maps Integration** - Interactive map showing event location
- 📸 **Image Gallery** - Easy-to-add photo sections for event pictures
- 📱 **QR Code Support** - Dedicated section for donation QR codes
- 📋 **Event Details** - Comprehensive information about the donation drive
- ✨ **Smooth Animations** - Scroll-triggered animations throughout the site
- 📱 **Fully Responsive** - Works perfectly on all devices

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Create credentials (API Key)
5. Copy your API key

### 2. Configure the Website

#### Update Google Maps API Key

Open `index.html` and replace `YOUR_API_KEY` with your actual Google Maps API key:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

#### Update Event Location

Open `script.js` and update the `EVENT_LOCATION` object with your actual event coordinates and address:

```javascript
const EVENT_LOCATION = {
    lat: 40.7128,  // Your latitude
    lng: -74.0060, // Your longitude
    address: '123 Hope Street, Your City, State 12345' // Your address
};
```

To find coordinates:
- Use [Google Maps](https://www.google.com/maps) to find your location
- Right-click on the location and select the coordinates
- Or use a geocoding service

#### Customize Event Details

Edit the following in `index.html`:

- **Event Date**: Update `id="event-date"` in the details section
- **Event Time**: Update `id="event-time"` in the details section
- **Event Location**: Update `id="event-location"` and `id="event-address"` in the details section
- **Contact Information**: Update `id="contact-email"` and `id="contact-phone"` in the contact section
- **Social Media Links**: Update the social media links in the contact section

#### Add Images

You can add images to the gallery in two ways:

1. **Manually**: Replace the gallery placeholder divs in `index.html`:
   ```html
   <div class="gallery-item animate-on-scroll">
       <img src="path/to/your/image.jpg" alt="Event photo">
   </div>
   ```

2. **Dynamically**: Click on the gallery placeholders to upload images (browser-based, images won't persist after refresh)

#### Add QR Code

You can add a QR code in two ways:

1. **Manually**: Replace the QR code placeholder in `index.html`:
   ```html
   <div class="qr-code-placeholder" id="qr-code">
       <img src="path/to/your/qr-code.png" alt="Donation QR Code">
   </div>
   ```

2. **Dynamically**: Click on the QR code placeholder to upload an image (browser-based, won't persist after refresh)

### 3. Run the Website

Simply open `index.html` in a web browser. For local development, you can use:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
HolidayOfHope/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # JavaScript for maps and interactivity
└── README.md       # This file
```

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #c41e3a;    /* Main red color */
    --secondary-color: #1a5490; /* Blue accent */
    --accent-color: #ffd700;     /* Gold accent */
    /* ... */
}
```

### Animations

All animations are defined in `styles.css`. You can adjust:
- Animation speeds
- Transition effects
- Scroll trigger thresholds

### Content Sections

All content is easily editable in `index.html`. Each section is clearly marked with comments.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The Google Maps integration requires an active internet connection
- Images uploaded via the browser interface are temporary (not saved to server)
- For production, consider hosting images on a CDN or image hosting service
- Make sure your Google Maps API key has proper restrictions set up for security

## License

This project is open source and available for use in your donation drive.

## Support

For questions or issues, please contact your development team.

---

Made with ❤️ for Holiday Of Hope
