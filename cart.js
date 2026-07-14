﻿const cartStorageKey = 'machiavelli-cart';
const whatsappNumber = '201229444626';
const products = {
  'boba-panther': {
    name: 'Boba Panther Tee',
    price: 700,
    category: 'Graphic Tee',
    initial: 'BP',
    Image: 'images/organized/misc/pink.jpeg'
  },
  'Toothless': {
    name: 'Toothless Tee' ,
    price: 700,
    category: 'Graphic Tee',
    initial: 'PP',
    Image: 'images/organized/misc/pink.jpeg'
  },
  'V.2': {
    name: 'V.2',
    price: 700,
    category: 'Shirt',
    initial: 'V.2'
  },
  'V.3': {
    name: 'V.3',
    price: 700,
    category: 'Shirt',
    initial: 'V.3'
  },
  'V.4': {
    name: 'V.4',
    price: 700,
    category: 'Shirt',
    initial: 'V.4'
  },
  'V.5': {
    name: 'V.5',
    price: 700,
    category: 'Shirt',
    initial: 'V.5'
  },
  'V.6': {
    name: 'V.6',
    price: 700,
    category: 'Shirt',
    initial: 'V.6'
  },
  'V.7': {
    name: 'V.7',
    price: 700,
    category: 'Shirt',
    initial: 'V.7'
  },
  'V.8': {
    name: 'V.8',
    price: 700,
    category: 'Shirt',
    initial: 'V.8'
  },
  'V.9': {
    name: 'V.9',
    price: 700,
    category: 'Shirt',
    initial: 'V.9'
  },
  'V.10': {
    name: 'V.10',
    price: 700,
    category: 'Shirt',
    initial: 'V.10'
  },
  'V.11': {
    name: 'V.11',
    price: 700,
    category: 'Shirt',
    initial: 'V.11'
  },
  'V.12': {
    name: 'V.12',
    price: 700,
    category: 'Shirt',
    initial: 'V.12'
  },
  'V.13': {
    name: 'V.13',
    price: 700,
    category: 'Shirt',
    initial: 'V.13'
  },
  'V.14': {
    name: 'V.14',
    price: 700,
    category: 'Shirt',
    initial: 'V.14'
  },
  'V.15': {
    name: 'V.15',
    price: 700,
    category: 'Shirt',
    initial: 'V.15'
  },
  'V.16': {
    name: 'V.16',
    price: 700,
    category: 'Shirt',
    initial: 'V.16'
  },
  'V.17': {
    name: 'V.17',
    price: 700,
    category: 'Shirt',
    initial: 'V.17'
  },
  'V.18': {
    name: 'V.18',
    price: 700,
    category: 'Shirt',
    initial: 'V.18'
  },
  'V.19': {
    name: 'V.19',
    price: 700,
    category: 'Shirt',
    initial: 'V.19'
  },
  'V.20': {
    name: 'V.20',
    price: 700,
    category: 'Shirt',
    initial: 'V.20'
  },
  'V.21': {
    name: 'V.21',
    price: 700,
    category: 'Shirt',
    initial: 'V.21'
  },
  'V.22': {
    name: 'V.22',
    price: 700,
    category: 'Shirt',
    initial: 'V.22'
  },
  'V.23': {
    name: 'V.23',
    price: 700,
    category: 'Shirt',
    initial: 'V.23'
  },
  'V.24': {
    name: 'V.24',
    price: 700,
    category: 'Shirt',
    initial: 'V.24'
  },
  'V.25': {
    name: 'V.25',
    price: 700,
    category: 'Shirt',
    initial: 'V.25'
  },
  'V.26': {
    name: 'V.26',
    price: 700,
    category: 'Shirt',
    initial: 'V.26'
  },
  'V.27': {
    name: 'V.27',
    price: 700,
    category: 'Shirt',
    initial: 'V.27'
  },
  'V.28': {
    name: 'V.28',
    price: 700,
    category: 'Shirt',
    initial: 'V.28'
  },
  'V.29': {
    name: 'V.29',
    price: 700,
    category: 'Shirt',
    initial: 'V.29'
  },
  'V.30': {
    name: 'V.30',
    price: 700,
    category: 'Shirt',
    initial: 'V.30'
  },
  'V.31': {
    name: 'V.31',
    price: 700,
    category: 'Shirt',
    initial: 'V.31'
  },
  'V.32': {
    name: 'V.32',
    price: 700,
    category: 'Shirt',
    initial: 'V.32'
  },
  'V.33': {
    name: 'V.33',
    price: 700,
    category: 'Shirt',
    initial: 'V.33'
  },
  'V.34': {
    name: 'V.34',
    price: 700,
    category: 'Shirt',
    initial: 'V.34'
  },
  'V.35': {
    name: 'V.35',
    price: 700,
    category: 'Shirt',
    initial: 'V.35'
  },
  'V.36': {
    name: 'V.36',
    price: 700,
    category: 'Shirt',
    initial: 'V.36'
  },
  'V.37': {
    name: 'V.37',
    price: 700,
    category: 'Shirt',
    initial: 'V.37'
  },
  'V.38': {
    name: 'V.38',
    price: 700,
    category: 'Shirt',
    initial: 'V.38'
  },
  'V.39': {
    name: 'V.39',
    price: 700,
    category: 'Shirt',
    initial: 'V.39'
  },
  'V.40': {
    name: 'V.40',
    price: 700,
    category: 'Shirt',
    initial: 'V.40'
  },
  'V.41': {
    name: 'V.41',
    price: 700,
    category: 'Shirt',
    initial: 'V.41'
  },
  'V.42': {
    name: 'V.42',
    price: 700,
    category: 'Shirt',
    initial: 'V.42'
  },
  'V.43': {
    name: 'V.43',
    price: 700,
    category: 'Shirt',
    initial: 'V.43'
  },
  'V.44': {
    name: 'V.44',
    price: 700,
    category: 'Shirt',
    initial: 'V.44'
  },
  'V.45': {
    name: 'V.45',
    price: 700,
    category: 'Shirt',
    initial: 'V.45'
  },
  'V.46': {
    name: 'V.46',
    price: 700,
    category: 'Shirt',
    initial: 'V.46'
  },
  'V.47': {
    name: 'V.47',
    price: 700,
    category: 'Shirt',
    initial: 'V.47'
  },
  'V.48': {
    name: 'V.48',
    price: 700,
    category: 'Shirt',
    initial: 'V.48'
  },
  'V.49': {
    name: 'V.49',
    price: 700,
    category: 'Shirt',
    initial: 'V.49'
  },
  'V.50': {
    name: 'V.50',
    price: 700,
    category: 'Shirt',
    initial: 'V.50'
  },
  'V.51': {
    name: 'V.51',
    price: 700,
    category: 'Shirt',
    initial: 'V.51'
  },
  'V.52': {
    name: 'V.52',
    price: 700,
    category: 'Shirt',
    initial: 'V.52'
  },
  'V.53': {
    name: 'V.53',
    price: 700,
    category: 'Shirt',
    initial: 'V.53'
  },
  'V.54': {
    name: 'V.54',
    price: 700,
    category: 'Shirt',
    initial: 'V.54'
  },
  'V.55': {
    name: 'V.55',
    price: 700,
    category: 'Shirt',
    initial: 'V.55'
  },
  'V.56': {
    name: 'V.56',
    price: 700,
    category: 'Shirt',
    initial: 'V.56'
  },
  'V.57': {
    name: 'V.57',
    price: 700,
    category: 'Shirt',
    initial: 'V.57'
  },
  'V.58': {
    name: 'V.58',
    price: 700,
    category: 'Shirt',
    initial: 'V.58'
  },
  'V.59': {
    name: 'V.59',
    price: 700,
    category: 'Shirt',
    initial: 'V.59'
  },
  'V.60': {
    name: 'V.60',
    price: 700,
    category: 'Shirt',
    initial: 'V.60'
  }
};

let cart = loadCart();

function loadCart() {
  try {
    const stored = localStorage.getItem(cartStorageKey);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const checkoutButton = document.getElementById('checkoutButton');

  if (countEl) {
    countEl.textContent = getCartCount();
  }

  if (!itemsEl || !totalEl) {
    return;
  }

  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty">Your cart is empty. Add a piece from the collection.</div>';
    totalEl.textContent = 'EGP 0';
    if (checkoutButton) {
      checkoutButton.disabled = true;
    }
    return;
  }
  itemsEl.innerHTML = cart.map((item) => {
    const product = products[item.id] || { name: item.name, price: item.price, initial: item.id.slice(0, 2).toUpperCase() };
    const variantLabel = item.variant ? ` / ${item.variant}` : '';
    const key = `${item.id}||${item.variant || 'default'}`;
    return `
      <div class="cart-item">
        <div class="cart-item-visual">${product.initial}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}${variantLabel}</div>
          <div class="cart-item-meta">${product.category || 'Limited Drop'}</div>
          <div class="cart-item-price">EGP ${product.price}</div>
          <div class="cart-qty">
            <button type="button" class="qty-btn" data-action="decrease" data-key="${key}">&minus;</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-action="increase" data-key="${key}">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `EGP ${getCartTotal()}`;

  if (checkoutButton) {
    checkoutButton.disabled = false;
  }
}

function buildCheckoutMessage() {
  const lines = [
    'Hi Machiavelli! I would like to place this order:',
    ''
  ];

  cart.forEach((item) => {
    const product = products[item.id] || { name: item.name, price: item.price };
    const variantLabel = item.variant ? ` (${item.variant})` : '';
    lines.push(`${product.name}${variantLabel} x${item.qty} - EGP ${product.price * item.qty}`);
  });

  lines.push('');
  lines.push(`Total: EGP ${getCartTotal()}`);
  lines.push('Please confirm availability and delivery details.');

  return lines.join('\n');
}

function checkoutCart() {
  if (!cart.length) return;

  const message = encodeURIComponent(buildCheckoutMessage());
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  try {
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (!popup) {
      window.location.href = url;
    }
  } catch (error) {
    window.location.href = url;
  }
}

function addToCart(productId) {
  // Deprecated call signature kept for backward compatibility
  addToCartWithVariant(productId, 'default');
}

function addToCartWithVariant(productId, variant = 'default') {
  const product = products[productId];
  if (!product) return;

  const existing = cart.find((item) => item.id === productId && (item.variant || 'default') === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, variant: variant === 'default' ? '' : variant, qty: 1, price: product.price, name: product.name });
  }

  saveCart();
  renderCart();
  toggleCart(true);
}

function updateCartItemByKey(key, delta) {
  // key format: id||variant
  const [id, variantRaw] = key.split('||');
  const variant = variantRaw === 'default' ? '' : variantRaw;
  const item = cart.find((entry) => entry.id === id && (entry.variant || '') === variant);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((entry) => !(entry.id === id && (entry.variant || '') === variant));
  }

  saveCart();
  renderCart();
}

function toggleCart(forceOpen) {
  const backdrop = document.getElementById('cartBackdrop');
  const panel = document.getElementById('cartPanel');

  if (!backdrop || !panel) return;

  if (forceOpen === true) {
    backdrop.classList.add('show');
    panel.classList.add('open');
  } else if (forceOpen === false) {
    backdrop.classList.remove('show');
    panel.classList.remove('open');
  } else {
    backdrop.classList.toggle('show');
    panel.classList.toggle('open');
  }
}

function bindEvents() {
  const toggleButton = document.getElementById('cartToggle');
  const closeButton = document.getElementById('closeCart');
  const backdrop = document.getElementById('cartBackdrop');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => toggleCart());
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => toggleCart(false));
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => toggleCart(false));
  }

  const checkoutButton = document.getElementById('checkoutButton');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      checkoutCart();
    });
  }

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-cart');
    if (addButton) {
      event.preventDefault();
      // find selected variant inside the same .card
      const card = addButton.closest('.card');
      let variant = 'default';
      if (card) {
        const active = card.querySelector('.variant-swatch.active');
        if (active) variant = active.getAttribute('data-variant') || 'default';
      }
      addToCartWithVariant(addButton.getAttribute('data-product'), variant);
      return;
    }

    const qtyButton = event.target.closest('.qty-btn');
    if (qtyButton) {
      const key = qtyButton.getAttribute('data-key');
      const action = qtyButton.getAttribute('data-action');
      if (action === 'increase') {
        updateCartItemByKey(key, 1);
      } else if (action === 'decrease') {
        updateCartItemByKey(key, -1);
      }
    }
  });
}

const initCart = () => {
  bindEvents();
  renderCart();
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(initCart, { timeout: 200 });
} else {
  window.addEventListener('DOMContentLoaded', initCart);
}




