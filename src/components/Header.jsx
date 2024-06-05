import React from "react";

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <div className="flex justify-between navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">Todo Apps</button>
            {isLoggedIn && (
                <button className="btn btn-dark" onClick={onLogout}>
                    Logout
                </button>
            )}
        </div>
    );
};

export default Header;
