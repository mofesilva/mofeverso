import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpg';

function Header(props) {
    return (
        <header className="text-center content-center justify-items-center h-1/3 w-full text-white p-2">
            <div id="profile-pic" className="justify-center rounded-2xl aspect-square
            align-center items-center bg-white size-48 overflow-clip">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div id="name" className=" font-bold pt-4">
                <h1 className="text-2xl rajdhani text-vlight-blue ">
                    Moisés Ferreira e Silva
                </h1>
                <h2 className="text-sm league-spartan text-vlight-blue text pt-1">
                    Fullstack Software Enginner | Flutter/Dart | Node.js | UI/UX Designer | Content Creator | Brand Designer | Social Media Designer
                </h2>
                <div className="divider h-px bg-vlight-blue mt-4 mx-2"></div>
            </div>
        </header>
    )
}

export default Header;