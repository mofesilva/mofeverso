import React from 'react';
import Header from '../components/header/Header';
import ProfileBio from '../components/profile/ProfileBio';
import SkillsList from '../components/skills/SkillsList';
import SectionTitle from '../components/SectionTitle';

function Home() {
    return (
        <div className="w-full bg-main-bg">
            <Header />
            <ProfileBio />
            <SkillsList />
            <SectionTitle title="Projetos" />
        </div>
    )
}

export default Home;