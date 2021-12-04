import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from '../containers/AboutUs';
import Blogs from '../containers/Blogs';
import Home from '../containers/Home';
import LogIn from '../containers/LogIn';
import Main from '../containers/Main';
import Profile from '../containers/Profile';
import Schedule from '../containers/Schedule';
import SignUp from '../containers/SignUp';
import Tools from '../containers/Tools';
import NotFound from '../containers/NotFound';
import PrivateRoute from './PrivateRoute';
import AppContext from '../context/appContext';


const AppRouter = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (user === null) {
            navigate('/')
        }else{
            navigate('/Home')
        }
    }, [user])

    return (
        <>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/Tools" element={<PrivateRoute><Tools /></PrivateRoute>} />
                <Route path="/Blogs" element={<PrivateRoute><Blogs /></PrivateRoute>} />
                <Route path="/Schedule" element={<PrivateRoute><Schedule /></PrivateRoute>} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter
