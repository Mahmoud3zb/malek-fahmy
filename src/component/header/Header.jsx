import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-menu">
          <a href="#social" className="nav-link">
            تواصل
          </a>
          <a href="#home" className="nav-link">
            الرئيسية
          </a>
        </nav>
        <div className="logo">
          <span className="logo-text">مالك عبدالرحمن فهمي</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
