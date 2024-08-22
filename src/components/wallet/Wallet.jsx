/* eslint-disable react/prop-types */
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

const Wallet = ({keys}) => {

  const [hidePrivateKey,setHidePrivateKey] = useState(true);
  const [secretKey,setSecretKey] = useState('')



  useEffect(()=>{
     formatSecretKey(keys.secretKey);
  },[])

  function handleHidePrivateKey(state){
    setHidePrivateKey(state)
  }

  const copyToClipboard = (key) => {
    navigator.clipboard.writeText(key).then(() => {
      alert('key is copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const formatSecretKey = (key) => {
    const start = key.substring(0, 15);  
    const end = key.substring(key.length - 15); 
    setSecretKey(`${start}...........................................${end}`); 
  };


  return (
    <div className="flex flex-col gap-4 p-2 sm:p-4 rounded-lg  bg-[#09090B] w-max-[450px] shadow-gold-glow">
      <div className="flex gap-2 flex-row">
      <img src="./assets/Solana_logo.png" width={30} height={20} alt="solana icon"/>  
      <h1 className="text-[20px] font-semibold">SOL</h1>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold">Public Key: </h1>
        <div className="flex items-center gap-2 w-full">
           <p className="rounded-md bg-gray-600 p-2 text-[10px] sm:text-[12px]">{keys.publicKey}</p>
           <FaCopy size={15} className="cursor-pointer" onClick={()=>copyToClipboard(keys.publicKey)}/>
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold">Private Key: </h1>
        <div className="flex items-center gap-2 w-full">
          <p className="rounded-md bg-gray-600 p-2  text-[10px] sm:text-[12px] w-full ">
            { secretKey }
          </p>
           <FaCopy size={15} className="cursor-pointer " onClick={()=>copyToClipboard(keys.secretKey)}/>

        </div>
      
      </div>
    </div>
  )
}

export default Wallet