function MessageCard({ notification }) {
  return (
    <div className={`notifications-card ${!notification.read && "unread"}`}>
      <img
        className="notifications-card-img"
        src={notification.image}
        alt="profile"
      />
      <div className="notifications-card-content">
        <div className="notifications-card-message">
          <p className="notifications-card-message-text">
          </p>
        </div>
        <p className="notifications-card-message-time">
          {notification.timestamp}
        </p>
        <div className="notifications-card-message-private">
          <p>{notification.message}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
