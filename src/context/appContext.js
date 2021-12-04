import React, { useEffect, useState } from 'react';
import {authentication} from '../firebase/firebase';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(authentication.currentUser);

    useEffect(() => {
        authentication.onAuthStateChanged((newUser) => {
            setUser(newUser)
        })
    }, []);

    return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>
}
AppContext.AppProvider = AppProvider;

export default AppContext;