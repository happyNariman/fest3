import React,{useEffect,useState} from 'react'
import { RightCircleOutlined } from '@ant-design/icons'

import './Login.scss'
import logoWorldId from '@assets/logo-world-id.svg'
import logoMetamask from '@assets/logo-metamask.svg'
import logoTrustWallet from '@assets/logo-trustwallet.svg'
function MetamaskLogin() { 
  const connectMetamask = async () => {
    if(typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask!="undefined"){
      try{
        /*Metamask is installed*/
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts[0]);

      }catch(err){
        console.error(err.message);
      };
    }
    else{
      /*Metamask is not installed*/
      console.log("Please install Metamask");
  }
}




      
  

  return (
    <div className='login'>
      <div className='title'>Login</div>
      <div>We should explain here the reputation points and give some recommendation on how to login, etc.</div>

      <div className='wallets'>
        <div className="wallet">
          <img className='icon' src={logoWorldId} />
          <div className='name'>
            <div>World Id</div>
            <div className='description'>Get +3 reputation point</div>
          </div>
          <div className='recommend'>Recommended</div>
          <RightCircleOutlined />
        </div>

        <div className="wallet">
          <img className='icon' src={logoMetamask} />
          <div className='name'>
            <div>
              <button onClick={connectMetamask}>Metamask</button>//style this one
            </div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>

        <div className="wallet">
          <img className='icon' src={logoTrustWallet} />
          <div className='name'>
            <div>TrustWallet</div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  )
}
export default function Login() {}


