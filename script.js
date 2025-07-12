// Product data
const products = [
    {
        id: 1,
        name: "Merino Wool Yarn",
        description: "Premium 100% merino wool yarn, perfect for sweaters and scarves. Available in 10 beautiful colors.",
        price: 24.99,
        image: "🧶",
        category: "yarn"
    },
    {
        id: 2,
        name: "Cotton Blend Yarn",
        description: "Soft cotton blend yarn ideal for baby clothes and summer garments. Hypoallergenic and breathable.",
        price: 18.99,
        image: "🧶",
        category: "yarn"
    },
    {
        id: 3,
        name: "Alpaca Yarn",
        description: "Luxurious alpaca yarn with incredible softness. Perfect for winter accessories and luxury items.",
        price: 32.99,
        image: "🧶",
        category: "yarn"
    },
    {
        id: 4,
        name: "Bamboo Yarn",
        description: "Eco-friendly bamboo yarn with natural antibacterial properties. Great for sensitive skin.",
        price: 22.99,
        image: "🧶",
        category: "yarn"
    },
    {
        id: 5,
        name: "Knitting Needles Set",
        description: "Complete set of bamboo knitting needles in sizes 2-10. Perfect for beginners and experts.",
        price: 29.99,
        image: "🪡",
        category: "accessories"
    },
    {
        id: 6,
        name: "Crochet Hooks",
        description: "Professional aluminum crochet hooks set with ergonomic handles. Sizes B through K included.",
        price: 19.99,
        image: "🪡",
        category: "accessories"
    },
    {
        id: 7,
        name: "Yarn Bowl",
        description: "Beautiful ceramic yarn bowl to keep your yarn organized and tangle-free while knitting.",
        price: 34.99,
        image: "🥣",
        category: "accessories"
    },
    {
        id: 8,
        name: "Stitch Markers",
        description: "Colorful plastic stitch markers for keeping track of your knitting progress. Set of 50 markers.",
        price: 8.99,
        image: "📍",
        category: "accessories"
    },
    {
        id: 9,
        name: "Yarn Winder",
        description: "Electric yarn winder to quickly wind your yarn into perfect center-pull balls.",
        price: 49.99,
        image: "⚙️",
        category: "accessories"
    },
    {
        id: 10,
        name: "Knitting Pattern Book",
        description: "Comprehensive knitting pattern book with 50+ designs for all skill levels.",
        price: 24.99,
        image: "📖",
        category: "books"
    }
];

// Shopping cart
let cart = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productsGrid = document.getElementById('products-grid');
    
    // Check if elements exist before proceeding
    if (!productsGrid) {
        console.error('Products grid not found!');
        return;
    }
    
    // Display products
    function displayProducts() {
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <span>${product.image}</span>
                </div>
                <div class="product-details">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Cart toggle
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('active');
        });
        
        // Close cart
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
        
        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
            if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
                cartSidebar.classList.remove('active');
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for your order! This is a demo site - no actual payment will be processed.');
                cart = [];
                updateCartDisplay();
                cartSidebar.classList.remove('active');
            } else {
                alert('Your cart is empty!');
            }
        });
    }

    // Update cart display
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <span style="font-size: 2rem;">${item.image}</span>
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update cart count and total
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Initialize
    displayProducts();
    setupEventListeners();
    updateCartDisplay();
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sectionsToAnimate = document.querySelectorAll('section');
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Mobile menu toggle
    function createMobileMenu() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Add hamburger styles
        const style = document.createElement('style');
        style.textContent = `
            .hamburger {
                display: none;
                flex-direction: column;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.5rem;
            }
            
            .hamburger span {
                width: 25px;
                height: 3px;
                background: #333;
                margin: 3px 0;
                transition: 0.3s;
            }
            
            @media (max-width: 768px) {
                .hamburger {
                    display: flex;
                }
                
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .nav-links.active {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add hamburger to nav
        nav.querySelector('.nav-container').appendChild(hamburger);
        
        // Toggle menu
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navLinks.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Add active class styles
    const activeStyle = document.createElement('style');
    activeStyle.textContent = `
        .nav-links a.active {
            color: #8b5cf6 !important;
            font-weight: 600;
        }
    `;
    document.head.appendChild(activeStyle);
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Global functions for cart operations
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart display
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    
    if (cartItems && cartTotal && cartCount) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <span style="font-size: 2rem;">${item.image}</span>
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update cart count and total
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
    
    // Show success message
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            // Trigger cart display update
            addToCart(productId); // This will update the display
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Update cart display
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    
    if (cartItems && cartTotal && cartCount) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <span style="font-size: 2rem;">${item.image}</span>
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update cart count and total
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    .hero-content {
        opacity: 0;
        animation: fadeIn 1s ease 0.5s forwards;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(loadingStyle); 