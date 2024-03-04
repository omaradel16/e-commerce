let currentSlide = 0;

  function showDetails(index) {
    const productDetails = document.querySelectorAll('.product-details');
    productDetails.forEach((details, i) => {
      if (i === index - 1) {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    });
  }