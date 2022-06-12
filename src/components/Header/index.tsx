import React from 'react'
// import HeaderBottom from './components/HeaderBottom'
import HeaderFlier from './components/HeaderFlier'
import HeaderMiddleBar from './components/HeaderMiddleBar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full mx-auto flex flex-col'>
      <HeaderFlier/>
      <HeaderMiddleBar/>
      {/* <HeaderBottom/> */}
    </div>
  )
}

export default Header