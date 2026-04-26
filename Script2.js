// 1. إدراج السنة الحالية بأمان (فقط إذا كان العنصر موجوداً)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2. تمرير سلس مع تعويض ارتفاع الهيدر المثبت
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector("header").offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    });
});

// 3. تأثير الظهور عند التمرير
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
revealOnScroll(); // تشغيل أولي عند فتح الصفحة