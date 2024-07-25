import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cont">
        <span>© Renato S. Loeza - Web developer · 2023</span>
        <section>
          <a
            href="https://github.com/renatosanz"
            class="social-links__entry"
            target="_blank"
          >
            <span>
              <i class="fa-brands fa-2x fa-github-alt"></i>
            </span>
          </a>
          <a
            href="https://x.com/riprtx"
            class="social-links__entry"
            target="_blank"
          >
            <span>
              <i class="fa-brands fa-2x fa-square-twitter"></i>
            </span>
          </a>
          <a
            href="https://www.behance.net/riprtx"
            class="social-links__entry"
            target="_blank"
          >
            <span>
              <i class="fa-brands fa-2x fa-square-behance"></i>
            </span>
          </a>
        </section>
      </div>
    </footer>
  );
}
