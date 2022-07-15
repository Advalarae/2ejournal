export function getModifier(score) {
  return Math.floor((score - 10) / 2);
}

const proficiencyBonus = {
    'untrained': 0,
    'trained': 2,
    'expert': 4,
    'master': 6,
    'legendary': 8,
};


export function getProficiencyBonus(level, training) {
    return proficiencyBonus[training] + (training !== 'untrained' ? level : 0);
}