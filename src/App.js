import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import Card from './components/Card'

const App = () => {
  const [mealData, setMealData] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput
      )
      .then(res => {
        setMealData(res.data.meals)
      })
  }, [searchInput])

  return (
    <div className="app-container">
      <h1 className="app-title">Cooking App</h1>
      <input
        type="text"
        placeholder="Search for a recipe"
        onChange={e => setSearchInput(e.target.value)}
      />
      <div className="meals-container">
        {mealData &&
          mealData
            .slice(0, 24)
            .map(meal => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  )
}

export default App
