'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default async function Registrar() {
  const registrar = (e) => {
    e.preventDefault();
    toast.sucess('Registrado com sucesso')
  }
  return (
    <div className="register">
      <Navbar/>
      <div className="se registre">
        <h1>Registra-se</h1>
        <form onSubmit={registrar}>
          <div className="name">
          <label for="">Nome</label>
          <input id="nome" type="text" placeholder="Nome"/>
          </div>
          <div className="email">
          <label for="">Email</label>
          <input id="email" type="email" placeholder="email@gmail.com"/>
          </div>
          <div className="password">
          <label for="">Senha</label>
          <input id="senha" type="text" placeholder="senha"/>
          </div>

          <button className="botao">Entrar</button>
        </form>
        <ToastContainer toastStyle={{backgroundColor:"#black"}} />
      </div>
    </div>
  );
};