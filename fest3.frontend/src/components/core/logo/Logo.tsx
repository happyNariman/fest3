import React from 'react';
import logo from '@assets/logo.svg';
import './Logo.scss';

export function Logo(props: { hideAnimation?: boolean, style?: React.CSSProperties }) {
    return (
        <div className='logo' style={props.style}>
            {props.hideAnimation ? null :
                <div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                </div>}
            <img className='logo__img' src={logo} alt='logo' />
        </div>
    )
}
