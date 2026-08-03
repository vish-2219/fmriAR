// ===============================
// EXPLORE BUTTON
// ===============================

document.getElementById("exploreBtn").addEventListener("click", () => {

    document.querySelector(".collection").scrollIntoView({

        behavior: "smooth"

    });

});

// ===============================
// CATEGORY OPEN / CLOSE
// ===============================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    const header = category.querySelector(".categoryHeader");
    const products = category.querySelector(".products");
    const arrow = category.querySelector(".arrow");

    header.addEventListener("click", () => {

        categories.forEach(item => {

            if(item !== category){

                item.querySelector(".products").style.display = "none";
                item.querySelector(".arrow").innerHTML = "▼";

            }

        });

        if(products.style.display === "flex"){

            products.style.display = "none";
            arrow.innerHTML = "▼";

        }else{

            products.style.display = "flex";
            arrow.innerHTML = "▲";

        }

    });

});

// ===============================
// PRODUCT CLICK
// ===============================

const viewer = document.getElementById("hiddenViewer");

document.querySelectorAll(".product").forEach(product=>{

    product.addEventListener("click",()=>{

        const model = product.dataset.model;
        const poster = product.dataset.poster;

        viewer.src = model;
        viewer.poster = poster;

        setTimeout(()=>{

            viewer.activateAR();

        },300);

    });

});
