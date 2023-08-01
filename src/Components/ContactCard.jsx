
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { deleteDoc ,doc} from "firebase/firestore";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import Usedisclose from "../hooks/Usedisclose";
import { toast } from "react-toastify";







const ContactCard =({contact}) => {

  const {onOpen,onClose,isopen} = Usedisclose();


 
  const deleteContact= async (id)=>{
      try {
        await deleteDoc(doc(db,"Contacts",id))
        toast.success("Contact Deleted Sucessfully")

      } catch (error) {
        console.log(error)
      }
  }
    return (

      <>
         <div key={contact.id} className="bg-white flex justify-between items-center p-2 rounded-lg">


<div className="flex gap-2">
  <HiOutlineUserCircle className="text-orange-500 text-4xl mr-1" />

  <div className="">
    <h2 className="font-medium">{contact.Name}</h2>
    <p className="text-sm">{contact.Email}</p>
  </div>

</div>

<div className=" flex text-xl ">
  <FaEdit onClick={onOpen} className="cursor-pointer"/>
  <FaTrash onClick={()=>deleteContact(contact.id)} className="text-orange-500 ml-1 cursor-pointer"/>
</div>



</div>

       <AddandUpdate contact={contact} isUpdate isopen={isopen} onClose={onClose}/>


    


      </>
       

      );
}

export default ContactCard
