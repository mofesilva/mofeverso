import React from 'react';

function SocialLinks(props) {
    return (
        <div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <i className={`${props.icon} text-main-text text-3xl hover:text-accent transition-all duration-300`}></i>
            </a>
        </div>
    )
}

export default SocialLinks;