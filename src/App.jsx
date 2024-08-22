import { motion } from "framer-motion"
import ShowSeed from "./components/mnemonics/ShowSeed";
import {generateMnemonic} from 'bip39'
import {useState } from "react";
import Wallets from "./components/wallets/Wallets";


function App() {

const [generateMnemonicState,setGenerateMnemonicState] = useState(false);
const [mnemonics,setMnemonics] = useState([]);
const [showSeedState,setShowSeedState] = useState(false);



const handleGenerateMnemonic = () => {
    
  if(generateMnemonicState){
    return;
  }

  const randomWords = generateMnemonic();
  setMnemonics(randomWords);
  setGenerateMnemonicState(true);
  setShowSeedState(true);

}


const handleHideSeed = () => {
  setShowSeedState(false);
}


  return (
    <div className="p-4 sm:p-8">
      <div className="text-white font-bold text-center text-[35px]  ">
        <motion.h1 
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}   
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          ZenWallet
        </motion.h1>
      </div>
      
     { !generateMnemonicState && <div className="flex justify-center mt-20">
         <motion.button 
         className="border p-2 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out" 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}   
           transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
           onClick={handleGenerateMnemonic}
         >
          Generate Mnemonics
         </motion.button> 
      </div>}

      { (generateMnemonicState && showSeedState) && <ShowSeed mnemonics={mnemonics} setMnemonics={setMnemonics} handleHideSeed={handleHideSeed} showSeed={showSeedState}/> }

      { (generateMnemonicState && !showSeedState) && <Wallets mnemonics={mnemonics}/> }

    </div>
  );
}

export default App;