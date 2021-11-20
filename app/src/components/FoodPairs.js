import React from 'react'
import { connect } from 'react-redux'

export const FoodPairs = (props) => {
   console.log(props)
   return (
      <div>
         {/* {props.beers[0].boil_volume.unit} */}
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

export default connect(mapStateToProps, null)(FoodPairs)


// const mapStateToProps = (state) => ({
   
// })

// const mapDispatchToProps = {
   
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FoodPairs)
