// ================================
// CATEGORY TABS
// ================================

const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".products");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Active tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Hide all product sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show selected section
        const selected = document.getElementById(tab.dataset.category);

        if(selected){
            selected.style.display = "flex";
        }

    });

});

// Show only pastries initially
sections.forEach(section => section.style.display = "none");
document.getElementById("pastry").style.display = "flex";


// ================================
// PRODUCT CLICK
// ================================

document.querySelectorAll(".product").forEach(product => {

    product.addEventListener("click", () => {

        const viewer = document.getElementById("hiddenViewer");

        viewer.src = product.dataset.model;
        viewer.poster = product.dataset.poster;

        viewer.activateAR();

    });

});
