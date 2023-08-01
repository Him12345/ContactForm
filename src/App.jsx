import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./Components/ContactCard";
import AddandUpdate from "./Components/AddandUpdate";
import Usedisclose from "./hooks/Usedisclose";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./Components/NotFoundContact";


const App = () => {
  const [contacts, setcontact] = useState([]);
  const {onOpen,onClose,isopen} = Usedisclose();


  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactRef = collection(db, "Contacts");

        onSnapshot(contactRef,(Snapshot)=>{
          const contactLists = Snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
  
          setcontact(contactLists);
          return contactLists
        })
       
      } catch (error) {
        console.log(error);
      }
    };

    getcontacts();
  }, []);


  const filterContacts=(e)=>{

    const value=e.target.value;
    const contactRef = collection(db, "Contacts");

    onSnapshot(contactRef,(Snapshot)=>{
      
      const contactLists = Snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });


      const filteredContacts=contactLists.filter((contact)=>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );

      setcontact(filteredContacts);

      return filteredContacts;
    });

    }
  

return (

    <>
      <div className="mx-auto max-w-[370px] p-4">
      <Navbar />

      <div className="flex gap-2">
        <div className="flex items-center flex-grow">
          <FiSearch className=" ml-1 text-white text-3xl absolute " />

          <input
          onChange={filterContacts}
            type="text"
            className="h-10 rounded-md border border-white bg-transparent flex-grow text-white pl-9 outline-none"
          />
        </div>

        <AiOutlinePlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
      </div>

      <div className="mt-4 flex flex-col gap-3">

        {contacts.length === 0 ? <NotFoundContact/>:(contacts.map((contacts) => {
           return (<ContactCard  contact={contacts} key={contacts.id} />)
        })
        
        
        
        )}
      </div>




      
    </div>
   <AddandUpdate onClose={onClose} isopen={isopen}/>
   <ToastContainer position="bottom-center"/>
    </>
    
  );
};

export default App;
