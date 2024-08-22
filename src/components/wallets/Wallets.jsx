/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from "framer-motion"
import { derivePath } from 'ed25519-hd-key'
import {mnemonicToSeedSync} from 'bip39'
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import Wallet from '../wallet/Wallet';
import bs58 from 'bs58';


const Wallets = ({mnemonics}) => {

const[myWallets,setMyWallets] = useState([]);
const[walletCount,setWalletCount] = useState(0);

function handleGenerateSolanaWallet(){

const path =  `m/44'/501'/${walletCount}'/0'`;
const seed = mnemonicToSeedSync(mnemonics).toString('hex') 
const derivedSeed = derivePath(path,seed).key;

const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
const keys = Keypair.fromSecretKey(secret);
const publicKey = keys.publicKey.toBase58();
const secretKey = bs58.encode(keys.secretKey);

setMyWallets([...myWallets, {publicKey,secretKey}]);
setWalletCount((prev)=>prev+1);
}    

  return (
  <div>
    <div className="flex justify-center mt-20">
        <motion.button 
            className="border p-2 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}   
            transition={{ duration: 0.5, ease: "ease" }}
            onClick={handleGenerateSolanaWallet}
        >
           Generate Solana Wallet
         </motion.button> 
   </div>

   <div className='mt-20'>
    <h1 className='text-[22px] py-4'>Your Wallets</h1>
    {myWallets.length ? <h2 className='font-semibold p-2'>SOL</h2> : ''}
    <div className='w-full overflow-x-auto flex gap-2'>
    {
      myWallets?.map((item,index)=>(
        <Wallet key={index} keys={item}/>
      ))
    }
    </div>
   </div>

   </div>

  )
}

export default Wallets