import React from 'react';


function HeaderProfilePicture(props) {
    return (
        <div id="profile-pic" className={`${props.rounded} aspect-square
            flex items-center justify-center bg-white ${props.size} overflow-clip`}>
            <img src={props.profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
    )
}

export default HeaderProfilePicture;