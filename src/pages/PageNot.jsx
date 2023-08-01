import React from 'react'
import { Link } from 'react-router-dom'

 function PageNot() {
  return (
    
    <div className="pagenot">
      <div className="pagenot_title">
        <h1>Page Not Found..!</h1>
        <button className="pagenot_btn">
          <Link className='pagenot_home' to='/'>
          <h1 className='pagenot_home'>Home</h1>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PageNot