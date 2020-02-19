const ghibli = 'https://ghibliapi.herokuapp.com/films';
const geekJokes = 'https://geek-jokes.sameerkumar.website/api';

fetch(ghibli)
.then(res=> res.json())
.then(data => {
    data.forEach(movie => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300)
        p.textContent = `${movie.description}...`

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)

        //console.log(movie.title)
        //console.log(movie.description)
    });
})
.catch(e => {
    console.log("There was an error")
})

fetch(geekJokes)
.then(res=> res.json())
.then(data => {
    console.log("Dad Joke: " + data);
})
.catch(e=>{
    console.log("Dad are sad")
})

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
