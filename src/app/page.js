'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, toast } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha, verifique por favor!");
      }
      push('/pages/dashboard');
    } catch {
      toast.error("erro");
    }
  };

  return (
    <div className="login">
      <div className="login do usuario">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <div className="register">
          <label for="">Email</label>
          <input type="email" placeholder="isabela@gmail.com"
          onChange={(e) => { setUser({...user, email: e.target.value }) }}
        />

        </div>
        <div className="register">
          <label for="">Senha</label>
          <input type="password" placeholder="senha"
          onChange={(e) => { setUser({...user, password: e.target.value }) }}
        />

        </div>  

        <button className="button">ENTRAR</button>
        </form>
        <ToastContainer />
        </div>
        </div>
  )
}
