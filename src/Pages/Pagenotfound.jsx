
import { Button } from '@mui/material'
import React from 'react'

function Pagenotfound() {
  return (
    <div>
      <div
      className="d-flex flex-column justify-content-center align-items-center bg-light text-center" 
    >
      <img src="https://assets-v2.lottiefiles.com/a/f0470cd6-117f-11ee-a4ed-1b2d7fb6aaaf/i83iUdPISg.gif" alt="404" height={'400px'} width={'500px'} style={{paddingTop:'20px'}}  />
      <h2 className="mb-3 text-danger fw-bolder">Page Not Found</h2>
      <p className="mb-2 fs-5 ">
        We’re sorry, but the page you requested could not be found.
      </p>
      <p className="mb-2 fs-5 ">It may have been removed, renamed, or is temporarily unavailable.</p>
      <p className="mb-4 fs-5 ">Please check the URL or return to the home page.</p>
      <Button
        variant="contained"
        color="primary"
        href="/"
        className="mt-2 mb-3"
      >
        Go Back Home
      </Button>
     
    </div>
    </div>
  )
}

export default Pagenotfound




