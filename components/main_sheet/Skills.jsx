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
    'acrobatics': { stat: 'dex', training: 'untrained' },
    'arcana': { stat: 'int', training: 'untrained' },
    'athletics': { stat: 'str', training: 'untrained' },
    'crafting': { stat: 'int', training: 'untrained' },
    'deception': { stat: 'cha', training: 'expert' },
    'diplomacy': { stat: 'cha', training: 'untrained' },
    'intimidation': { stat: 'cha', training: 'untrained' },
    'lore: uwuing': { stat: 'int', training: 'untrained' },
    'medicine': { stat: 'wis', training: 'legendary' },
    'occultism': { stat: 'int', training: 'untrained' },
    'performance': { stat: 'cha', training: 'untrained' },
    'religion': { stat: 'wis', training: 'untrained' },
    'society': { stat: 'int', training: 'untrained' },
    'stealth': { stat: 'dex', training: 'untrained' },
    'survival': { stat: 'wis', training: 'trained' },
    'thievery': { stat: 'dex', training: 'untrained' },
};



export default function Skills(/*{ skills, level, stats }*/) {
    return (
        <div className="flex flex-col justify-center items-center">
            <ul className='bg-gray-900 rounded text-white p-3'>
                {Object.entries(baseSkills).map(([skill, skillObj], index) => {
                    const mod = getModifier(stats[skillObj.stat]) + getProficiencyBonus(level, skillObj.training);

                    return <li className='cursor-pointer select-none group flex p-0.5' key={index}>
                        <span className='bg-slate-800 first-letter:capitalize px-2 py-0.5 rounded mr-2'>{skillObj.training[0]}</span>
                        <span className='w-7 min-w-max group-hover:text-red-400 group-hover:scale-110 ease-in-out duration-75 font-mono'>
                            {(mod>=0?'+':'') + mod}</span>
                        <span className='pl-2 first-letter:capitalize group-hover:text-red-400'>
                            {skill}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}