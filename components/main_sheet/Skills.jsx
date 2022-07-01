import React from 'react';

export default function Skills({ skills }) {
    //display pathfinder 2eskills based on props
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center">Skills</h1>
            <div className="flex flex-col justify-center items-center">
                {skills?.map((skill, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center" key={index}>
                            <h2 className="text-2xl font-bold text-center">{skill.name}</h2>
                            <p className="text-center">{skill.description}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}