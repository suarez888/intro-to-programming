let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "thisYear";
footer.appendChild(copyright);

let skills = ["HTML","CSS","JavaScript"];
let skillsSection = select.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; skills.length; i++ ){
    let skill = document.createElement('li');
    skill.innerText = [];
    skill.appendChild(skillsList);
};