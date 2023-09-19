'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default function Alterar() {
  return (
    <div>
      <Navbar/>
      <h1><i>Altera algum campo</i></h1>
      <ToastContainer />
    </div>
  );
};
