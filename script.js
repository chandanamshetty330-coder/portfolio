// DARK / LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode ☀";
    } else {
        toggleBtn.textContent = "Dark Mode 🌙";
    }

    // Save mode in browser
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// Load saved theme
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode ☀";
    }
};