import React, { useState } from 'react'
import { motion } from "framer-motion"
import { BiHide } from "react-icons/bi";

const ShowSeed = ({mnemonics,setMnemonics,handleHideSeed}) => {




const handleSeedSaved = (e) => {

    const state = e.target.checked;
    if(!state){
        return;
    }
  handleHideSeed()

}


 return (
    <motion.div className='p-12 flex items-center flex-col '   
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}   
      transition={{ duration: 0.5, ease: "ease", delay: 0.2 }}>
    <div className='group relative min-w-[100%] bg-[#1F2938] overflow-hidden rounded-md p-4 grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:min-w-[60%] '>
          {
             mnemonics.split(" ")?.map((item,index)=>{
                return (
                    <div key={index} className='p-2 border rounded-md w-full text-center '>
                        {item}
                    </div>
                )
            })
          }
        <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-lg opacity-100 group-hover:opacity-0  transition-opacity duration-300 '>
            <BiHide size={50} />  
        </div>
       </div>
     <div className='flex gap-2 items-center mt-5 select-none'>
        <input id="seed_saved" type="checkbox" onClick={handleSeedSaved}/>
        <label htmlFor="seed_saved" className='cursor-pointer'>I have saved my seed phrase securely.</label>
     </div>
    </motion.div>
  )
}

export default ShowSeed