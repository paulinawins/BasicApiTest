const ghibli = 'https://ghibliapi.herokuapp.com/films';

fetch(ghibli)
.then(res=> res.json())
.then(data => {
    data.forEach(movie => console.log(movie.title));
})
.catch(e => {
    console.log("There was an error")
})

