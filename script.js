//your JS code here. If required.
//one way
document.addEventListener("DOMContentLoaded", () => {
    const statusParagraph = document.getElementById("status");
    const enterButton = document.getElementById("enterBtn");

    enterButton.addEventListener("click", () => {
        statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});

//second way
document.getElementById("enterBtn").onclick = function () {
    document.getElementById("status").innerHTML = "<h1>Entered Metaverse</h1>";
};
