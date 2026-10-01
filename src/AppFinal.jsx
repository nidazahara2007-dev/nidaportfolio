import { useEffect, useState } from "react";
import App from "./App.jsx";
import "./AppFinal.css";

function SignalLost({ onRestore }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        onRestore();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onRestore]);

  return (
    <div className="signal-page">
      <div className="signal-noise" />
      <div className="signal-scanline" />
      <div className="signal-grid" />

      <div className="signal-corner signal-corner-tl">
        NIDA / SYSTEM 09
      </div>

      <div className="signal-corner signal-corner-tr">
        CONNECTION: LOST
      </div>

      <div className="signal-corner signal-corner-bl">
        RECOVERY PROTOCOL
      </div>

      <div className="signal-corner signal-corner-br">
        ESC / RETURN
      </div>

      <div className="signal-top">
        <span>TRANSMISSION 004</span>
        <span>NO STABLE SIGNAL</span>
      </div>

      <div className="signal-center">

        <div className="signal-radar">
          <div className="signal-radar-ring ring-one" />
          <div className="signal-radar-ring ring-two" />
          <div className="signal-radar-ring ring-three" />

          <div className="signal-radar-cross horizontal" />
          <div className="signal-radar-cross vertical" />

          <div className="signal-radar-sweep" />

          <div className="signal-core">
            <span />
          </div>

          <div className="signal-packet packet-one" />
          <div className="signal-packet packet-two" />
          <div className="signal-packet packet-three" />
        </div>

        <div className="signal-status">
          <span className="signal-status-dot" />
          SIGNAL INTERRUPTED
        </div>

        <h1 className="signal-title">
          SIGNAL
          <br />
          <span>LOST.</span>
        </h1>

        <p className="signal-subtitle">
          THE PORTFOLIO TRANSMISSION HAS
          <br />
          LEFT THE EXPECTED FREQUENCY.
        </p>

        <div className="signal-data">
          <span>LATENCY — 087ms</span>
          <span>PACKETS — 03/09</span>
          <span>STATUS — UNSTABLE</span>
        </div>

        <button
          className="signal-restore"
          onClick={onRestore}
        >
          <span>RESTORE SIGNAL</span>
          <b>↗</b>
        </button>

      </div>

      <div className="signal-transmission">
        <span>SEARCHING FOR PORTFOLIO...</span>
        <div className="transmission-line">
          <i />
        </div>
      </div>

    </div>
  );
}

function AppFinal() {
  const [signalLost, setSignalLost] = useState(false);

  useEffect(() => {
    const addSignalButton = () => {
      const navigation = document.querySelector(
        ".overlay-navigation"
      );

      if (!navigation) return false;

      if (navigation.querySelector(".signal-nav-trigger")) {
        return true;
      }

      const button = document.createElement("button");

      button.className = "signal-nav-trigger";
      button.type = "button";

      button.innerHTML = `
        <span class="signal-nav-index">10</span>
        <span>SIGNAL LOST</span>
      `;

      button.addEventListener("click", () => {
        setSignalLost(true);
      });

      navigation.appendChild(button);

      return true;
    };

    if (!addSignalButton()) {
      const observer = new MutationObserver(() => {
        if (addSignalButton()) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = signalLost
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [signalLost]);

  return (
    <>
      <div
        className={
          signalLost
            ? "portfolio-under-signal"
            : ""
        }
      >
        <App />
      </div>

      {signalLost && (
        <SignalLost
          onRestore={() => setSignalLost(false)}
        />
      )}
    </>
  );
}

export default AppFinal;