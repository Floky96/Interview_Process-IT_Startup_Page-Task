const API_URL = "https://reqres.in/api/users";
let members = [];
let title = "unset";

async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    let retrievedMembers = data.data;
    retrievedMembers.splice(5, 1)
    return retrievedMembers;
}

members = await fetchData();

const createPerson = (member) => {

    const section = document.getElementById('team_section')
    const person = document.createElement('div')
    person.classList.add('person')
    person.id = 'person'

    if (title == "unset") {
        const message = document.createElement('h2')
        message.innerText = "Meet The Team!"
        section.appendChild(message)
        title = "set"
    }

    const firstName = member.first_name
    const surname = member.last_name
    const email = member.email
    const avatar = member.avatar

    const team_member = `
    <div class="headshot" id="headshot" style="background-image: url(${avatar})"></div>
    <h3 id="name">${firstName}</h3>
    <h3 id="surname">${surname}</h3>
    <h4 id="email">${email}</h4>
`

    person.innerHTML = team_member
    section.appendChild(person)
}

export const getSetData = () => {
    members.forEach(member => {
        createPerson(member)
    })
}
