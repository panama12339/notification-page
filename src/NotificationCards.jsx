import NotificationCard from "./NotificationCard";

function NotificationCards({ NotificationData }) {
  return (
    <div className="notifications-cards">
      {NotificationData?.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationCards;
