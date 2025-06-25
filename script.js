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
// ========== Cuộn mượt đến các section ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Điều kiện hiển thị và hành động khi click
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Hiệu ứng hiện dần khi cuộn ==========
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ========== Kiểm tra form ==========
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Vui lòng điền đầy đủ thông tin!');
      e.preventDefault();
    }
  });
}
// Khi tải lại trang, luôn cuộn về đầu (top)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

