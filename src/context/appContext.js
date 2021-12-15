import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import {authentication} from '../firebase/firebase';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(authentication.currentUser);
    onAuthStateChanged( authentication,newUser => setUser(newUser));
    
    return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>
}
AppContext.AppProvider  = AppProvider;

export default AppContext;