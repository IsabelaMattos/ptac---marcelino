'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default function Alterar() {
  return (
    <div>
      <Navbar/>
      <h1><i>Altera algum campo</i></h1>
      <form onSubmit={alterar}>
          <div className="name">
          <label for="">Nome:</label>
          <input id="nome" type="text" placeholder="Nome"/>
          </div><br/>
          <div className="email">
          <label for="">Email:</label>
          <input id="email" type="email" placeholder="email@gmail.com"/>
          </div><br/>
          <div className="password">
          <label for="">Senha:</label>
          <input id="senha" type="text" placeholder="senha"/>
          </div><br/>

          <button className="botao">ENTRAR</button>
        </form>
      <ToastContainer />
    </div>
  );
};
