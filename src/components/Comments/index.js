import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    id: '',
    username: '',
    comment: '',
    isLike: '',
    isTime: '',
    bgColor: '',
    count: 0,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const initialClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      username,
      comment,
      isLike: false,
      isTime: formatDistanceToNow(new Date()),
      bgColor: initialClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      username: '',
      comment: '',
    }))
  }

  onToggleLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onToggleDeleteBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, username, comment, count} = this.state

    return (
      <div className="app-container">
        <div className="comments-form-container">
          <div className="heading-conatiner">
            <h1 className="heading">Comments</h1>
          </div>
          <div className="image-and-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-icon"
            />
            <form className="input-card" onSubmit={this.onSubmitAddComment}>
              <p className="input-title">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={username}
                onChange={this.onChangeUsername}
              />
              <textarea
                rows="8"
                cols="55"
                className="input"
                value={comment}
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button className="addcomment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="separator" />
          <div className="comment-count-title-div">
            <button type="button" className="comment-count-btn">
              {count}
            </button>
            <p className="comment-title">Comments</p>
          </div>
        </div>
        <div className="comments-display-container">
          <ul className="comments-display-lists">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onToggleLikeBtn={this.onToggleLikeBtn}
                onToggleDeleteBtn={this.onToggleDeleteBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
