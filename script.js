// ===============================
// CATEGORY TABS
// ===============================

// CATEGORY TABS

const tabs = document.querySelectorAll(".tab");
const productGroups = document.querySelectorAll(".products");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        productGroups.forEach(group => {
            group.classList.remove("activeProducts");
        });

        document.getElementById(tab.dataset.category)
            .classList.add("activeProducts");

    });

});

// PRODUCT CLICK

document.querySelectorAll(".product").forEach(product => {

    product.addEventListener("click", () => {

        console.log(product.dataset.name);

    });

});
