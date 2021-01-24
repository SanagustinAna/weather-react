import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="card-footer text-center text-muted">
      <p className="name-footer">
        <a
          href="https://github.com/asan20/weather-page.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Ana Sanagustín
      </p>
    </div>
  );
}
