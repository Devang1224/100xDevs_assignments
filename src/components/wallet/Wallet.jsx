/* eslint-disable react/prop-types */
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Wallet = ({keys}) => {

  const [hidePrivateKey,setHidePrivateKey] = useState(true);

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

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg  bg-[#09090B] w-[500px] ">
      <h1 className="text-[20px] font-semibold">SOL</h1>
      <div>
        <h1 className="text-[18px] font-semibold">Public Key: </h1>
        <div className="flex items-center gap-2">
           <p className="rounded-md bg-gray-600 p-2 text-[12px]">{keys.publicKey}</p>
           <FaCopy size={15} className="cursor-pointer" onClick={()=>copyToClipboard(keys.publicKey)}/>
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold">Private Key: </h1>
        <div className="flex items-center gap-2">
        <p className="rounded-md bg-gray-600 p-2 text-[12px]  w-[78%] overflow-hidden">
          { hidePrivateKey ? 
            '•'.repeat(keys.secretKey.length) :
            keys.secretKey
          }
        </p>

        {
          hidePrivateKey ? <MdRemoveRedEye size={20} className="cursor-pointer" onClick={()=>handleHidePrivateKey(false)}/> : <IoMdEyeOff size={20} className="cursor-pointer" onClick={()=>handleHidePrivateKey(true)}/>
        }
           <FaCopy size={15} className="cursor-pointer " onClick={()=>copyToClipboard(keys.secretKey)}/>

        </div>
      
      </div>
    </div>
  )
}

export default Wallet