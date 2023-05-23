import React, { useRef } from 'react'

const Card = ({ meal }) => {
  //   const recipeInstructionsRef = useRef(null)

  //   const handleMouseEnter = () => {
  //     recipeInstructionsRef.current.style.height = 'auto'
  //   }

  //   const handleMouseLeave = () => {
  //     recipeInstructionsRef.current.style.height = '10em'
  //     recipeInstructionsRef.current.scrollTop = 0
  //   }

  return (
    <div className="card-container">
      <h1>{meal.strMeal}</h1>
      <p className="origin">{meal.strArea}</p>
      <img src={meal.strMealThumb} alt={'Photo of ' + meal.strMeal} />
      <p
        className="instructions"
        // ref={recipeInstructionsRef}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {meal.strInstructions}
      </p>
    </div>
  )
}

export default Card
