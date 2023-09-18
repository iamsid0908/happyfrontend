import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const user = useSelector((state)=>state.user.value)
    console.log(user.slot)
  return (
    <div>
      slot:{user.slot}
      
    </div>
  )
}

export default Display