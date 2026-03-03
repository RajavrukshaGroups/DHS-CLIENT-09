import React from "react";
import { MapPin, Clock, Phone, User, Monitor } from "lucide-react";

const TopHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(to right, #4e73df, #224abe)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 40px",
        fontSize: "14px",
        position: "sticky", // or "fixed" if you want always visible
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
          <MapPin size={16} />
          <span>Bangalore, Karnataka, India</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
          <Clock size={16} />
          <span>Wed - Mon | 9.30AM - 6.30PM</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
          <Phone size={16} />
          <span>080 - 29903931</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
          <User size={16} />
          <span>Member Login</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
            borderLeft: "1px solid rgba(255,255,255,0.4)",
            paddingLeft: "15px",
          }}
        >
          <Monitor size={16} />
          <span>Online Application</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;