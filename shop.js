const buttons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product-card");

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= FILTER ================= */
buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        filterProducts();
    });
});

/* ================= SEARCH ================= */
searchInput.addEventListener("input", filterProducts);

/* ================= SORT ================= */
sortSelect.addEventListener("change", () => {
    sortProducts();
});

/* ================= MAIN FILTER FUNCTION ================= */
function filterProducts() {
    const activeFilter = document.querySelector(".filter-buttons .active").textContent.toLowerCase();
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {

        const category = product.querySelector(".category").textContent.toLowerCase();
        const title = product.querySelector("h3").textContent.toLowerCase();

        const matchFilter = activeFilter === "all" || category.includes(activeFilter);
        const matchSearch = title.includes(searchValue);

        if (matchFilter && matchSearch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

/* ================= SORT FUNCTION ================= */
function sortProducts() {
    const grid = document.querySelector(".product-grid");
    const items = Array.from(products);

    let sorted;

    if (sortSelect.value === "low") {
        sorted = items.sort((a,b) =>
            getPrice(a) - getPrice(b)
        );
    } else if (sortSelect.value === "high") {
        sorted = items.sort((a,b) =>
            getPrice(b) - getPrice(a)
        );
    } else {
        return;
    }

    sorted.forEach(item => grid.appendChild(item));
}

function getPrice(el){
    return parseInt(el.querySelector(".price").textContent.replace(/[₱,]/g,""));
}

/* ================= MODAL ================= */
products.forEach(product => {
    product.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = product.querySelector("img").src;
        modalTitle.textContent = product.querySelector("h3").textContent;
        modalPrice.textContent = product.querySelector(".price").textContent;

        modalAddCart.onclick = () => {
            cart.push(modalTitle.textContent);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to cart!");
        };
    });
});

/* CLOSE MODAL */
document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};





// AUTH MODAL

const userIcon = document.getElementById("userIcon");

const authModal = document.getElementById("authModal");

const closeAuth = document.getElementById("closeAuth");

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");

const showLogin = document.getElementById("showLogin");


// OPEN MODAL

userIcon.addEventListener("click", (e) => {

    e.preventDefault();

    authModal.style.display = "flex";

});


// CLOSE MODAL

closeAuth.addEventListener("click", () => {

    authModal.style.display = "none";

});


// CLOSE OUTSIDE

window.addEventListener("click", (e) => {

    if(e.target === authModal){

        authModal.style.display = "none";

    }

});


// SHOW REGISTER

showRegister.addEventListener("click", () => {

    loginForm.classList.remove("active-form");

    registerForm.classList.add("active-form");

});


// SHOW LOGIN

showLogin.addEventListener("click", () => {

    registerForm.classList.remove("active-form");

    loginForm.classList.add("active-form");

});