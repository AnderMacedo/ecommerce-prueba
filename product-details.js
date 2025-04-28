window.onload = function() {
    // Obtener el parámetro 'product' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
  
    // Información estática de los productos
    const products = {
      tshirt: {
        name: 'T-shirt',
        description: 'This is a great t-shirt made of cotton.',
        price: '$25.00',
        image: 'assets/tshirt.jpg'
      },
      jeans: {
        name: 'Jeans',
        description: 'Comfortable jeans perfect for everyday wear.',
        price: '$40.00',
        image: 'assets/jeans.jpg'
      },
      jacket: {
        name: 'Jacket',
        description: 'Stylish jacket to keep you warm in winter.',
        price: '$60.00',
        image: 'assets/jacket.jpg'
      }
    };
  
    // Mostrar los detalles del producto correspondiente
    const product = products[productId];
  
    if (product) {
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('product-price').textContent = product.price;
    } else {
      document.getElementById('product-info').innerHTML = '<p>Product not found.</p>';
    }
  }
  