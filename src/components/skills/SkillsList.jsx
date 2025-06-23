import React from 'react';
import SkillIcon from './components/SkillIcon';
import SectionTitle from '../SectionTitle';
import TailwindcssIcon from '../../assets/icons/TailwindcssIcon';
import PhotoshopLogo from '../../assets/icons/PhotoshopIcon';

function SkillsList(props) {
    return (
        <div className="w-full  lg:w-1/2  mt-4 justify-self-center">
            <SectionTitle title="Skills" />
            <ul className="skill-list p-4 flex flex-wrap gap-4 justify-center">
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-flutter" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-dart-lang" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-html5" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-css3-alt" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-js" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-react" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-node-js" />
                </li>
                <li className="skill-item">
                    <SkillIcon icon="fa-brands fa-git-alt" />
                </li>
                <li className="skill-item">
                    <SkillIcon iconImg={<TailwindcssIcon />} />
                </li>
                <li className="skill-item">
                    <SkillIcon iconImg={<PhotoshopLogo />} />
                </li>
            </ul>
        </div>
    )
}

export default SkillsList;