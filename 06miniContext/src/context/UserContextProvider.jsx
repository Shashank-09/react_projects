import React from "react";
import UseContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState()
    return (
        <>
         <UseContext.Provider value={{user ,setUser}}>
            {children}
         </UseContext.Provider>
        </>
    )
}

export default UserContextProvider;