
let fetchData = (end) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${end}`)
  .then(response => {
    if(!response.ok) {
        throw new Error (`${response.status}`);
    }
    return response.json();
});
}

export { fetchData }



