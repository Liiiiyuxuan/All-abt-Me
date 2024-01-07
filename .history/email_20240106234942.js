function myFunction() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("hello");

    // Alert the copied text
    tooltip.innerHTML = "Email Copied";
}

function outFunc() {
    tooltip.innerHTML = "Copy to clipboard";
}