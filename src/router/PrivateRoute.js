import { useContext } from 'react';
import SignUp from '../containers/SignUp';
import AppContext from '../context/appContext';

 export default function PrivateRoute({ children }) {
    // Si el usuario esta autenticado
    const { user } = useContext(AppContext)
    const isLoggedIn = !!user;

    if (isLoggedIn) return children;
    return <SignUp/>
}
