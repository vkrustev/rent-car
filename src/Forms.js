import React from 'react'
import './Forms.css'
function Forms() {
  return (
    <div className='forms'>
        <div className='formss'>
        <h1>Submit Message</h1>
        <form>
            <div className='name'>
        <input placeholder="Name" className='name-input' type="text" required/>
        </div>
        <div className='message'>
        
        <textarea  placeholder='Message'
 className='message-text' required/>
        </div>
        <div className='agree'>
        <label className='label-agree'> Did you agree with our terms?</label>
        <select className='select-agree'>
            <option value="YES">YES</option>
            <option value="No">No</option>
        </select>
        </div>
        <button className='send'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Forms