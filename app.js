document.addEventListener('DOMContentLoaded', function() {
    function fetchAndInsertHtml(url, place) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector('body').insertAdjacentHTML(place, data);
            });
    }
  
    fetchAndInsertHtml('footer.html', 'afterend');
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
          const translateValue = -index * 74 + 'vw';
          slider.style.transform = `translateX(${translateValue})`;
          currentIndex = index;
      }
  
      function nextSlide() {
          showSlide(currentIndex + 1);
      }
  
      function prevSlide() {
          showSlide(currentIndex - 1);
      }
  
  
      const products = [
          {
              id: 1,
              name: "smart watch",
              price: 33.99,
              image: "./images/smartwatch.jpg",
          },
          {
              id: 2,
              name: "SAMSUNG Galaxy Buds Pro 2",
              price: 29.99,
              image: "./images/earbuds.jpg",
          },
          {
              id: 3,
              name: "HP 14 Laptop",
              price: 198.99,
              image: "./images/laptop.jpg",
          },
          {
              id: 4,
              name: "SanDisk Portable SSD",
              price: 85.99,
              image: "./images/ssd.jpg",
          },
          {
              id: 5,
              name: "Anker GaNPrime Power Bank",
              price: 54.99,
              image: "./images/powerbank.jpg",
          },
      
      ];
      
      const searchBox = document.querySelector("#search-box");
      const searchInput = document.querySelector(".search-input");
      const searchButton = document.querySelector("#search-icon");
      
      searchProducts = () => {
          searchBox.classList.add("active-search");
          const searchValue = searchInput.value.toLowerCase();
          const filteredProducts = products.filter((product) => {
              return product.name.toLowerCase().includes(searchValue);
          });
          searchInput.value = "";
      
          const searchResultsDiv = document.createElement("div");
          searchResultsDiv.classList.add("search-results");
          searchBox.appendChild(searchResultsDiv);
      
          if (filteredProducts.length === 0) {
              searchResultsDiv.innerHTML = "<p>No products found</p>";
              return;
          }
      
          filteredProducts.forEach((product) => {
              const productDiv = document.createElement("div");
              productDiv.classList.add("search-result");
              productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              `;
              searchResultsDiv.appendChild(productDiv);
          });
      };
      
      clearSearchResults = () => {
          searchBox.classList.remove("active-search");
          const searchResults = document.querySelector(".search-results");
          if (searchResults) {
              searchResults.remove();
          }
      };
      
      searchButton.addEventListener("click", () => {
          clearSearchResults();
          if (searchInput.value === "") return;
          searchProducts();
      });
      
      searchInput.addEventListener("keyup", (e) => {
          if (e.key === "Enter") {
              if (searchInput.value === "") return;
              searchProducts();
          }
      });
      
      document.addEventListener("click", (e) => {
          const inInsideSearchBox = searchBox.contains(e.target);
          if (!inInsideSearchBox) {
              clearSearchResults();
          }
      });
      