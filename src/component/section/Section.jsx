import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaSnapchat,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./section.css";

function Section() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="content-wrapper">
          {/* Right side - Image and social icons */}
          <div
            className="image-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/image.png"
              alt="الشيخ مالك عبدالرحمن فهمي"
              className="profile-image"
            />
          </div>

          {/* Social icons under image */}
          <div className="social-under-image">
            <a
              href="https://www.facebook.com/share/1Gt9aaqRy9/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/malek_abdalrhman_fahmy_?igsh=MTJscmQwMXNqanlwbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@malek_abdalrhman_fahmy?_r=1&_t=ZS-94E4NFToHhw"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/@malek_abdelrhman_fahmy?si=hXSIvwIxlbSxFDlJ"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaYoutube />
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb5kLIz9mrGfwnOy1q2Z"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/Malek24fa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaTelegram />
            </a>
            <a
              href="https://sarhne.sarahah.pro/malekfahmy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-small"
            >
              <FaPaperPlane />
            </a>
          </div>

          {/* Left side - Text content */}
        </div>
      </div>
    </section>
  );
}

export default Section;
