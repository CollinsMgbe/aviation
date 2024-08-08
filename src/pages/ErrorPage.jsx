import React from 'react'

const ErrorPage = () => {
  return (
    <div className='errorpg'>
      <h1>404 ERROR<br/>Page Not Found</h1>
      <p>Sorry, the page you requested could not be found</p>
      <a href='/'>Return to Homepage</a>
    </div>
  )
}

export default ErrorPage
