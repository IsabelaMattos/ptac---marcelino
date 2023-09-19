'use client'

import { useRouter } from "next/navigation";
import "../../styles/login.css";
import Cookies from "js-cookie";
import '../../styles/dashboard.css';

export default function Navbar() {
    const { push, refresh } = useRouter();
    const handlerRemoveCookies = async (e) => {
        e.preventDefault();
        Cookies.remove('token');
        localStorage.removeItem('name');
        refresh('/')
    }

    return(
    <div className="logo" id="logo">

    <a href="/">   <div className="links">Logo</div>     </a>

    <a href="/pages/registrar"><div className="links">Registrar</div></a>

    <a href="/pages/alterar"><div className="links">Alterar</div></a>

    <a href="#" className="open"><div className="links"><button className="open" onClick={handlerRemoveCookies}>Sair</button></div></a>
</div>
    )
}