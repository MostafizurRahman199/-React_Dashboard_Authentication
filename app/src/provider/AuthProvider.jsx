import { createContext, useState } from "react";
import jwtDecode from 'jwt-decode';
import {useCookies} from 'react-cookie';

export const AuthContext = createContext();
export default function AuthProvider({childern}){

const [user, setUser] = useState(null);
const [token, setToken] = useState(null);
const [cookies, setCookie, removeCookie] = useCookies();



// const storeToken = (token)=>{
//     setUser(decodeToken);
// }

const login =(tokenStr)=>{
    if(tokenStr){
        setToken(token);
        const {exp} = jwtDecode(tokenStr);

       if(exp){
        setCookie("jwt", tokenStr, {
            path: "/",
            maxAge: exp, 
            sameSite: true, 
        });
       }

       return;
     
    }

    logout();
};

const logout = ()=>{
    setToken(null);
    setUser(null);
    removeCookie("jwt", {path:"/"});
}


  return <AuthContext.Provider value={{
   user,
   token,
   login,
   logout,
  }}>
    {childern}
  </AuthContext.Provider>
}