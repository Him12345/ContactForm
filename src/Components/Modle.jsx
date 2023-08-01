import { AiOutlineClose } from "react-icons/ai"

const Modle = ({onClose,isOpen,children}) => {
  return (
      
    <div className="">


      {isOpen ? <div  className="backdrop-blur h-screen w-screen absolute top-0 z-40"><div className=" m-auto relative z-50 min-h-[200px] bg-white  max-w-[80%] p-4 rounded">
      
      <div className="flex justify-end  ">
          <AiOutlineClose onClick={onClose} className="text-2xl "/>
      </div>

      {children}
   </div>
   </div> : null}



    </div>



  
  );
};

export default Modle
