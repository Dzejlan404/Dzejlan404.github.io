// Toggle button functionality
document.getElementById("toggleButton").addEventListener("click", function() {
    const container = document.getElementById("myContainer");
    const toggleButton = document.getElementById("toggleButton");

    // Show popup and hide the button
    if (container.classList.contains("hidden")) {
        container.classList.remove("hidden");
        container.classList.add("visible");
        toggleButton.classList.add("hidden"); // Hide the "Show Info" button
    }
});

// Close button functionality
document.getElementById("closeButton").addEventListener("click", function() {
    const container = document.getElementById("myContainer");
    const toggleButton = document.getElementById("toggleButton");

    // Hide popup and show the button again
    container.classList.remove("visible");
    container.classList.add("hidden");
    toggleButton.classList.remove("hidden"); // Show the "Show Info" button again
});
