# Yarn Haven - Yarn Webshop

A modern, responsive yarn webshop built with HTML, CSS, and JavaScript.

## Features

- 🧶 Complete e-commerce functionality with shopping cart
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with optimized assets
- 🛒 Interactive shopping cart with quantity controls
- 🌟 Smooth animations and hover effects
- 💳 Demo checkout process
- 📦 10 yarn and knitting accessory products

## Setup Instructions

### 1. GitHub Pages Setup

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `marcus-test`
   - Make it public

2. **Upload your website files:**
   ```bash
   # Clone the repository
   git clone https://github.com/markziegler1/marcus-test.git
   
   # Copy all website files to the repository
   # (index.html, styles.css, script.js)
   
   # Add and commit files
   git add .
   git commit -m "Initial website commit"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

Your website will be available at: `https://markziegler1.github.io/marcus-test/`

### 2. Custom Domain Setup

#### Step 1: Purchase Domain
- Buy `markz.dk` from a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)

#### Step 2: Configure DNS Records
Add these DNS records at your domain registrar:

**For GitHub Pages:**
```
Type: CNAME
Name: @
Value: yourusername.github.io
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

#### Step 3: Configure GitHub Repository
1. In your GitHub repository, go to "Settings" → "Pages"
2. In the "Custom domain" field, enter: `markz.dk`
3. Check "Enforce HTTPS" (recommended)
4. Click "Save"

#### Step 4: Create CNAME File
Create a file named `CNAME` in your repository root with this content:
```
markz.dk
```

### 3. Customization

#### Update Shop Information
Edit `index.html` to update:
- Shop name and branding
- About section content
- Contact information (email, phone, social media)

#### Update Contact Links
In `index.html`, update these lines:
```html
<a href="mailto:hello@yarnhaven.com" class="contact-link">Email</a>
<a href="tel:+1-555-0123" class="contact-link">Call</a>
<a href="#" class="contact-link">Instagram</a>
```

#### Customize Colors
Edit `styles.css` to change the color scheme:
- Primary purple: `#8b5cf6`
- Gradient colors in `.hero` section
- Background colors for sections

#### Add/Modify Products
Edit the `products` array in `script.js` to add or modify products:
```javascript
{
    id: 11,
    name: "New Product",
    description: "Product description",
    price: 29.99,
    image: "🧶",
    category: "yarn"
}
```

## File Structure

```
markz.dk/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with:
- GitHub Pages setup
- Domain configuration
- Customization
- Troubleshooting

Feel free to reach out or check the [GitHub Pages documentation](https://docs.github.com/en/pages).

---

**Note:** DNS changes can take up to 48 hours to propagate globally, though they often work much sooner. 