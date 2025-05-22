  // Closing temprorary offer bar
var ad = document.getElementById("ad");
var closead = document.getElementById("closead");

closead.addEventListener("click", function () {
    ad.style.display = "none"
});
 
 // Toggle menu
function showmenu() {
   document.getElementById("mobile-menu").classList.add("show");
}

function closemenu() {
   document.getElementById("mobile-menu").classList.remove("show")
}

//Check box filter & Search functiionality
// const checkboxes = document.querySelectorAll('.filter-checkbox');
//   const searchInput = document.getElementById('searchInput');
//   const products = document.querySelectorAll('.product-item');

//   function filterProducts() {
//     const selectedTags = Array.from(checkboxes)
//       .filter(chk => chk.checked)
//       .map(chk => chk.value.toLowerCase());

//     const searchValue = searchInput.value.toLowerCase();

//     products.forEach(product => {
//       const tags = product.dataset.tags.toLowerCase();
//       const title = product.querySelector('h2').textContent.toLowerCase();

//       const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => tags.includes(tag));
//       const matchesSearch = title.includes(searchValue);

//       if (matchesTags && matchesSearch) {
//         product.classList.remove('hidden');
//       } else {
//         product.classList.add('hidden');
//       }
//     });
//   }

//   checkboxes.forEach(chk => chk.addEventListener('change', filterProducts));
//   searchInput.addEventListener('input', filterProducts);

//product search

var search = document.getElementById("searchInput");
var container = document.getElementById("product-grid");
var ProductList = container.querySelectorAll("div");

search.addEventListener("keyup", function(event){
  var enteredValue = event.target.value.toUpperCase()

  for (count = 0; count < ProductList.length; count = count + 1) {
    var productname = ProductList[count].querySelector("h2").textContent

    if(productname.toUpperCase().indexOf(enteredValue) < 0)
    {
      ProductList[count].style.display="none"
    }
    else{
      ProductList[count].style.display="block"
    }
  }
})

//checkbox
const checkboxes = document.querySelectorAll('.filter-checkbox');
  const products = document.querySelectorAll('.product-item');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

      products.forEach(product => {
        const tags = product.dataset.tags.toLowerCase();

        // If no filters selected, show all
        if (selectedFilters.length === 0) {
          product.style.display = 'block';
        } else {
          // Show product only if it matches ALL selected tags
          const matchesAll = selectedFilters.every(tag => tags.includes(tag));
          product.style.display = matchesAll ? 'block' : 'none';
        }
      });
    });
  });

