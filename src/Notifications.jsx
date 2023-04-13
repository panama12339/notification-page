import { useState } from "react";
import NotificationCards from "./NotificationCards";

import NotificationData from "./notifications.json";

function Notifications() {
  let tally = 0;

  for (let obj of NotificationData) {
    if (!obj.read) {
      tally++;
    }
  }

  return (
    <main className="notifications-container">
      <div className="notifications-header">
        <div className="notifications-header-title">
          <h1>Notifications</h1>
          <div>{tally}</div>
        </div>
        <p className="notifications-header-read">Mark all as read</p>
      </div>
      <NotificationCards NotificationData={NotificationData} />
    </main>
  );
}

export default Notifications;
