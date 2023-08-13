import React, { useState, useEffect } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { ethers } from "ethers";
import{FEST3_ADDRESS,ABI} from './constants';//importing the contract address and abi
import './Login.scss';
import logoWorldId from '@assets/logo-world-id.svg';
import logoMetamask from '@assets/logo-metamask.svg';
import logoTrustWallet from '@assets/logo-trustwallet.svg';
import { useAuth0 } from "@auth0/auth0-react";

function MetamaskLogin() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, logout } = useAuth0();
  const {ethereum} = window as any;
  const connectMetamask = async () => {
    if(window.ethereum!=="undefined"){
      const accounts=await ethereum.request({method:'eth_requestAccounts'});
      const account=accounts[0];
      setWalletAddress(account);
    }
  }

  



 
  return (
    <div className='login'>
      <div className='title'>Login</div>
      <div>We should explain here the reputation points and give some recommendation on how to login, etc.</div>

      <div className='wallets'>
        <div className="wallet">
          <img className='icon' src={logoWorldId} alt="World Id" />
          <div className='name'>
            <div >
          
              
              
             <button onClick={() => loginWithRedirect()}>worldid</button> 
            
            </div>
            <div className='description'>Get +3 reputation point</div>
          </div>
          <div className='recommend'>Recommended</div>
          <RightCircleOutlined />
        </div>



        <div className="wallet" onClick={connectMetamask}>
          <img className='icon' src={logoMetamask} alt="Metamask" />
          <div className='name'>
            <div >
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(0, 6)}..${walletAddress.substring(38)}`
                : "Connect Wallet"}
            </div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>
        <div className="wallet">
          <img className='icon' src={logoTrustWallet} alt="TrustWallet" />
          <div className='name'>
            <div>TrustWallet</div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
}


export default function Login() {
  return (
    <div className='login-container'>
      <MetamaskLogin />
    </div>
  );
}
