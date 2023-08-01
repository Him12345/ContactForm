import Modle from './Modle'
import {  Formik, Form, Field, ErrorMessage} from 'formik';
import { collection,addDoc, doc, updateDoc } from 'firebase/firestore';
import {db} from '../config/firebase'
import {toast} from "react-toastify"
import * as Yup from "yup";


const contactSchemaValidation=Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required")
});



const AddandUpdate = ({isopen,onClose,isUpdate,contact}) => {

     const senddata= async (contact)=>{
         try {
             const contactRef=collection(db,"Contacts");
                await addDoc(contactRef,contact);
                onClose();
                toast.success("Contact Added Sucessfully")

         } catch (error) {
              console.log(error)
         }

     }

     const upDateContact= async (contact,id)=>{
        try {
            const contactRef=doc(db,"Contacts",id);
               await updateDoc(contactRef,contact);
               onClose();
               toast.success("Contact Updated Sucessfully")

        } catch (error) {
             console.log(error)
        }

    }
    


  return (
    <div>
    <Modle isOpen={isopen} onClose={onClose} >
    
    <Formik 
    validationSchema={contactSchemaValidation}

    initialValues={isUpdate? {
        Name:contact.Name,
        Email:contact.Email
    } : {
        Name:"",
        Email:""
    }}
    onSubmit={(values)=>{
       console.log(values)
       isUpdate? upDateContact(values,contact.id) :  senddata({Name:values.Name,Email:values.Email});
      


    }}
    
    >
    <Form className='flex flex-col gap-4'>
     <div className='flex flex-col gap-1'>
     <label htmlFor="Name">Name:</label>
    <Field name="Name" className="border h-8"/>

    <div className='text-red-500 text-xs '>
    <ErrorMessage name="Name"/>
    </div>
    <label htmlFor="Email">Email:</label>
    <Field name="Email" className="border h-8"/>
    <div className='text-red-500 text-xs '>
    <ErrorMessage name="Email"/>
    </div>
     </div>


     <button className='bg-orange-500 px-3 py-1.5 rounded '>{isUpdate ? "Update": "Add"} Contact</button>
    </Form>

    </Formik>



    </Modle>
      
    </div>
  )
}

export default AddandUpdate
