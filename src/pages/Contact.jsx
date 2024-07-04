import React from 'react'
import ContactPage from '../components/ContactPage'
import GoogleMap from '../components/GoogleMap'

const Contact = () => {
  return (
    <div className='mt-32 '>
      <GoogleMap />
      <ContactPage />
    </div>
  )
}

export default Contact
