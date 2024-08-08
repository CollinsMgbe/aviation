import React from 'react'

const ErrorPage = () => {
  return (
    <div className='errorpg d-flex justify-content-center align-items-center' style={{ height:"100vh"}}>
      <div>
      <h1 className='my-5'>404 ERROR<br/>Page Not Found</h1>
      <p>Sorry, the page you requested could not be found</p>
      <a href='/'>Return to Homepage</a>
      </div>
    </div>
  )
}

export default ErrorPage
