/* SNACK 1 */

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
// aggiungo delle chiavi all'oggetto dell'array 
const guestsList = guests.map((element, index) => {
    return {
        table: 'Tavolo Vip', guest: element, place: index + 1
    }
})
console.log(guestsList)



/* SNACK 2 */
const students = [
    { id: 213, name: 'Marco della Rovere', vote: 78 },
    { id: 110, name: 'Paola Cortellessa  ', vote: 96 },
    { id: 250, name: 'Andrea Mantegna', vote: 48 },
    { id: 145, name: 'Gaia Borromini', vote: 74 },
    { id: 196, name: 'Luigi Grimaldello', vote: 68 },
    { id: 102, name: 'Piero della Francesca', vote: 50 },
    { id: 120, name: 'Francesca da Polenta', vote: 84 },
];
console.log(students);

// # STUDENTI CON VOTI SUPERIORI A 70
const getVote = (arr, min) => {
    return arr.filter((item) => (item.vote > min));
}
console.log(getVote(students, 70))

// # STUDENTI ID MAGGIORE DI 120
const getId = (arr, min) => {
    return arr.filter((item) => (item.id > min));
}
console.log(getId(students, 120));

const getIdAndVote = (arr, val1, val2) => {
    return arr.filter((item) => (item.id > val1 && item.vote > val2));
};
console.log(getIdAndVote(students, 120, 70))

const upperCased = (phrase) => {
    return phrase.split(' ').map(word => word.toUpperCase()).join(' ');
};

getIdAndVote(students,120,70).forEach((element) => {
    element.name = upperCased(element.name);
    console.log(`${element.name} (id: ${element.id}), con un voto di: ${element.vote}`);
});




/* SNACK 3 */

const bici = [
    {nome: 'bici1', peso: 5} ,
    {nome: 'bici2', peso: 3} ,
    {nome: 'bici3', peso: 6} ,
    {nome: 'bici4', peso: 8} ,
    {nome: 'bici5', peso: 2} ,
    {nome: 'bici6', peso: 4} ,
    {nome: 'bici7', peso: 7} 
]

let pesoMin = 0;

for (let i = 0; i < bici.length; i++) {
    console.log(pesoMin);
    if (bici[i].peso < bici[pesoMin].peso) {
        pesoMin = i
    }
    
}

console.log(bici[pesoMin]);

/* SNACK 4 */

const teams = [
    {nome:'Milan', punti: 0, falliSubiti: 0},
    {nome:'Inter', punti: 0, falliSubiti: 0},
    {nome:'Napoli', punti: 0, falliSubiti: 0},
    {nome:'Roma', punti: 0, falliSubiti: 0},
    {nome:'Fiorentina', punti: 0, falliSubiti: 0},
    {nome:'Lazio', punti: 0, falliSubiti: 0}
]

const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    team.falliSubiti = getRandomNumber(1,70);
    team.punti = getRandomNumber(1,100);
}

console.table(teams);

const newTeamsList = [];

for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    const { nome, falliSubiti } = team;
    newTeamsList.push({ nome, falliSubiti });
};

console.table(newTeamsList);

for (let i = 0; i < newTeamsList.length; i++) {
    let currentTeam = newTeamsList[i];
    for (let key in currentTeam) {
    document.getElementById("list").innerHTML += `<li>${key + '  '} : ${currentTeam[key]}</li>`
}

} 



    