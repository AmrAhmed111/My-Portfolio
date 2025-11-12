// Random display of projects
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".isotope-container");
    const items = Array.from(container.children);

    // Mixing elements randomly
    const shuffled = items.sort(() => Math.random() - 0.5);

    // Clear content and rearrange it randomly
    shuffled.forEach(item => container.appendChild(item));

    // Reset Isotope if the user
    if (typeof Isotope !== "undefined") {
        const iso = new Isotope(container, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
        });
        iso.layout();
    }
});