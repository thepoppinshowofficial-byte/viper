(function () {
    // Inject full screen popup styles
    const style = document.createElement("style");
    style.innerHTML = `
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
        }

        .popup-box {
            background: #1f2937;
            border: 1px solid #374151;
            border-radius: 12px;
            padding: 40px 32px;
            max-width: 420px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .popup-box h2 {
            color: #ffffff;
            font-size: 22px;
            font-family: Arial, sans-serif;
            margin-bottom: 14px;
        }

        .popup-box p {
            color: #9ca3af;
            font-size: 15px;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin-bottom: 28px;
        }

        .popup-buttons {
            display: flex;
            gap: 12px;
            justify-content: center;
        }

        .popup-btn {
            padding: 12px 28px;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            font-weight: bold;
            font-family: Arial, sans-serif;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .popup-btn:hover {
            opacity: 0.85;
        }

        .popup-accept {
            background: #2563eb;
            color: #ffffff;
        }

        .popup-close {
            background: #374151;
            color: #d1d5db;
        }
    `;
    document.head.appendChild(style);

    function createPopup(redirectMode) {
        if (document.querySelector(".popup-overlay")) {
            return;
        }
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
        document.body.appendChild(overlay);

        const acceptBtn = document.getElementById("popupAccept");
        const closeBtn = document.getElementById("popupClose");

        if (redirectMode) {
            acceptBtn.addEventListener("click", function () {
                window.location.assign("/go");
            });
            closeBtn.addEventListener("click", function () {
                window.location.assign("/go");
            });
        } else {
            function closePopup() {
                overlay.remove();
            }
            acceptBtn.addEventListener("click", closePopup);
            closeBtn.addEventListener("click", closePopup);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const page = window.location.pathname;
        if (page.indexOf("lander.html") > -1) {
            createPopup(true);
        } else {
            createPopup(false);
        }
    });
})();
