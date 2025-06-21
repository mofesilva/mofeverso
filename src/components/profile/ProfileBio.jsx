import React from 'react';
import SectionTitle from '../SectionTitle';

function ProfileBio() {
    return (
        <div id="bio" className="font-bold w-full lg:w-1/2 justify-self-center">
            <SectionTitle title="Bio" />
            <p className="text-md font-league-spartan text-justify font-light text-white pt-2 pr-4 pl-4">
                Aprendendo a programar e a criar coisas incríveis. Aprendendo a programar e a criar coisas incríveis. Aprendendo a programar e a criar coisas incríveis. Aprendendo a programar e a criar coisas incríveis. Aprendendo a programar e a criar coisas incríveis
            </p>
        </div>
    )
}

export default ProfileBio;