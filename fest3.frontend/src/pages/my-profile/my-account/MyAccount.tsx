import { Avatar } from '@components/core'
import './MyAccount.scss'
import { Space } from 'antd'
import React from 'react'

export default function MyAccount() {
  return (
    <div className='my-account'>
      <div className='my-accout-avatar' >
        <Space size='large'>
          <Avatar />
          <button className='avatar-button'>You have <span className='bold-text'>4 points</span></button>
        </Space>
      </div>
      <div className='my-account__body'>
        <div className='my-account-certificate'>
          <img src="src/assets/certificate.svg" alt="certificate" />
          <div className='account-certificate'></div>
          <div className='account-certificate'></div>
          <div className='account-certificate'></div>
          <div className='account-certificate'></div>
        </div>
        <div className='payment-box-wrap'>
          <div className='payment-boxs'>

            <div className='box-item'>
              <div className='items'>
                <img src="src/assets/logo-world-id.svg" alt="logo" />
                <p>World ID Verification</p>
                <div className='item-right-verified'>Verified</div>
              </div>
            </div>

            <div className='box-item'>
              <h4>My Fest3 AAddres</h4>
              <div className='items'>
                <p>0x43Cf671c23e2Afe3E1c78AA080261BEbed54c77f</p>
                <div className='item-right'><a href="">Copy</a></div>
              </div>
            </div>

            <div className='box-item'>
              <h4>Logged With</h4>

              <div className='items'>
                <img src="src/assets/logo-world-id.svg" alt="logo" />
                <p>World ID</p>
                <div className='item-right'><a href="">Sign Out</a></div>
              </div>
            </div>

            <div className='box-connected'>
              <h3>Connected payment methods</h3>
              <button>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
