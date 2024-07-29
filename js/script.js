const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo:
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 
    }
];


teamMembers.forEach(member => {
    console.log(`Name: ${member.name}, Role: ${member.role}, Photo: ${member.photo}`);
});


function createMemberElement(member) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    const memberName = document.createElement('strong');
    memberName.textContent = `Name: ${member.name}`;
    memberDiv.appendChild(memberName);
    memberDiv.appendChild(document.createElement('br'));

    const memberRole = document.createElement('strong');
    memberRole.textContent = `Role: ${member.role}`;
    memberDiv.appendChild(memberRole);
    memberDiv.appendChild(document.createElement('br'));

    const memberPhoto = document.createElement('img');
    memberPhoto.src = member.photo;
    memberPhoto.alt = member.name;
    memberDiv.appendChild(memberPhoto);

    return memberDiv;
}


const teamContainer = document.getElementById('team-container');

teamMembers.forEach(member => {
    const memberElement = createMemberElement(member);
    teamContainer.appendChild(memberElement);
});