// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onLeftClick = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onRightClick = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    const Length = reviewsList.length

    if (count < Length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    const reviewItem = reviewsList[count]

    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-section">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="companyname">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
