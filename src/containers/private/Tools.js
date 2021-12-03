import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tools = () => {
    return (
        <div>
            <div className="text-5xl text-gray-600">
                <Link to="/Home">
                    <FaHome />
                </Link>
            </div>
            <h1>Herramientas</h1>
        </div>
    )
}

export default Tools;
