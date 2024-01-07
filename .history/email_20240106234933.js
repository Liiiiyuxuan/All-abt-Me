function myFunction() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("hello");

    // Alert the copied text
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    tooltip.innerHTML = "Copy to clipboard";
}