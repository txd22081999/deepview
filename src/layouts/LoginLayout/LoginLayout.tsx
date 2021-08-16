import React, { FC } from 'react'
import logo from '../../assets/images/logo.png'

import './LoginLayout.scss'

const LoginLayout: FC = ({ children }) => {
  return (
    <div className='LoginLayout'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='children-container'>{children}</div>
    </div>
  )
}

export default LoginLayout
