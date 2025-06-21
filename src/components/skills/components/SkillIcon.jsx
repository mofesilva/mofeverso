import React from 'react';

function SkillIcon(props) {
    return (
        <div className="bg-elevate rounded-lg aspect-square size-16 flex items-center justify-center">
            {props.iconImg !== undefined && props.iconImg !== null && props.iconImg !== '' ?
                props.iconImg
                : <i className={`${props.icon} text-soft-text text-3xl hover:text-accent transition-all duration-300`}></i>}
        </div>
    )
}

export default SkillIcon;