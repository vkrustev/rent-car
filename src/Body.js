import React from 'react'
import Articles from './Articles'
import Forms from './Forms'
import './Body.css'
function Body() {
  return (
    <div>
    <div className='body'>
        <Articles>
        </Articles>
    </div>
    <div className='body'>
                <Forms></Forms>

    </div>
    </div>
  )
}

export default Body