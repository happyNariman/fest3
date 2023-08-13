import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { RightCircleOutlined } from '@ant-design/icons';

import './Login.scss';
import logoWorldId from '@assets/logo-world-id.svg';
import logoMetamask from '@assets/logo-metamask.svg';
import logoTrustWallet from '@assets/logo-trustwallet.svg';
import { useAuth0 } from "@auth0/auth0-react";
function MetamaskLogin() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);


  const connectMetamask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  const getCurrentWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the Metamask button");
        }
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  const addWalletListener = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on("accountsChanged", (accounts: string[]) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        setWalletAddress("");
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };
  //connecting to fest3 contract
  let fest3Contract: any;
  const connectFest3 = async () => {
    const ABI: any[] = [{ "inputs": [{ "internalType": "contract IWorldID", "name": "_worldId", "type": "address" }, { "internalType": "contract IProfile", "name": "_profile", "type": "address" }, { "internalType": "string", "name": "_appId", "type": "string" }, { "internalType": "string", "name": "_actionId", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "InvalidNullifier", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract EventTicket", "name": "eventAddress", "type": "address" }], "name": "EventCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "ProfileMinted", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "eventMetadata", "type": "string" }, { "internalType": "uint256", "name": "totalNumberOfTickets", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "string", "name": "ticketMetadata", "type": "string" }], "name": "createEvent", "outputs": [{ "internalType": "contract EventTicket", "name": "", "type": "address" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "createProfile", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getAllEvents", "outputs": [{ "internalType": "contract EventTicket[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "root", "type": "uint256" }, { "internalType": "uint256", "name": "nullifierHash", "type": "uint256" }, { "internalType": "uint256[8]", "name": "proof", "type": "uint256[8]" }], "name": "verifyAndCreateProfile", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }];
    const contractAddress: string = "0x332D3d7F19CB120E4E3A78E765B1D6f8d5EB2715";
    const provider = new (ethers as any).providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const fest3Contract = new ethers.Contract(contractAddress, ABI, signer);
    console.log(fest3Contract.address);
  }
  let [profileId, setProfileId] = useState<number>(0);
  const createProfile = async () => {
    const mintingProfile = await (connectFest3 as any).createProfile();
    const mintProfile = await mintingProfile.wait();
    setProfileId(mintProfile);
  }
  return (
    <div className='login'>
      <div className='title'>Login</div>
      <div>We should explain here the reputation points and give some recommendation on how to login, etc.</div>

      <div className='wallets'>
        <div className="wallet">
          <img className='icon' src={logoWorldId} alt="World Id" />
          <div className='name'>
            <div>(<button onClick={() => loginWithRedirect()}>World ID</button>)

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
