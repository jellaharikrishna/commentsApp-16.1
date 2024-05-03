import './index.css'

const CommentItem = props => {
  const {commentDetails, onToggleLikeBtn, onToggleDeleteBtn} = props
  const {id, username, comment, isLike, isTime, bgColor} = commentDetails

  const isLikeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikeClassName = isLike ? 'liked-btn' : 'like-btn'

  const onClickLikeBtn = () => {
    onToggleLikeBtn(id)
  }
  const onClickDeleteBtn = () => {
    onToggleDeleteBtn(id)
  }

  return (
    <li className="comment-details">
      <div className="name-time-card">
        <button type="button" className={`firstchar ${bgColor}`}>
          {username[0]}{' '}
        </button>
        <p className="name">{username}</p>
        <time className="time">{isTime}</time>
      </div>
      <p className="comment-description">{comment}</p>
      <div className="footer">
        <div className="like-card">
          <img className="like-img" src={isLikeImgUrl} alt="like" />
          <button
            type="button"
            className={isLikeClassName}
            onClick={onClickLikeBtn}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDeleteBtn}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default CommentItem
