import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OmanAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone></NotificationsNone>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language></Language>
          </div>
          <div className="topbarIconContainer">
            <Settings></Settings>
          </div>
          <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
