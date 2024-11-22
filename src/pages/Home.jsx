import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../slice/recipieSlice'


const Home = () => {

  const dispatch = useDispatch()

  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
  // console.log(allRecipes, loading, error);


  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allRecipes?.length / productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allRecipes?.slice(currentPageFirstProductIndex, currentPageLastProductIndex)


  useEffect(() => {
    dispatch(fetchAllRecipes())
  }, [])

  const navigateToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  const navigateToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
      <section className="bg-cover bg-center " style={{ backgroundImage: 'url("https://www.dish-works.com/wp-content/uploads/PeelingBeetsOverheadFacebook.gif")',paddingTop:'140px',height:'70vh' }}>
        <div className="bg-black bg-opacity-50 py-20 px-4 sm:px-8 lg:px-20 flex justify-center items-center">
          <div className="text-center max-w-3xl text-white">
            <h2 style={{color:'white'}} className="text-4xl sm:text-5xl font-bold mb-5">TasteCraft</h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-200">
            "Craving something tasty? At Taste Craft, we’ve got you covered with easy, fun, and mouthwatering recipes! From quick snacks to weekend feasts, we make cooking exciting and approachable for everyone. Dive into our treasure trove of recipes and let the good food vibes begin!"
            </p>
           
          </div>
        </div>
      </section>


      <div id='recipes' style={{ paddingTop: '100px' }} className="container-fluid px-4 auto py-10">
        <h1 className='text-center py-5 text-4xl font-semibold'>Check Our New Recipes</h1>
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'550px'} height={'90px'} className='me-2' src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952t3qnt6tvjrgmb59jp0rz5g3gz0t28kh09e0t5a6n&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
            </div>
            :
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                  allRecipes?.length > 0 ?
                    visibleProductCards?.map(recipe => (
                      <div key={recipe?.id} className='rounded border p-2 shadow-md'>
                        <img src={recipe.image} alt="No image" />
                        <div className='text-center'>
                          <h2 style={{color:'#7F00FF'}} className='text-3xl font-semibold py-2 '>{recipe?.name}</h2>
                          <p className='text-emerald-600 text-xl font-bold'>Cuisine : {recipe?.cuisine}</p>

                          <p className='text-gray-500 text-xl'>Time : {recipe?.prepTimeMinutes} minutes</p>

                          <p className='text-gray-500 text-xl'>Rating : {recipe?.rating}/5</p>

                          <Link style={{backgroundColor:'#7F00FF'}} className=' text-white rounded-md mt-3 p-3 px-8 inline-block font-medium ' to={`recipe/${recipe?.id}`}>View Recipe</Link>
                        </div>
                      </div>
                    ))
                    :
                    <div className='flex font-bold text-red-600 justify-center items-center my-5 text-lg'>
                      No Recipes Found..
                    </div>

                }

              </div>
              <div className="flex justify-center items-center my-10">
                <button
                  style={{backgroundColor:'#7F00FF'}}
                  onClick={navigateToPrevPage}
                  disabled={currentPage === 1}
                  className={` hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-l ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <i className="fa-solid fa-backward"></i> Previous
                </button>

                <span className="mx-5 text-xl font-semibold">
                  Page {currentPage} of {totalPage}
                </span>

                <button
                style={{backgroundColor:'#7F00FF'}}
                  onClick={navigateToNextPage}
                  disabled={currentPage === totalPage}
                  className={`bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-r ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  Next <i className="fa-solid fa-forward"></i>
                </button>
              </div>

            </>
        }
      </div>
    </>
  )
}

export default Home