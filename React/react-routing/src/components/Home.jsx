import React from 'react'
import { Navigate, useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/about');
  }
  return (
    <div>home page
      <button onClick={handleClick}>Move to About page</button>
    </div>
  )
}

export default Home