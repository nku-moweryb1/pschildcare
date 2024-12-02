// JavaScript for Thank You Page
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // Extract data from URL parameters
    const parentName = params.get("parentName") || "Parent";
    const phoneNumber = params.get("phoneNumber") || "your phone number";
    const childName = params.get("childName") || "your child";
    const childAge = params.get("childAge") || "their age";
    const location = params.get("location") || "your preferred location";

    // Populate placeholders with data
    document.getElementById("parentNamePlaceholder").textContent = parentName;
    document.getElementById("phonePlaceholder").textContent = phoneNumber;
    document.getElementById("childNamePlaceholder").textContent = childName;
    document.getElementById("childAgePlaceholder").textContent = childAge;
    document.getElementById("locationPlaceholder").textContent = location;
});
