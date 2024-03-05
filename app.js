document.addEventListener('DOMContentLoaded', function() {
  function fetchAndInsertHtml(url) {
      fetch(url)
          .then(response => response.text())
          .then(data => {
              document.querySelector('body').insertAdjacentHTML('afterbegin', data);
          });
  }

  fetchAndInsertHtml('header.html');
  fetchAndInsertHtml('footer.html');
});


function showDetails(index) {
    const productDetails = document.querySelectorAll('.product-details');
    productDetails.forEach((details, i) => {
        if (i === index - 1) {
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        } else {
            details.style.display = 'none';
        }
    });
}


let currentIndex = 0;

    function showSlide(index) {
        const slider = document.querySelector('.product-slider');
        const totalSlides = document.querySelectorAll('.product-box').length;
        index = (index + totalSlides) % totalSlides; 
        const translateValue = -index * 100 + 'vw';
        slider.style.transform = `translateX(${translateValue})`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }