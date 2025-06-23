import React from 'react';
import Header from '../components/header/Header';
import ProfileBio from '../components/profile/ProfileBio';
import SkillsList from '../components/skills/SkillsList';
import ProjectsSection from '../components/projects/ProjectsSection';

function Home() {
    return (
        <div className="w-full bg-main-bg">
            <Header />
            <ProfileBio />
            <SkillsList />
            <ProjectsSection />
        </div>
    )
}

export default Home;