import React from 'react'

function inherited(props) {
  return (
    <div>
        <h1>Hey</h1>
        <button onClick={()=>props.clicked("from child")}>inherited</button>
    </div>
  )
}
export default inherited