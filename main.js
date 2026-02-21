document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. PERSISTENT CART LOGIC
    // -------------------------------------------------------------------------
    let cart = JSON.parse(localStorage.getItem('df_cart')) || [];

    // Global function to add to cart (accessible from HTML)
    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            saveCart();
            updateCartUI();
            openCart();
            showToast(`¡${product.name} añadido!`);
        }
    };

    window.removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
    };

    window.updateQuantity = (productId, delta) => {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    };

    const saveCart = () => {
        localStorage.setItem('df_cart', JSON.stringify(cart));
    };

    // -------------------------------------------------------------------------
    // 2. DYNAMIC CART UI INJECTION
    // -------------------------------------------------------------------------
    const injectCartUI = () => {
        const cartHTML = `
            <!-- Floating Cart Button -->
            <button class="cart-toggle" id="cartToggle">
                <i class="fas fa-shopping-basket"></i>
                <span class="cart-count" id="cartCount">0</span>
            </button>

            <!-- Cart Sidebar -->
            <div class="cart-sidebar" id="cartSidebar">
                <div class="cart-header">
                    <h3>Tu Carrito</h3>
                    <button class="close-cart" id="closeCart"><i class="fas fa-times"></i></button>
                </div>
                <div class="cart-items" id="cartItemsList">
                    <!-- Items injected here -->
                </div>
                <div class="cart-footer">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span id="cartTotalValue">$0.00</span>
                    </div>
                    <button class="btn btn-primary btn-full" id="checkoutBtn">Finalizar Compra</button>
                </div>
            </div>

            <!-- Checkout Modal -->
            <div class="modal-overlay" id="checkoutModal">
                <div class="modal-content">
                    <button class="close-modal"><i class="fas fa-times"></i></button>
                    <h2 class="white-glow">Finalizar Pedido</h2>
                    <p>Selecciona tu método de contacto preferido para completar la transacción:</p>
                    
                    <div class="checkout-options">
                        <div class="checkout-option discord" id="checkoutDiscord">
                            <i class="fab fa-discord"></i>
                            <h4>Vía Discord (Recomendado)</h4>
                            <p>Entrega inmediata y soporte 24/7. El proceso más rápido.</p>
                        </div>
                        <div class="checkout-option whatsapp" id="checkoutWhatsapp">
                            <i class="fab fa-whatsapp"></i>
                            <h4>Vía WhatsApp</h4>
                            <p>Para quienes no tienen Discord. Soporte personalizado.</p>
                        </div>
                    </div>

                    <div id="discordMessage" class="discord-result" style="display:none;">
                        <p class="success-text">¡Excelente elección! Copia este mensaje y pégalo en el canal <strong>#tickets</strong> de nuestro servidor:</p>
                        <div class="copy-box">
                            <code id="orderCode"></code>
                            <button onclick="copyOrder()"><i class="fas fa-copy"></i></button>
                        </div>
                        <a href="https://discord.gg/Aq3TjM4tJT" target="_blank" class="btn btn-secondary btn-full">
                            Ir al Servidor de Discord <i class="fas fa-external-link-alt"></i>
                        </a>
                        <p style="font-size: 0.8rem; margin-top: 1rem; color: var(--text-muted);">
                            * Recomendamos Discord por la seguridad del sistema de tickets y la transparencia de las referencias.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Toast Notification -->
            <div id="toast" class="toast"></div>
        `;

        const cartStyles = `
            <style>
                .cart-toggle {
                    position: fixed;
                    bottom: 110px;
                    right: 30px;
                    width: 60px;
                    height: 60px;
                    background: var(--primary);
                    color: var(--dark-bg);
                    border: none;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    z-index: 999;
                    box-shadow: 0 10px 30px rgba(255,255,255,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition);
                }
                .cart-count {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: var(--accent);
                    color: white;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    font-size: 0.75rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid var(--dark-bg);
                }
                .cart-sidebar {
                    position: fixed;
                    top: 0;
                    right: -400px;
                    width: 400px;
                    height: 100vh;
                    background: rgba(3, 8, 5, 0.98);
                    backdrop-filter: blur(30px);
                    z-index: 2000;
                    transition: var(--transition);
                    display: flex;
                    flex-direction: column;
                    border-left: 1px solid var(--liquid-border);
                }
                .cart-sidebar.open { right: 0; }
                .cart-header {
                    padding: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid var(--liquid-border);
                }
                .cart-items {
                    flex: 1;
                    overflow-y: auto;
                    padding: 2rem;
                }
                .cart-item {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    background: rgba(255,255,255,0.03);
                    padding: 1rem;
                    border-radius: 12px;
                    align-items: center;
                }
                .cart-item-info { flex: 1; }
                .cart-item-info h4 { font-size: 0.9rem; margin-bottom: 0.2rem; }
                .cart-item-info p { color: var(--primary); font-weight: 700; }
                .qty-controls { display: flex; align-items: center; gap: 0.8rem; margin-top: 0.5rem; }
                .qty-btn { background: none; border: 1px solid var(--liquid-border); color: white; width: 24px; height: 24px; border-radius: 4px; cursor: pointer; }
                .cart-footer { padding: 2rem; background: rgba(255,255,255,0.02); }
                .cart-total { display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 800; }
                
                /* Modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.8);
                    backdrop-filter: blur(10px);
                    display: none;
                    justify-content: center;
                    align-items: center;
                    z-index: 3000;
                }
                .modal-content {
                    background: var(--dark-card);
                    padding: 3rem;
                    border-radius: 30px;
                    max-width: 500px;
                    width: 90%;
                    position: relative;
                    text-align: center;
                    border: 1px solid var(--liquid-border);
                }
                .checkout-options { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
                .checkout-option {
                    padding: 1.5rem;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--liquid-border);
                    border-radius: 20px;
                    cursor: pointer;
                    transition: var(--transition);
                }
                .checkout-option:hover { background: rgba(255,255,255,0.1); transform: translateY(-5px); }
                .checkout-option i { font-size: 2.5rem; margin-bottom: 1rem; }
                .checkout-option.discord i { color: #5865F2; }
                .checkout-option.whatsapp i { color: #25d366; }
                
                .discord-result { margin-top: 2rem; padding: 1.5rem; border-radius: 15px; background: rgba(88, 101, 242, 0.1); border: 1px dashed #5865F2; }
                .copy-box { display: flex; background: #000; padding: 1rem; border-radius: 8px; margin: 1rem 0; align-items: center; justify-content: space-between; }
                .copy-box code { color: #2ecc71; font-family: monospace; }
                .copy-box button { background: none; border: none; color: white; cursor: pointer; }
                
                .toast {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%) translateY(100px);
                    background: var(--primary);
                    color: var(--dark-bg);
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 700;
                    z-index: 4000;
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .toast.show { transform: translateX(-50%) translateY(0); }

                @media (max-width: 576px) {
                    .cart-sidebar { width: 100%; right: -100%; }
                }
            </style>
        `;

        document.body.insertAdjacentHTML('beforeend', cartHTML);
        document.head.insertAdjacentHTML('beforeend', cartStyles);

        // Event Listeners for UI
        document.getElementById('cartToggle').addEventListener('click', openCart);
        document.getElementById('closeCart').addEventListener('click', closeCart);
        document.getElementById('checkoutBtn').addEventListener('click', showCheckoutModal);
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('checkoutModal').style.display = 'none';
        });

        document.getElementById('checkoutDiscord').addEventListener('click', processDiscordCheckout);
        document.getElementById('checkoutWhatsapp').addEventListener('click', processWhatsappCheckout);
    };

    const openCart = () => document.getElementById('cartSidebar').classList.add('open');
    const closeCart = () => document.getElementById('cartSidebar').classList.remove('open');

    const updateCartUI = () => {
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        document.getElementById('cartCount').textContent = count;
        document.getElementById('cartTotalValue').textContent = `$${total.toFixed(2)} MXN`;

        const list = document.getElementById('cartItemsList');
        if (cart.length === 0) {
            list.innerHTML = '<p style="text-align:center; margin-top:3rem; color:var(--text-muted);">Tu carrito está vacío.</p>';
        } else {
            list.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div style="font-size: 1.2rem; display: flex; gap: 0.3rem;">
                        ${item.icon.split(',').slice(0, 2).map(icon => `<i class="${icon.trim()}"></i>`).join('')}
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} MXN</p>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:rgba(255,0,0,0.5); cursor:pointer;"><i class="fas fa-trash"></i></button>
                </div>
            `).join('');
        }
    };

    const showCheckoutModal = () => {
        if (cart.length === 0) {
            showToast("El carrito está vacío");
            return;
        }
        document.getElementById('checkoutModal').style.display = 'flex';
        document.getElementById('discordMessage').style.display = 'none';
    };

    const processDiscordCheckout = () => {
        const orderSummary = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
        const orderCode = `ORDER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        document.getElementById('orderCode').textContent = `Petición de compra: [${orderSummary}] Total: $${total} - ID: ${orderCode}`;
        document.getElementById('discordMessage').style.display = 'block';
    };

    const processWhatsappCheckout = () => {
        const orderSummary = cart.map(item => `- ${item.name} (x${item.quantity})`).join('%0A');
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
        const message = `Hola Digital Footprint, me gustaría realizar el siguiente pedido:%0A%0A${orderSummary}%0A%0ATotal: $${total}%0A%0A¿Cuáles son los pasos a seguir?`;
        window.open(`https://wa.me/yournumber?text=${message}`, '_blank');
    };

    window.copyOrder = () => {
        const code = document.getElementById('orderCode').textContent;
        navigator.clipboard.writeText(code).then(() => {
            showToast("¡Pedido copiado!");
        });
    };

    const showToast = (msg) => {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    // -------------------------------------------------------------------------
    // 3. EXISTING LOGIC (MOBILE MENU, SCROLL, ETC.)
    // -------------------------------------------------------------------------

    // Header Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(10, 10, 12, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(10, 10, 12, 0.8)';
        }
    });

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Parallax
    const heroBg = document.querySelector('.hero-background');
    window.addEventListener('scroll', () => {
        if (heroBg && window.scrollY < window.innerHeight) {
            heroBg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.3}px)`;
        }
    });

    // Reveal Animations
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('.animate-reveal');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // -------------------------------------------------------------------------
    // 4. CATALOG DYNAMIC RENDERING (If on catalogo.html)
    // -------------------------------------------------------------------------
    const catalogGrid = document.getElementById('fullCatalog');
    if (catalogGrid && typeof products !== 'undefined') {
        const renderCatalog = (filter = 'all') => {
            const filteredProducts = filter === 'all'
                ? products
                : products.filter(p => p.category === filter);

            catalogGrid.innerHTML = filteredProducts.map(p => {
                let auraClass = 'aura-blue';
                if (p.category === 'lotes-fortnite') auraClass = 'aura-orange';
                if (p.category === 'fortnite-principal') auraClass = 'aura-green';

                const platformIcons = p.icon.split(',').map(icon => `<i class="${icon.trim()}" style="font-size: 0.8rem; opacity: 0.6;"></i>`).join('');

                return `
                <div class="product-card animate-reveal" data-category="${p.category}">
                    ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                    <div class="product-image ${auraClass}">
                        <i class="fas fa-coins"></i>
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">${platformIcons}</div>
                        <p class="price">$${p.price.toFixed(2)} MXN ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}</p>
                        <div style="display:flex; gap:0.5rem;">
                            <a href="producto.html?id=${p.id}" class="btn btn-outline" style="padding:0.8rem;"><i class="fas fa-eye"></i></a>
                            <button onclick="addToCart(${p.id})" class="btn btn-primary btn-full"><i class="fas fa-cart-plus"></i> Añadir</button>
                        </div>
                    </div>
                </div>
            `}).join('');

            // Re-trigger reveal animations for new items
            setTimeout(revealOnScroll, 100);
        };

        // Multi-Level Filter Logic
        const mainFilters = document.querySelectorAll('.filter-btn');
        const subContainer = document.getElementById('subFilters');

        const subConfig = {
            'fortnite': [
                { name: 'Todo Fortnite', filter: 'fortnite-group' },
                { name: 'Lotes Revendedores', filter: 'lotes-fortnite' },
                { name: 'Cuentas Regalo', filter: 'fortnite' },
                { name: 'Cuenta Principal', filter: 'fortnite-principal' }
            ]
        };

        const setActiveMain = (btn) => {
            mainFilters.forEach(i => i.classList.remove('active'));
            btn.classList.add('active');
        };

        const renderSubFilters = (mainId) => {
            if (subConfig[mainId]) {
                subContainer.style.display = 'flex';
                subContainer.innerHTML = subConfig[mainId].map(sub =>
                    `<button class="sub-btn" data-filter="${sub.filter}">${sub.name}</button>`
                ).join('');

                // Add sub-filter listeners
                subContainer.querySelectorAll('.sub-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        subContainer.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        handleFiltering(btn.dataset.filter);
                    });
                });
                // Default sub-filter active first
                subContainer.querySelector('.sub-btn').classList.add('active');
            } else {
                subContainer.style.display = 'none';
            }
        };

        const handleFiltering = (filter) => {
            if (filter === 'all') {
                renderCatalog('all');
            } else if (filter === 'fortnite-group') {
                const group = products.filter(p => p.category === 'fortnite' || p.category === 'lotes-fortnite' || p.category === 'fortnite-principal');
                renderCatalogWithData(group);
            } else if (filter === 'consolas-group') {
                const group = products.filter(p => ['xbox', 'playstation', 'nintendo'].includes(p.category));
                renderCatalogWithData(group);
            } else {
                renderCatalog(filter);
            }
        };

        // Helper to render with manual data
        const renderCatalogWithData = (data) => {
            catalogGrid.innerHTML = data.map(p => {
                let auraClass = 'aura-blue';
                if (p.category === 'lotes-fortnite') auraClass = 'aura-orange';
                if (p.category === 'fortnite-principal') auraClass = 'aura-green';
                const platformIcons = p.icon.split(',').map(icon => `<i class="${icon.trim()}" style="font-size: 0.8rem; opacity: 0.6;"></i>`).join('');

                return `
                <div class="product-card animate-reveal" data-category="${p.category}">
                    ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                    <div class="product-image ${auraClass}">
                        <i class="fas fa-coins"></i>
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">${platformIcons}</div>
                        <p class="price">$${p.price.toFixed(2)} MXN ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}</p>
                        <div style="display:flex; gap:0.5rem;">
                            <a href="producto.html?id=${p.id}" class="btn btn-outline" style="padding:0.8rem;"><i class="fas fa-eye"></i></a>
                            <button onclick="addToCart(${p.id})" class="btn btn-primary btn-full"><i class="fas fa-cart-plus"></i> Añadir</button>
                        </div>
                    </div>
                </div>
            `}).join('');
            setTimeout(revealOnScroll, 100);
        };

        mainFilters.forEach(item => {
            item.addEventListener('click', () => {
                const mainId = item.dataset.main;
                setActiveMain(item);
                renderSubFilters(mainId);
                handleFiltering(mainId === 'consolas' ? 'consolas-group' : (mainId === 'fortnite' ? 'fortnite-group' : mainId));
            });
        });

        // Search Logic
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const filtered = products.filter(p => p.name.toLowerCase().includes(term));
                catalogGrid.innerHTML = filtered.map(p => {
                    let auraClass = 'aura-blue';
                    if (p.category === 'lotes-fortnite') auraClass = 'aura-orange';
                    if (p.category === 'fortnite-principal') auraClass = 'aura-green';

                    return `
                    <div class="product-card visible" style="opacity:1; transform:translateY(0);">
                         <div class="product-image ${auraClass}">
                            <i class="fas fa-coins"></i>
                         </div>
                         <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="price">$${p.price.toFixed(2)} MXN</p>
                            <div style="display:flex; gap:0.5rem;">
                                <a href="producto.html?id=${p.id}" class="btn btn-outline" style="padding:0.8rem;"><i class="fas fa-eye"></i></a>
                                <button onclick="addToCart(${p.id})" class="btn btn-primary btn-full"><i class="fas fa-cart-plus"></i></button>
                            </div>
                         </div>
                    </div>
                `}).join('');
            });
        }

        // Auto-filter based on URL
        const urlParams = new URLSearchParams(window.location.search);
        const urlFilter = urlParams.get('filter');
        if (urlFilter) {
            let targetMain = urlFilter;
            if (urlFilter === 'lotes-fortnite') targetMain = 'fortnite';
            if (['xbox', 'playstation', 'nintendo'].includes(urlFilter)) targetMain = 'consolas';

            const filterTarget = Array.from(mainFilters).find(i => i.dataset.main === targetMain);
            if (filterTarget) {
                setActiveMain(filterTarget);
                renderSubFilters(targetMain);

                // If sub-filter was specified
                if (urlFilter !== targetMain) {
                    const subTarget = Array.from(subContainer.querySelectorAll('.sub-btn')).find(s => s.dataset.filter === urlFilter);
                    if (subTarget) {
                        subContainer.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
                        subTarget.classList.add('active');
                    }
                }
                handleFiltering(urlFilter);
            } else {
                handleFiltering('all');
            }
        } else {
            handleFiltering('all');
        }
    }

    // INITIALIZE
    injectCartUI();
    updateCartUI();
});
