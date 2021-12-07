import React from 'react';
import NavBar from '../components/Home/NavBar'


const Home = () => {
    return (
        <div >
            <div  >
                <NavBar />
                <div className="flex h-100v justify-center items-center">
                    <iframe width="760" height="515" src="https://www.youtube.com/embed/Aw71zanwMnY" title="YouTube video player"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home;
