import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import wcagMenu from "../data/wcagMenu";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedItems({});
  };

  const toggleExpand = (path, depth) => {
    setExpandedItems((prev) => {
      const newExpanded = {};
      Object.keys(prev).forEach((key) => {
        if (!key.startsWith(`${depth}-`)) {
          newExpanded[key] = prev[key];
        }
      });
      const thisKey = `${depth}-${path}`;
      newExpanded[thisKey] = !prev[thisKey];
      return newExpanded;
    });
  };

  const renderSubMenu = (items, depth = 1) => (
    <ul className={`mobile-submenu depth-${depth}`}>
      {items.map((item, index) => {
        const key = `${depth}-${item.path}`;
        const isOpen = expandedItems[key];

        return (
          <li key={index}>
            {item.sub ? (
              <div
                className="mobile-menu-item"
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (isOpen) {
                    window.location.href = item.path;
                  } else {
                    toggleExpand(item.path, depth);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (isOpen) {
                      window.location.href = item.path;
                    } else {
                      toggleExpand(item.path, depth);
                    }
                  }
                }}
              >
                <span className="menu-title">{item.title}</span>
                <span className={`expand-icon ${isOpen ? "rotated" : ""}`}>
                  ▼
                </span>
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={closeMenu}
                className="mobile-menu-item"
              >
                {item.title}
              </Link>
            )}
            {item.sub && isOpen && renderSubMenu(item.sub, depth + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="title" onClick={closeMenu}>
        Hem
      </Link>

      <button className="menu" onClick={toggleMenu} aria-label="Menyknapp">
        {menuOpen ? <X /> : <Menu />}
      </button>

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {renderSubMenu(wcagMenu, 1)}
        <li>
          <div className="mobile-menu-item">
            <Link to="/about" onClick={closeMenu}>
              Om oss
            </Link>
          </div>
        </li>
        <li>
          <div className="mobile-menu-item">
            <Link to="/services" onClick={closeMenu}>
              Tjänster
            </Link>
          </div>
        </li>
        <li>
          <div className="mobile-menu-item">
            <Link to="/contact" onClick={closeMenu}>
              Kontakt
            </Link>
          </div>
        </li>
      </ul>

      <ul className="desktop-menu">
        <li>
          <NavLink to="/about">Om oss</NavLink>
        </li>
        <li>
          <NavLink to="/services">Tjänster</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
