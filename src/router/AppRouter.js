import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs    from '../containers/private/Blogs';
import Home     from '../containers/private/Home';
import Profile  from '../containers/private/Profile';
import Schedule from '../containers/private/Schedule';
import Tools    from '../containers/private/Tools';
import AboutUs  from '../containers/public/AboutUs';
import LogIn    from '../containers/public/LogIn';
import Main     from '../containers/public/Main';
import SignUp   from '../containers/public/SignUp';
import NotFound from '../containers/NotFound';

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
