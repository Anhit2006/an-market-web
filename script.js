// Toggle menu responsive
const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", function () {
    menuBar.classList.toggle("active");
    document.querySelector(".menu-items").classList.toggle("active");
});

// Hiện nút scroll to top khi cuộn
const toP = document.querySelector(".top");
window.addEventListener("scroll", function () {
    const x = window.pageYOffset;
    if (x > 200) {
        toP.classList.add("active");
    } else {
        toP.classList.remove("active");
    }
});

// Chuyển tab trong phần menu
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (x) {
    if (x.target.classList.contains("menu-button")) {
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active");
    }
});

// Hiệu ứng xuất hiện cho phần About (page 2)
document.addEventListener("DOMContentLoaded", function () {
    const aboutItems = document.querySelectorAll(".about-item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    aboutItems.forEach(item => observer.observe(item));
});

// Xử lý cuộn đến phần menu khi click "Xem menu"
document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".big-image-content-btn");
    const menuSection = document.querySelector(".menu");

    menuButtons.forEach(button => {
        button.addEventListener("click", function () {
            menuSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Tab menu (Trưa, Chiều, Đồ uống, Điểm Tâm)
    const menuTabButtons = document.querySelectorAll(".menu-button");
    const menuTabContents = document.querySelectorAll(".menu-item-content");

    menuTabButtons.forEach(button => {
        button.addEventListener("click", function () {
            menuTabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.dataset.title;
            menuTabContents.forEach(content => content.classList.remove("active"));
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    // Hiệu ứng phần About khi cuộn
    const aboutItems = document.querySelectorAll(".about .about-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    });

    aboutItems.forEach(item => observer.observe(item));
});
