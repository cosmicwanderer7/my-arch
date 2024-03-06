import React from "react";
import Waybar from "./components/Waybar";

export default function WaybarLayout({ children }) {
  return (
    <div>
      <Waybar />
      {children}
    </div>
  );
}
