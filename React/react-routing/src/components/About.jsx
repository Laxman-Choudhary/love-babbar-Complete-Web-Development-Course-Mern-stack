import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard');
  }
  return (
    <div>About
      <button onClick={handleClick}>
        move to dashboard
      </button>
    </div>
  )
}

export default About