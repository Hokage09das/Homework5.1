import "./CommentUserInfo.css";

function CommentUserInfo({ avatarUrl, name }) {
  return (
    <div className='UserInfo'>
      <img
        src={avatarUrl}
        alt='img'
      />
      <div className='UserInfo-name'>{name}</div>
    </div>
  );
}

export default CommentUserInfo;
