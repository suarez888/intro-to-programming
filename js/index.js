
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('.footer');
let copyright = document.createElement('p')
copyright.innerHTML = "Emmely " + thisYear;
footer.appendChild(copyright);


var skills = ["HTML","CSS","JavaScript"];
var skillsSection = document.getElementById('mySkills');
var skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++ ){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};
