// scripts.js

// Función para cargar los productos
async function loadProducts() {
  try {
    const response = await fetch('products/index.json');
    const products = await response.json();

    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Limpia cualquier contenido previo

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <a href="product-details.html?product=${encodeURIComponent(product.title)}">
          <img src="${product.image}" alt="${product.title}">
        </a>
        <h2>${product.title}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      `;

      productsContainer.appendChild(productCard);
    });

    // Agrega evento a los botones "Add to Cart"
    const buttons = document.querySelectorAll('.product-card button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Item added to cart');
      });
    });

  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Ejecuta la carga de productos al cargar la página
document.addEventListener('DOMContentLoaded', loadProducts);
