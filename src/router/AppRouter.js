import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs   from '../containers/AboutUs';
import Blogs     from '../containers/Blogs';
import Home      from '../containers/Home';
import Main      from '../containers/Main';
import Profile   from '../containers/Profile';
import Schedule  from '../containers/Schedule';
import SignUp    from '../containers/SignUp';
import LogIn     from '../containers/LogIn';
import Tools     from '../containers/Tools';
import NotFound  from '../containers/NotFound';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/"         element={<Main />}/>
                    <Route path="/SignUp"   element={<SignUp />}/>
                    <Route path="/LogIn"    element={<LogIn />}/>
                    <Route path="/Home"     element={<Home />} />
                    <Route path="/Profile"  element={<Profile />} />
                    <Route path="/Tools"    element={<Tools />} />
                    <Route path="/Blogs"    element={<Blogs />} />
                    <Route path="/Schedule" element={<Schedule />} />
                    <Route path="/AboutUs"  element={<AboutUs />} />
                    <Route path="*"         element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
