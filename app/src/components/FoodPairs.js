import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getFood } from '../actions/foodAction'
import { getBeers } from '../actions/beerAction'

export const FoodPairs = ({ getFood, food, isFetching, error }) => {

   useEffect(()=>{
      getFood()
      // getBeers()
   }, [])

   // console.log(beer)
   console.log(food)

   return (
      <div>
         {/* {food.map((i) => i )}  */}
         {/* {
            return <div> {this.food} </div>
         }
            )} */}
{`we are in foooood ${food.map((i, id) => {
   return <div key={id}> ${i}</div>
})}`}
      </div>
   )
}

const mapStateToProps = (state) =>{
   return({
      food: state.foodReducer.food,
      isFetching: state.foodReducer.isFetching,
      error: state.foodReducer.error,
      // beer: state.beersReducer.beers,
   })
}

export default connect(mapStateToProps, { getFood, getBeers })(FoodPairs)


// const mapStateToProps = (state) => ({
   
// })

// const mapDispatchToProps = {
   
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FoodPairs)
