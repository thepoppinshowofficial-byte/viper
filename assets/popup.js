(function () {

    const REDIRECT = "https://kouponsfy.online/grandtrys";

    function buildPopup() {

        if (document.querySelector(".cookie-backdrop")) return null;

        const overlay = document.createElement("div");
        overlay.className = "cookie-backdrop";

        const modal = document.createElement("div");
        modal.className = "cookie-modal";

        modal.innerHTML = `
            <h3>Cookie Preferences</h3>

            <p>
                We use cookies and similar technologies to improve website
                functionality, analyze traffic and enhance user experience.
            </p>

            <div class="cookie-actions">
                <button class="cookie-btn cookie-accept" id="acceptBtn">
                    Accept
                </button>

                <button class="cookie-btn cookie-reject" id="rejectBtn">
                    Reject
                </button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        return overlay;
    }

    window.PopupIndex = function () {

        const popup = buildPopup();

        if (!popup) return;

        document.getElementById("acceptBtn").onclick = function () {
            popup.remove();
        };

        document.getElementById("rejectBtn").onclick = function () {
            window.location.href = "privacy.html";
        };
    };

    window.PopupLander = function () {

        const popup = buildPopup();

        if (!popup) return;

        document.getElementById("acceptBtn").onclick = function () {
            window.location.href = REDIRECT;
        };

        document.getElementById("rejectBtn").onclick = function () {
            window.location.href = REDIRECT;
        };
    };

})();
