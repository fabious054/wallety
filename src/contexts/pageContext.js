import { createContext,useEffect,useState } from 'react';

export const PageContext = createContext();
PageContext.displayName = 'Page';

export const PageProvider = ({children}) => {
    const [page,setPage] = useState("dashboard");

    return (
        <PageContext.Provider value={{page,setPage}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageProvider;
