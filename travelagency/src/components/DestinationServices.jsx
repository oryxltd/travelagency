import React from 'react'

const DestinationServices = ({icon: Icon,heading, description}) => {
  return (
    <div className='destinationServices_container'>
        <div className="destinationServices_logo">
          <Icon className="destinationServices_icon" />
        </div>
        <div className="destinationServices_content">
            <h1>{heading}</h1>
            <p>{description}</p> 
        </div>
    </div>
  )
}

export default DestinationServices;