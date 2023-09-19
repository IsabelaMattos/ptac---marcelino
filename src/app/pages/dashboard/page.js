import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import  Navbar from "../../componentes/Navbar";

export default async function Dashboard() {
   
    const users = getUsers();
    return (
        <div>
            <div className="dash">
             <Navbar/>
         </div>
             <div className="classlist">
                <h1 className="dash1">Usuários</h1>
                <div className="listuser">
                   {users?.map((user, index) =>
                      <p key={index}>
                             {user.name} 
                      </p>          
            )} 
        </div>
    </div>
  </div>    
   );
};