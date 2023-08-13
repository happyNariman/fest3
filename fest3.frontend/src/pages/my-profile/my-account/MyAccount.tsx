import { Avatar } from '@components/core'
import { Space } from 'antd'
import React from 'react'

export default function MyAccount() {
  return (
    <div className='my-account'>
      <Space >
        <Avatar />
      </Space>
      <div className='my-account__body'>
      </div>
    </div>
  )
}
