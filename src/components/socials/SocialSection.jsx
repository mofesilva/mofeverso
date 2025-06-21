import React from 'react';
import SocialLinks from './components/SocialLinks';

function SocialSection() {
    return (
       <div className="w-full mt-4">
            <ul className="skill-list px-4 pt-0 pb-10 flex flex-wrap gap-4 justify-center">
                <li className="social-item">
                    <SocialLinks link="https://github.com/mofesilva" icon="fa-brands fa-github" />
                </li>
              <li className="social-item">
                    <SocialLinks link="https://github.com/mofesilva" icon="fa-brands fa-gitlab" />
                </li>
                <li className="social-item">
                    <SocialLinks link="https://github.com/mofesilva" icon="fa-brands fa-instagram" />
                </li>
                <li className="social-item">
                    <SocialLinks link="https://github.com/mofesilva" icon="fa-brands fa-linkedin" />
                </li>
            </ul>
        </div>
    )
}

export default SocialSection;