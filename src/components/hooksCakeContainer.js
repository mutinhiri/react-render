import React from 'react'
import { useSelector } from 'react-redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
      <h2>number of cakes { numOfCakes}</h2>
      <button>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
