
let fetchData = (urlEnd) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${urlEnd}`)
    .then(response => response.json())
}

export { fetchData }



