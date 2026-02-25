import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up or at top
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isScrolled ? "header-hidden" : ""}`}>
      <div className="header-container">
        {/* <nav className="nav-menu">
          
          <a href="#social" className="nav-link">
            تواصل
          </a>  
          <a href="#home" className="nav-link">
            الرئيسية
          </a>
        </nav> */}
        <div className="logo">
          <span className="logo-text">مالك عبدالرحمن فهمي</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
