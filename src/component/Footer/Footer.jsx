import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p className="copyright">
            © 2024 جميع الحقوق محفوظة - مالك عبدالرحمن فهمي
          </p>
          <p className="creator">
            Made by 
            <a
              href="https://www.facebook.com/share/16xmDcfZtd/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span> Mahmoud 3zb</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
