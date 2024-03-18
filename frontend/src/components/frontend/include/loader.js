import React from 'react'

const Loader = () => {
  return (
    <div className="boxes-bg"  style={{ maxHeight: '50px' }} >
      <img style={{ maxHeight: '50px' }} src={process.env.PUBLIC_URL + '/assets/loader.svg'} />
    </div> 
  )
}

export default Loader