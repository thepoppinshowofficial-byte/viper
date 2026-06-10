(function () {

    const REDIRECT = "https://your-destination-url.com/";

    function buildPopup() {

        if (document.querySelector(".cookie-backdrop")) return;

        const overlay = document.createElement("div");
        overlay.className = "cookie-backdrop";

        overlay.innerHTML = `
            <div class="cookie-modal">

                <h3>Welcome</h3>

                <p>
                    Please review our website information before continuing.
                </p>

                <div class="cookie-actions">

                    <button class="cookie-btn cookie-accept" id="acceptBtn">
                        Continue
                    </button>

                    <button class="cookie-btn cookie-reject" id="rejectBtn">
                        Learn More
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("acceptBtn").addEventListener("click", function () {
            window.location.href = REDIRECT;
        });

        document.getElementById("rejectBtn").addEventListener("click", function () {
            window.location.href = "privacy.html";
        });

    }

    window.PopupLander = function () {
        buildPopup();
    };

})();
