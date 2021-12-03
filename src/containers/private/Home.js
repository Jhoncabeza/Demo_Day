import React from 'react';
import NavBar from '../../components/Home/NavBar'
import Container from '../../components/Home/Container'

const Home = () => {
    return (
        <div className="h-100v">
            <div  >
                <NavBar className="h-10v"/>
            </div>
            <div className="h-90v w-full" >
                <Container />
            </div>
        </div>
    )
}

export default Home;
