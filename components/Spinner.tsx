import React from 'react'
import loading from './loading.gif'
import Image from 'next/image'

const Spinner: React.FC = () => {
  return (
    <div className="text-center">
      <Image
        className="my-3"
        src={loading}
        alt="Loading..."
        unoptimized={true}
      />
    </div>
  )
}

export default Spinner
