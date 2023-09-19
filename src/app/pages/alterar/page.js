'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default async function Alterar() {
  return (
    <div>
      <Navbar/>
      
      <ToastContainer toastStyle={{backgroundColor: "#black"}} />
    </div>
  );
};
