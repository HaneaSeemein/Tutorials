import React from 'react'

function functionclick() {
    function click(){
        alert('clicked')
    }
  return (
    <div>
        <button onClick={click()}>function call</button>
        <button onClick={click}>without function call</button>
    </div>
  )
}
export default functionclick