import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    const [menuState, setmenuState] = useState(false);

    function menuOpen(){
        setmenuState(!menuState);
    }

    return (
        <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-2xl text-white font-bold py-2">Blogs App</div>
            <div className="gap-6 sm:flex hidden">
                <div onClick={()=>{navigate("/Login")}} className="text-xl">Login</div>
                <div className="text-xl">Sign Up</div>
            </div>
            <button onClick={menuOpen} className="sm:hidden block text-xl">Menu</button>
            {
                menuState && (
                    <div className="sm:hidden rounded-bl absolute top-20 right-0 bg-gray-800 text-white flex flex-col">
                        <div onClick={()=>{navigate("/Login")}} className="text-xl p-4 hover:bg-slate-700">Login</div>
                        <div className="text-xl p-4 hover:bg-slate-700">Sign Up</div>
                    </div>
                )
            }
        </header>
    );
}

export default Header;