import React,{useEffect,useState} from 'react'
import { RightCircleOutlined } from '@ant-design/icons'

import './Login.scss'
import logoWorldId from '@assets/logo-world-id.svg'
import logoMetamask from '@assets/logo-metamask.svg'
import logoTrustWallet from '@assets/logo-trustwallet.svg'

function MetamaskLogin() { 
  const [walletAddress, setWalletAddress] = useState<string>("");
  useEffect(() => {
    getcurrentWallet();
    addWalletListener();}, []); 
    const connectMetamask = async () => {
      try {
        if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Please install Metamask");
        }
      } catch (err: any){
        console.error((err as Error).message);
      }
    };
    
  }


const getCurrentWallet = async () => {
  try {
    if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("Connect to Metamask using the Metamask button");
      }
    } else {
      console.log("Please install Metamask");
    }
  } catch (err: any){
    console.error((err as Error).message);
  }
};
const addWalletListener = async () => {
  try {
    if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please install Metamask");
    }
  } catch (err: any){
    console.error((err as Error).message);
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
              <button onClick={connectMetamask}>{walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(0, 6)}..${walletAddress.substring(38)}`
                : "Connect Wallet"}Metamask</button>{/*The button is here please install it*/}
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


