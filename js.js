document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";

    function closePopup() {
        popup.style.display = "none";
    }

    window.closePopup = closePopup;
});