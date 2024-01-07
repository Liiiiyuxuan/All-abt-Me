function myFunction() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("hello");

    // Alert the copied text
    alert("Copied the text: " + "hello");
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }