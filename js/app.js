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

const capitalize = (phrase) => {
    return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
};

(getIdAndVote(students,120,70)).forEach((element) => {
    element.name = capitalize(element.name);
    console.log(`${element.name} (id: ${element.id}), con un voto di: ${element.vote}`);
});