const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.menu a[href="#${id}"]`);
            if (entry.isIntersecting) {
              link?.classList.add("bg-white/10");
            } else {
              link?.classList.remove("bg-white/10");
            }
        });
    },
    { rootMargin: "-30% 0px -70% 0px" },
);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach((menuLink) => {
    const hash = menuLink.getAttribute("href") ?? '';
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});