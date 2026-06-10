(function () {

    const REDIRECT = "https://your-offer-url.com/";

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

        const isLander =
            window.location.pathname.includes("lander.html");

        document.getElementById("acceptBtn").onclick = function () {

            if (isLander) {

                window.location.href = REDIRECT;

            } else {

                overlay.remove();

            }

        };

        document.getElementById("rejectBtn").onclick = function () {

            if (isLander) {

                window.location.href = REDIRECT;

            } else {

                overlay.remove();

            }

        };

    }

    document.addEventListener("DOMContentLoaded", function () {

        buildPopup();

    });

})();
```
