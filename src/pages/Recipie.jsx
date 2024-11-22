import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAllRecipes } from '../slice/recipieSlice'


const Recipe = () => {
  const {id}=useParams()
  // console.log(id);


  const dispatch=useDispatch()
  const [recipe,setRecipe]=useState({})

  useEffect(()=>{
    dispatch(fetchAllRecipes())
    if(sessionStorage.getItem("allRecipes"))
      {
        const allRecipes=JSON.parse(sessionStorage.getItem("allRecipes"))
        setRecipe(allRecipes?.find(item=>item.id==id))
      }
  },[])
  
  // console.log(recipe);
  
  return (
    <>
      <Header />
      <div style={{paddingTop:'100px'}} className="container mx-auto px-4 py-10 lg:px-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img className="w-full h-auto rounded-lg mb-5 md:mb-0" src={recipe?.image} alt="Recipe Image" />
          </div>
          <div className="md:w-1/2 md:pl-5">
            <h1 className="text-4xl font-bold mb-3">{recipe?.name}</h1>
            <div className="text-xl font-semibold mb-5 text-emerald-500">
              Ingredients: {recipe?.ingredients}
            </div>
            <div>
              <p className="text-xl font-semibold mb-1">Meal Type: {recipe?.mealType}</p>
              <p className="text-xl font-semibold mb-1">Cuisine: {recipe?.cuisine}</p>
              <p className="text-xl font-semibold mb-1">Cooking Time: {recipe?.cookTimeMinutes} minutes</p>
              <p className="text-xl font-semibold mb-1">Servings: {recipe?.servings}</p>
            </div>
            <p style={{color:'#7F00FF'}} className="text-xl font-semibold mt-4">
              Instructions: {recipe?.instructions}
            </p>
          </div>
        </div>
      </div>


      
    </>
  )
}

export default Recipe