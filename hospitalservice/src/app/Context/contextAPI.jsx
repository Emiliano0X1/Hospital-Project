"use client";

import React, { useContext, useState, createContext} from "react";

const UserContext = createContext();

export default function UserProvider({children}){

    console.log("UserProvider rendered");

    const [user,setUserRole] = useState('');
    const [nombre,setNombre] = useState('');

    const userRole = (nombre) => {
        setUserRole(nombre);
        setNombre(nombre);
        console.log("userRole actualizado con:", nombre);
    }

    
    
    return(
        <UserContext.Provider value = {{user,nombre,setUserRole, userRole}}>
            {children}
        </UserContext.Provider>
    );

}

export const useUser = () => useContext(UserContext);


