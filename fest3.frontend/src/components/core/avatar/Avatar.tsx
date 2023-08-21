import React from 'react';
import avatar from 'src/assets/avatar-1.svg';
import './Avatar.scss'

export function Avatar() {
    return (
        <div><img className='ava' src={avatar} alt="avatar" /></div>
    )
}
