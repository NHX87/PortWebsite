// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Subtle parallax on ambient blobs
const blobA = document.querySelector(".ambient-a");
const blobB = document.querySelector(".ambient-b");

if (blobA && blobB) {
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    blobA.style.transform = `translate(${x * 18}px, ${y * 14}px)`;
    blobB.style.transform = `translate(${x * -14}px, ${y * 10}px)`;
  });
}
