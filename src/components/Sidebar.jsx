import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import wcagMenu from "../data/wcagMenu";
import "./Sidebar.css";

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const toggleExpand = (path, depth) => {
    const key = `${depth}-${path}`;
    setExpandedItems((prev) => {
      const newExpanded = {};
      Object.keys(prev).forEach((k) => {
        if (!k.startsWith(`${depth}-`)) newExpanded[k] = prev[k];
      });
      if (prev[key]) {
        navigate(path);
      } else {
        newExpanded[key] = true;
      }
      return newExpanded;
    });
  };

  const handleKeyDown = (e, item, depth, hasSub) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hasSub) {
        toggleExpand(item.path, depth);
      } else {
        navigate(item.path);
      }
    }
  };

  const renderMenu = (items, depth = 1) => (
    <ul className={`sidebar-menu depth-${depth}`}>
      {items.map((item, index) => {
        const key = `${depth}-${item.path}`;
        const isOpen = expandedItems[key];
        const isActive = location.pathname === item.path;
        const hasSub = item.sub && item.sub.length > 0;

        return (
          <li key={index}>
            <div
              className={`sidebar-item ${isActive ? "active" : ""}`}
              onClick={() =>
                hasSub ? toggleExpand(item.path, depth) : navigate(item.path)
              }
              onKeyDown={(e) => handleKeyDown(e, item, depth, hasSub)}
              tabIndex={0}
              role="button"
              aria-expanded={hasSub ? isOpen : undefined}
              aria-label={item.title}
            >
              <span>{item.title}</span>
              {hasSub && (
                <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
              )}
            </div>
            {hasSub && isOpen && renderMenu(item.sub, depth + 1)}
          </li>
        );
      })}
    </ul>
  );

  return <aside className="sidebar">{renderMenu(wcagMenu)}</aside>;
};

export default Sidebar;
