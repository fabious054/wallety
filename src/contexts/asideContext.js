import { createContext,useEffect,useState } from 'react';

export const AsideContext = createContext();
AsideContext.displayName = 'Menu';

export const AsideProvider = ({children}) => {
    const [menu,setMenu] = useState("opened");

    return (
        <AsideContext.Provider value={{menu,setMenu}}>
            {children}
        </AsideContext.Provider>
    )
}

export default AsideProvider;
