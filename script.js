// ===============================
// CATEGORY TABS
// ===============================

const tabs = document.querySelectorAll(".tab");
const productSections = document.querySelectorAll(".products");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active tab
        tabs.forEach(t => t.classList.remove("active"));

        // Activate clicked tab
        tab.classList.add("active");

        // Hide all categories
        productSections.forEach(section => {
            section.classList.remove("activeProducts");
        });

        // Show selected category
        document
            .getElementById(tab.dataset.category)
            .classList.add("activeProducts");

    });

});


// ===============================
// OPEN AR DIRECTLY
// ===============================

const viewer = document.getElementById("hiddenViewer");

document.querySelectorAll(".product").forEach(product => {

    product.addEventListener("click", () => {

        viewer.src = product.dataset.model;

        // Wait until model loads
        viewer.addEventListener("load", () => {

            viewer.activateAR();

        }, { once: true });

    });

});
