import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment({ date, text, author }) {
  return (
    <div>
      <CommentWrapper className='comment-first'>
        <CommentUserInfo
          avatarUrl={author.avatarUrl}
          name={author.name}
        />
      </CommentWrapper>

      <CommentWrapper className='comment-text'>
        <div className='Comment-text'>{text}</div>
        <CommentDate date={date} />
      </CommentWrapper>
    </div>
  );
}
export default Comment;
