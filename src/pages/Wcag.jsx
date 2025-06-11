import React from "react";
import { Outlet } from "react-router-dom";

const Wcag = () => {
  return (
    <div className="wcag-page">
      <Outlet />
    </div>
  );
};

export default Wcag;
