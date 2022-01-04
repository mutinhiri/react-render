import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
import store from '../redux/store'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes -{props.numOfCake}</h2>
      <button onClick={props.buyCake}> buy cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
