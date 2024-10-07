import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 969);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 969) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        });
    }
        , []);

    return (
        <>
            <div className="hamburger" onClick={toggleSidebar}>
                <span>&#9776;</span>
            </div>
            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                <div className="logo">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontSize: '40px' }}>
                            🌎
                        </div>
                        <div>
                            <h2>Canine Karma</h2>
                            <p style={{ fontSize: '10px' }}>Dog Behavior Expert 🐕🐶</p>
                        </div>
                    </div>
                </div>
                <ul className="menu">
                    <li className="menu-item" style={{
                        background: isOpen ? 'white' : '',
                        color: isOpen ? 'black' : ''
                    }}>
                        <span className="icon">🏠</span> Dashboard
                    </li>
                    <li className="menu-item" >
                        <span className="icon">🐶</span> Dogs
                    </li>
                    <li className="menu-item">
                        <span className="icon">📅</span> Calendar
                    </li>
                    <li className="menu-item">
                        <span className="icon">📊</span> Reports
                    </li>
                    <li className="menu-item">
                        <span className="icon">📖</span> Client Report
                    </li>
                    <li className="menu-item">
                        <span className="icon">🐾</span> Rescue Dogs
                    </li>
                    <li className="menu-item">
                        <span className="icon">⚙️</span> Settings
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
