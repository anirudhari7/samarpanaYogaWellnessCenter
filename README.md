# Samarpana Yoga Wellness Center Website

A modern, responsive website for Samarpana Yoga Wellness Center with WhatsApp booking integration.

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Features

- **Responsive Design**: Fully responsive layout for PC, tablets, and mobile phones
- **WhatsApp Booking**: Direct integration with WhatsApp for easy class booking
- **Modern UI**: Clean, beautiful design with black/yellow/red theme matching brand colors
- **Mobile Menu**: Hamburger menu for seamless mobile navigation
- **Service Cards**: Interactive service cards with 8 different class options
- **Smooth Animations**: Engaging animations and transitions throughout
- **Touch-Friendly**: Optimized for mobile devices with touch-friendly controls

## 📋 Services Offered

1. **Yoga** - Find inner peace and physical strength
2. **Zumba** - Dance your way to fitness
3. **Violin** - Master the art of strings
4. **Bhajans** - Spiritual singing and devotion
5. **Fitness Training** - Build strength and endurance
6. **Cinematic Dance** - Express yourself through movement
7. **Classical Dance** - Traditional dance forms
8. **Classical Music** - Learn the rich traditions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git
```

2. Navigate to the project directory:
```bash
cd samarpanaYogaWellnessCenter
```

3. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
samarpanaYogaWellnessCenter/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript for booking and interactivity
├── README.md           # Project documentation
├── .gitignore          # Git ignore file
└── LICENSE             # MIT License
```

## 🎨 Design Features

- **Color Scheme**:
  - Primary Yellow: #FFD700
  - Primary Black: #000000
  - Primary Red: #DC143C
  - Dark Gray: #1a1a1a

- **Typography**: Poppins font family from Google Fonts

- **Responsive Breakpoints**:
  - Desktop: 1024px and above
  - Tablet: 768px - 1024px
  - Mobile: 480px and below
  - Extra Small: 360px and below

## 📱 Mobile Features

- Hamburger menu with slide-out navigation
- Touch-friendly buttons (minimum 48px height)
- Optimized layouts for small screens
- Smooth animations and transitions
- Backdrop overlay for mobile menu

## 🔧 Customization

### Changing WhatsApp Number

Edit the phone number in `script.js`:

```javascript
const whatsappNumber = '919074698446'; // Change this to your number
```

Also update in `index.html`:

```html
<a href="https://wa.me/919074698446" class="whatsapp-link">9074 698 446</a>
```

### Adding/Removing Services

1. Add a new service card in `index.html`:
```html
<div class="service-card" data-service="SERVICE_NAME">
    <div class="service-icon">🎯</div>
    <h3>Service Name</h3>
    <p>Service description</p>
</div>
```

2. Add option to the booking form dropdown:
```html
<option value="SERVICE_NAME">Service Name</option>
```

### Modifying Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-yellow: #FFD700;
    --primary-black: #000000;
    --primary-red: #DC143C;
    /* ... */
}
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select source branch (usually `main` or `master`)
5. Your site will be live at `https://anirudhari7.github.io/samarpanaYogaWellnessCenter/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect your GitHub repository
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: As described above
- **Any static hosting service**: Upload all files

## 📞 Contact Information

- **Address**: Madhurasmrithi Building, Karaparamba, Kunduparamba Road
- **Phone/WhatsApp**: 9074 698 446
- **Booking**: Use the booking form on the website

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Google Fonts (Poppins)
- WhatsApp API Integration

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Development

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

- Optimized for fast loading
- Minimal dependencies
- Lightweight codebase
- SEO-friendly structure

## 📸 Screenshots

*Add screenshots of your website here*

## 🙏 Acknowledgments

- Google Fonts for Poppins font
- WhatsApp for messaging API
- All contributors and users

---

**Made with ❤️ for Samarpana Yoga Wellness Center**
