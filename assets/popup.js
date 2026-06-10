(function () {

    const REDIRECT = "https://your-offer-link.com/";

    function buildPopup() {

        if (document.querySelector(".cookie-backdrop")) return;

        const overlay = document.createElement("div");

        overlay.className = "cookie-backdrop";

        overlay.innerHTML = `
            <div class="cookie-modal">

                <h3>🍪 Cookie Preferences</h3>

                <p>
                    We use cookies and similar technologies to improve website
                    functionality, analyze traffic and enhance user experience.
                    Please choose whether you would like to accept or reject cookies.
                </p>

                <div class="cookie-actions">

                    <button class="cookie-btn cookie-accept" id="acceptBtn">
                        Accept
                    </button>

                    <button class="cookie-btn cookie-reject" id="rejectBtn">
                        Reject
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("acceptBtn").addEventListener("click", function () {

            window.location.href = REDIRECT;

        });

        document.getElementById("rejectBtn").addEventListener("click", function () {

            window.location.href = REDIRECT;

        });

    }

    window.PopupLander = function () {

        buildPopup();

    };

})();
