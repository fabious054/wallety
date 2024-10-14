import { createContext,useEffect,useState } from 'react';
import { findLocalAndApplyContext } from '../utils/LocalStorage';

export const UserContext = createContext();
UserContext.displayName = 'User';

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        if(user === null){
            findLocalAndApplyContext('user',setUser);
        }
    }
    ,[user]);


    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
