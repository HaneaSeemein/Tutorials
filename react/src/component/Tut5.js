import React from 'react'

function destructingfunction(props) {
    const {name,heroname}=props
  return (
    <div>Destructing function, {name} aka {heroname}</div>
  )
}
export default destructingfunction