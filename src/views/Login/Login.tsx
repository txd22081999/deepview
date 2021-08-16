import React from 'react'
import LoginLayout from '../../layouts/LoginLayout'

import './Login.scss'

const Login = () => {
  return (
    <LoginLayout>
      <div className='Login'>
        <main>
          <div className='main-container'>
            <h1 className='heading'>Đăng nhập</h1>

            <div className='btn-container'>
              <button>Đăng nhập bằng Facebook</button>
              <button>Đăng nhập bằng Gmail</button>
              <button>Đăng nhập bằng email</button>
            </div>
          </div>

          <div className='register-container'>
            <p className='ask'>Bạn chưa có tài khoản?</p>
            <a className='register-btn' href='#adas'>
              Đăng ký
            </a>
          </div>
        </main>
      </div>
    </LoginLayout>
  )
}

export default Login
