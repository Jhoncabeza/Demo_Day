import { useContext } from 'react';
import Main from '../containers/Main';
import AppContext from '../context/appContext';

 export default function PrivateRoute({ children }) {
  
    const { user } = useContext(AppContext)
    const isLoggedIn = !!user;

    if (isLoggedIn) return children;
    return <Main/>
}
