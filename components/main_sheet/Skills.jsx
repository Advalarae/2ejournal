import React from 'react';
import { getModifier, getProficiencyBonus } from 'lib/calculations';


const level = 1;

const stats = {
    'str': 17,
    'dex': 15,
    'con': 13,
    'int': 4,
    'wis': 18,
    'cha': 13,
};

const baseSkills = {
    'acrobatics': { stat: 'dex', training: 'untrained', modifier: 0 },
    'arcana': { stat: 'int', training: 'untrained', modifier: 0 },
    'athletics': { stat: 'str', training: 'untrained', modifier: 0 },
    'crafting': { stat: 'int', training: 'untrained', modifier: 0 },
    'deception': { stat: 'cha', training: 'expert', modifier: 0 },
    'diplomacy': { stat: 'cha', training: 'untrained', modifier: 0 },
    'intimidation': { stat: 'cha', training: 'untrained', modifier: 0 },
    'medicine': { stat: 'wis', training: 'legendary', modifier: 0 },
    'occultism': { stat: 'int', training: 'untrained', modifier: 0 },
    'performance': { stat: 'cha', training: 'untrained', modifier: 0 },
    'religion': { stat: 'wis', training: 'untrained', modifier: 0 },
    'society': { stat: 'int', training: 'untrained', modifier: 0 },
    'stealth': { stat: 'dex', training: 'untrained', modifier: 0 },
    'survival': { stat: 'wis', training: 'trained', modifier: 0 },
    'thievery': { stat: 'dex', training: 'untrained', modifier: 0 },
    'lore': {
        'uwuing': { stat: 'int', training: 'trained', modifier: 0 },
        'piloting': { stat: 'int', training: 'trained', modifier: 0 },
        'tomfoolery': { stat: 'int', training: 'legendary', modifier: 0 }
    },
};


const colors = {
    'untrained': 'bg-slate-700',
    'trained': 'bg-green-700',
    'expert': 'bg-blue-700',
    'master': 'bg-purple-700',
    'legendary': 'bg-orange-700',
}

function Skill({ name, skill }) {
    const mod = getModifier(stats[skill.stat]) + getProficiencyBonus(level, skill.training);

    // random number between 1 and 20
    const roll = () => { 
        const roll = Math.floor(Math.random() * 20) + 1; 

        alert(`roll(d20 + ${mod}) = ${roll} + ${mod} = ${roll + mod}`)
    }

    return <li onClick={roll} className='relative cursor-pointer select-none group flex p-0.5 pr-2 rounded hover:bg-slate-800 ease-in-out duration-200'>
                <span className={`${colors[skill.training]} first-letter:capitalize text-center py-0.5 w-6 rounded mr-3`}>{skill.training[0]}</span>
                <span className='mr-2 w-7 min-w-max font-mono table-cell align-middle leading-relaxed'>
                    {(mod>=0?'+':'') + mod}</span>
                <span className='first-letter:capitalize table-cell align-middle leading-relaxed'>
                    {name}</span>
            </li>
}

export default function Skills(/*{ skills, level, stats }*/) {
    const { lore, ...skills } = baseSkills;

    return (
        <div className="flex flex-col justify-center items-center">
            <ul className='bg-gray-900 rounded text-slate-100 py-3 pl-3 pr-2'>
                {Object.entries(skills).map(([skill, skillObj], index) => 
                    <Skill name={skill} skill={skillObj} key={index} /> )}

                <hr className='my-1 border-slate-600' />

                {Object.entries(lore).map(([name, skill], index) => 
                    <Skill name={`Lore: ${name}`} skill={skill} key={index} /> )}
            </ul>
        </div>
    )
}