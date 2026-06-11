alert("popup.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100vw";
    popup.style.height = "100vh";
    popup.style.background = "black";
    popup.style.zIndex = "999999";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";

    popup.innerHTML = `
        <div style="
            background:white;
            padding:40px;
            border-radius:20px;
            text-align:center;
            max-width:500px;
        ">
            <h2>Cookie Preferences</h2>
            <p>This is a test popup.</p>
            <button onclick="alert('Accept Clicked')">
                Accept
            </button>
        </div>
    `;

    document.body.appendChild(popup);

});
