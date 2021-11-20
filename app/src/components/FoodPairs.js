import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getFood } from '../actions/foodAction'

export const FoodPairs = (props) => {
   console.log(props)
   const {getFood} = props

   useEffect(()=>{
      getFood()
   }, [getFood])


   return (
      <div>
we are in foooood
      </div>
   )
}

const mapStateToProps = (state) =>{
   return({
      food: state.foodReducer.food,
      isFetching: state.foodReducer.isFetching,
      error: state.foodReducer.error
   })
}

export default connect(mapStateToProps, {getFood})(FoodPairs)


// const mapStateToProps = (state) => ({
   
// })

// const mapDispatchToProps = {
   
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FoodPairs)
