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