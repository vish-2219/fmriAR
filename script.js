// ===============================
// CATEGORY TABS
// ===============================

const tabs = document.querySelectorAll(".tab");

const productGroups = document.querySelectorAll(".products");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        productGroups.forEach(group=>{

            group.classList.remove("activeProducts");

        });

        document
        .getElementById(tab.dataset.category)
        .classList.add("activeProducts");

    });

});

// ===============================
// POPUP
// ===============================

const popup = document.getElementById("arPopup");

const popupTitle = document.getElementById("popupTitle");

const viewer = document.getElementById("hiddenViewer");

let selectedModel = "";

let selectedPoster = "";

document.querySelectorAll(".product").forEach(product=>{

    product.addEventListener("click",()=>{

        popup.style.display="flex";

        popupTitle.innerHTML=product.dataset.name;

        selectedModel=product.dataset.model;

        selectedPoster=product.dataset.poster;

    });

});

// ===============================
// VIEW IN AR
// ===============================

document.getElementById("viewAR").addEventListener("click",()=>{

    viewer.src=selectedModel;

    viewer.poster=selectedPoster;

    setTimeout(()=>{

        viewer.activateAR();

    },500);

});

// ===============================
// CLOSE
// ===============================

document.getElementById("closePopup").addEventListener("click",()=>{

    popup.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
