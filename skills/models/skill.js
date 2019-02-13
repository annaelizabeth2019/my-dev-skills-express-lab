const skills = [
{skill: 'Javascript', have: true},
{skill: 'HTML/CSS', have: true},
{skill: 'Express', have: false},
{skill: 'Python', have: false},
{skill: 'List-writing', have: true},
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills[id];
}