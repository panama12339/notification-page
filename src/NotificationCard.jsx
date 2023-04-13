import FollowCard from "./FollowCard";
import GroupJoinCard from "./GroupJoinCard";
import GroupLeaveCard from "./GroupLeaveCard";
import PictureCommentCard from "./PictureCommentCard";
import PostReactionCard from "./PostReactionCard";

function NotificationCard({ notification }) {
  return (
    <>
      {notification.type === "post-reaction" && (
        <PostReactionCard notification={notification} />
      )}
      {notification.type === "follow" && (
        <FollowCard notification={notification} />
      )}
      {notification.type === "group-join" && (
        <GroupJoinCard notification={notification} />
      )}
      
      {notification.type === "picture-comment" && (
        <PictureCommentCard notification={notification} />
      )}
      {notification.type === "group-leave" && (
        <GroupLeaveCard notification={notification} />
      )}
    </>
  );
}

export default NotificationCard;
