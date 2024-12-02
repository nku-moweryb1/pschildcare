document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown");

    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("open");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});
