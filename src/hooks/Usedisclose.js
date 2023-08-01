import { useState } from "react";

const Usedisclose = () => {


    const [isopen, setopen] = useState(false);


    const onOpen=()=>{
      setopen(true);
  
    }
  
    const onClose=()=>{
      setopen(false);
  
    }
  return {onOpen,onClose,isopen}
}

export default Usedisclose
