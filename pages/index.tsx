import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import News from '../components/News'

const HomePage: React.FC = () => {
  const pageSize = 10
  const [progress, setProgress] = useState(0)

  return (
    <>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <News setProgress={setProgress} key="general" pageSize={pageSize} />
    </>
  )
}

export default HomePage
