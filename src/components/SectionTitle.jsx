import React from 'react';

function SectionTitle(props) {
    return (
        <div className="section-title flex items-center content-center gap-4 px-4 justify-items-start justify-start">
            <h1 className="font-rajdhani text-2xl font-bold text-accent text-start">{props.title}</h1>
            <span className="title-divider items-end content-end w-full">
                <div className="divider h-px mb-1 border-b-4 border-b-accent opacity-70 border-dotted"></div>
                <div className="divider h-px border-b-4 border-b-accent opacity-70 border-dotted"></div>
            </span>
        </div>
    )
}

export default SectionTitle;