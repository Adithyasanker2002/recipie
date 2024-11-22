import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <div style={{ height: '300px',width:'100%',backgroundColor:'#7F00FF' }} className=" container-fluid flex flex-col  bottom-0">
      <div className="flex text-white justify-between w-full p-5">
        
        <div style={{ width: '400px' }}>
          <Link className="text-white text-2xl font-bold" to="/">
            <i className="fa-solid fa-utensils me-1"></i> Taste Craft
          </Link>
          <p className="mt-3">
            Discover, cook, and share amazing recipes from around the world with TasteCraft. Designed and maintained by Recipie lover, with support from our wonderful contributors.
          </p>
          <p>Code licensed by TasteCraft, docs CC BY 3.0</p>
          <p>Currently v1.0.0</p>
        </div>
    
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-2">Explore</h1>
          <Link to="/">Home</Link>
          <Link to="/recipes">All Recipes</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
    
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-2">Resources</h1>
          <Link to="https://react.dev/" target="_blank">React</Link>
          <Link to="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>
          <Link to="https://reactrouter.com/" target="_blank">React Router</Link>
        </div>
    
        <div className="flex flex-col">
          <h5 className="text-xl font-bold mb-2">Subscribe for Updates</h5>
          <div className="flex">
            <input
              placeholder="Enter your email here"
              type="text"
              className="text-black rounded p-2 w-full"
            />
            <button style={{ width: '30px' }} className="rounded bg-orange-500 ms-3 p-2">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons flex justify-between mt-3">
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-white text-center mb-3">
        &copy; 2024 TasteCraft. All rights reserved. Built with love by Recipie lover.
      </p>
    </div>
    </>
  )
}

export default Footer