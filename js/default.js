const inputElement = document.getElementById("innersearch");

inputElement.addEventListener("focus", function() {
    this.blur();
});