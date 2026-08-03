// ===============================
// CATEGORY TABS
// ===============================

const tabs = document.querySelectorAll(".tab");
const productGroups = document.querySelectorAll(".products");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active tab
        tabs.forEach(t => t.classList.remove("active"));

        // Activate clicked tab
        tab.classList.add("active");

        // Hide all products
        productGroups.forEach(group => {
            group.classList.remove("activeProducts");
        });

        // Show selected category
        document.getElementById(tab.dataset.category)
            .classList.add("activeProducts");

    });

});

// ===============================
// PRODUCT CLICK
// ===============================

document.querySelectorAll(".product").forEach(product => {

    product.addEventListener("click", () => {

        alert("Selected: " + product.dataset.name);

    });

});
