import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getFood } from '../actions/foodAction'

export const FoodPairs = ({ getFood, food, isFetching, error }) => {

   useEffect(()=>{
      getFood()
   }, [getFood])


   return (
      <div>
         {food.map(() => {
            return <div> {this.food} </div>
         }
            )}
{`we are in foooood ${food}`}
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
