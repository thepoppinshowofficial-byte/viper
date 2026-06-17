(function () {

    const DESTINATION_URL = ""; // Leave empty for now

    const style = document.createElement("style");

    style.innerHTML = `
        .popup-overlay{
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(0,0,0,.75);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:99999;
        }

        .popup-box{
            background:#1f2937;
            border:1px solid #374151;
            border-radius:12px;
            padding:40px 32px;
            max-width:420px;
            width:90%;
            text-align:center;
            box-shadow:0 20px 60px rgba(0,0,0,.5);
        }

        .popup-box h2{
            color:#fff;
            font-size:22px;
            margin-bottom:14px;
            font-family:Arial,sans-serif;
        }

        .popup-box p{
            color:#9ca3af;
            font-size:15px;
            line-height:1.6;
            margin-bottom:28px;
            font-family:Arial,sans-serif;
        }

        .popup-buttons{
            display:flex;
            justify-content:center;
            gap:12px;
        }

        .popup-btn{
            padding:12px 28px;
            border:none;
            border-radius:8px;
            cursor:pointer;
            font-weight:bold;
            font-size:15px;
        }

        .popup-accept{
            background:#2563eb;
            color:#fff;
        }

        .popup-close{
            background:#374151;
            color:#d1d5db;
        }
    `;

    document.head.appendChild(style);

    function createPopup() {

        if (document.querySelector(".popup-overlay")) return;

        const overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        overlay.innerHTML = `
            <div class="popup-box">
                <h2>Policy Notice</h2>

                <p>
                    Please review and accept our website policy before continuing.
                </p>

                <div class="popup-buttons">
                    <button id="popupAccept" class="popup-btn popup-accept">
                        Accept
                    </button>

                    <button id="popupClose" class="popup-btn popup-close">
                        Close
                    </button>
                </div>
            </div>
        `;

        document.body.classList.add("popup-blur"); document.body.appendChild(overlay);

        function handleAction() {

            if (DESTINATION_URL.trim() !== "") {
                window.location.href = DESTINATION_URL;
                return;
            }

            overlay.remove();
        }

        document
            .getElementById("popupAccept")
            .addEventListener("click", handleAction);

        document
            .getElementById("popupClose")
            .addEventListener("click", handleAction);
    }

    document.addEventListener("DOMContentLoaded", function () {

        const page = window.location.pathname;

        if (page.indexOf("lander.html") > -1) {
            createPopup();
        }

    });

})();
