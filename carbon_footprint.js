<script>
document.getElementById("done-button").addEventListener("click", function(event) {
    var nameInput = document.getElementById("name");
    var rectangularBox = document.querySelector(".rectangular-box");

    if (nameInput.value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        nameInput.classList.add("invalid-input"); // Add red border to name field
        rectangularBox.classList.add("shake"); // Add shake animation to rectangular box

        // Remove shake animation after animation ends
        rectangularBox.addEventListener("animationend", function() {
            rectangularBox.classList.remove("shake"); // Remove shake animation
        }, { once: true });
    } else {
        nameInput.classList.remove("invalid-input"); // Remove red border if name is entered
    }
});
</script>
