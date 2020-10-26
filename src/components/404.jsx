import React from 'react'
import pageNotFound from '../assets/images/404.png'
import './styles/404.scss'

const notFount = () => {
  return (
    <div className="not-found">
      <h1>404 error page</h1>
      <img src={pageNotFound} alt="Page not found"/>
      <h2>Uh-oh! Page not found</h2>
    </div>
  )
}

export default notFount
