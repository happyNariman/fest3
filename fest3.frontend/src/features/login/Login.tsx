import React, { useState, useEffect } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { ethers } from "ethers";
import { FEST3_ADDRESS, ABI } from './constants';//importing the contract address and abi
import './Login.scss';
import logoWorldId from '@assets/logo-world-id.svg';
import logoMetamask from '@assets/logo-metamask.svg';
import logoTrustWallet from '@assets/logo-trustwallet.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { IDKitWidget } from '@worldcoin/idkit';

function MetamaskLogin() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, logout } = useAuth0();
  const { ethereum } = window as any;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setWalletAddress(account);
    }
  }
  let contract = new ethers.Contract(FEST3_ADDRESS, ABI, ethereum);
  const connectFest3 = async () => {
    const Address = FEST3_ADDRESS
    const abi = ABI
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    await window.ethereum.enable();
    const contract = new ethers.Contract(Address, abi, signer);
    console.log("hi")
  }
  connectFest3()
  const createProfile = async () => {
    const profile = await contract.createProfile()
  }


  const worldIdOnSuccess = (e: any) => {
    console.log('!!! IDKitWidget onSuccess', e);
    alert('World ID connected successfully!');
  };

  const worldIdHandleVerify = (e: any) => {
    console.log('!!! IDKitWidget handleVerify', e);
  };



  return (
    <div className='login'>
      <div className='title'>Login</div>
      <div style={{ fontSize: '14px' }}>Signing with World ID gives you exclusive benefits, discounts, and extra reputational points for a better NFT to be minted, it also allows you to have a seamless login experience that's why we recommend it.</div>

      <div className='wallets'>

        <IDKitWidget
          app_id="app_staging_05230913fab7e8ffd8f378ba7070975b" // obtained from the Developer Portal
          action="verify" // this is your action name from the Developer Portal
          onSuccess={worldIdOnSuccess} // callback when the modal is closed
          handleVerify={worldIdHandleVerify} // optional callback when the proof is received
          // redential_types={['orb', 'phone']} 
          enableTelemetry // optional, defaults to false
        >
          {({ open }) => (
            <div className="wallet" onClick={open}>
              <img className='icon' src={logoWorldId} alt="World Id" />
              <div className='name'>
                <div>World ID</div>
                <div className='description'>Get +3 reputation point</div>
              </div>
              <div className='recommend'>Recommended</div>
              <RightCircleOutlined />
            </div>
          )}
        </IDKitWidget>

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
