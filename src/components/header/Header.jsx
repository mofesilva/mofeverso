import React from 'react';
import profilePic from '../../assets/images/me-profile-pic.jpg';
import HeaderContent from './components/HeaderContent';
import HeaderProfilePicture from './components/HeaderProfilePicture';
import SocialSection from '../socials/SocialSection';

function Header() {
    return (
        <header className="flex flex-col items-center text-center content-end
        lg:justify-self-center justify-items-center justify-center md:h-1/2 h-2/5 w-full lg:w-1/2 text-white pt-14">
            <HeaderProfilePicture profilePic={profilePic} rounded="rounded-2xl" size="size-48" />
            <HeaderContent />
            <SocialSection />
        </header>
    )
}

export default Header;