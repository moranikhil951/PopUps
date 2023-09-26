// Write your code here

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="responsive-not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found"
      />
      <h1 className="heading">Lost your way?</h1>
      <p className="paragrah">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
